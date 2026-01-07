// app/api/webhooks/stripe/route.ts
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getProductByStripePrice, createPurchase, getProductById } from '@/lib/supabase'
import { sendProductEmail } from '@/lib/email'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
  const body = await req.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message)
    return NextResponse.json({ error: 'Webhook verification failed' }, { status: 400 })
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    try {
      // Get customer email
      const customerEmail = session.customer_details?.email
      if (!customerEmail) {
        throw new Error('No customer email found')
      }

      // Get line items to find the product
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id)
      const priceId = lineItems.data[0]?.price?.id
      
      if (!priceId) {
        throw new Error('No price ID found')
      }

      // Get product from database
      const product = await getProductByStripePrice(priceId)
      
      if (!product) {
        throw new Error(`Product not found for price ID: ${priceId}`)
      }

      // Create purchase record
      await createPurchase({
        userEmail: customerEmail,
        productId: product.id,
        stripePaymentIntentId: session.payment_intent as string,
        amount: (session.amount_total || 0) / 100, // Convert cents to dollars
      })

      // Send email with download link
      await sendProductEmail({
        to: customerEmail,
        productName: product.name,
        downloadUrl: product.file_url,
      })

      console.log('✅ Purchase processed successfully:', {
        email: customerEmail,
        product: product.name,
      })

      return NextResponse.json({ received: true })
    } catch (error: any) {
      console.error('Error processing purchase:', error)
      return NextResponse.json(
        { error: 'Failed to process purchase: ' + error.message },
        { status: 500 }
      )
    }
  }

  return NextResponse.json({ received: true })
}
