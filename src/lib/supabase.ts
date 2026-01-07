// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Service role client (admin teisės)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

// Helper funkcijos
export async function getProductByStripePrice(stripePriceId: string) {
  const { data, error } = await supabaseAdmin
    .from('products')
    .select('*')
    .eq('stripe_price_id', stripePriceId)
    .single()

  if (error) throw error
  return data
}

export async function createPurchase({
  userEmail,
  productId,
  stripePaymentIntentId,
  amount,
}: {
  userEmail: string
  productId: string
  stripePaymentIntentId: string
  amount: number
}) {
  const { data, error } = await supabaseAdmin
    .from('purchases')
    .insert({
      user_email: userEmail,
      product_id: productId,
      stripe_payment_intent_id: stripePaymentIntentId,
      amount: amount,
      status: 'completed',
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getProductById(productId: string) {
  const { data, error } = await supabaseAdmin
    .from('products')
    .select('*')
    .eq('id', productId)
    .single()

  if (error) throw error
  return data
}
