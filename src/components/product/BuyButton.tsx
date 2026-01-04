"use client";

import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface BuyButtonProps {
    slug: string;
    priceId?: string;
    price: number;
}

export function BuyButton({ slug, priceId, price }: BuyButtonProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckout = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ slug }),
            });

            const data = await response.json();

            if (response.ok && data.url) {
                window.location.href = data.url;
            } else {
                alert(data.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Checkout error:", error);
            alert("Failed to start checkout.");
        } finally {
            setIsLoading(false);
        }
    };

    const isConfigured = priceId && !priceId.includes("REPLACE_ME");

    if (!isConfigured) {
        return (
            <div className="flex flex-col gap-2">
                <Button disabled className="w-full opacity-50 cursor-not-allowed">
                    Buy for €{price}
                </Button>
                <p className="text-xs text-amber-600 dark:text-amber-500 text-center">
                    Checkout not configured yet. <a href="mailto:support@example.com" className="underline">Contact me</a> to purchase.
                </p>
            </div>
        )
    }

    return (
        <Button
            onClick={handleCheckout}
            disabled={isLoading}
            className="w-full text-lg py-4"
        >
            {isLoading ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                </>
            ) : (
                `Buy Now - €${price}`
            )}
        </Button>
    );
}
