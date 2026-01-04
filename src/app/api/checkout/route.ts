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

        // In a real app, you would use product.stripePriceId.
        // For MVP/Demo without real price IDs, we could potentially create a price on the fly 
        // or assume the user has set valid price IDs in their env/products file.
        // However, creating sessions requires a valid price ID or line_items with price_data.

        // We will use price_data/unit_amount to avoid needing pre-created price IDs, 
        // BUT this is less secure properly (user could manipulate frontend? No, this is backend).
        // Using price_data allows us to just pass the amount we know.

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "eur",
                        product_data: {
                            name: product.title,
                            description: product.shortDescription,
                            // images: [product.imageUrl], // if we had images
                        },
                        unit_amount: product.priceEUR * 100, // Amount in cents
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
            metadata: {
                productSlug: product.slug,
            },
        });

        return NextResponse.json({ url: session.url });
    } catch (error) {
        console.error("Stripe error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
