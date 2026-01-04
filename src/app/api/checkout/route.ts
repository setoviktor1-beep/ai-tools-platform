import { stripe } from "@/lib/stripe";
import { products } from "@/data/products";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { slug } = await req.json();
    const product = products.find((p) => p.slug === slug);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: "Stripe is not configured" }, { status: 500 });
    }

    // Build a safe base URL for Stripe redirects (must include http/https).
    // Priority:
    // 1) NEXT_PUBLIC_SITE_URL (recommended on Vercel)
    // 2) request Origin header
    // 3) hard fallback
    const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
    const originHeader = req.headers.get("origin")?.trim();

    const rawBase = envSiteUrl || originHeader || "https://vpraxis.ink";
    const baseUrl = rawBase.startsWith("http://") || rawBase.startsWith("https://")
      ? rawBase
      : `https://${rawBase}`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: product.title,
              description: product.shortDescription,
            },
            unit_amount: Math.round(product.priceEUR * 100), // cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
      metadata: {
        productSlug: product.slug,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
