import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

export const metadata = {
    title: "Pricing | AI Tools Platform",
    description: "Simple, transparent pricing. Pay only for what you need.",
};

export default function PricingPage() {
    return (
        <div className="py-24 bg-white dark:bg-gray-950">
            <Container>
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
                        No subscriptions. No hidden fees. You buy the toolkit, you own it forever.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                    {/* Pay-per-product Model */}
                    <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">A La Carte</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Perfect for specific needs.</p>
                        <div className="mt-6 flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-gray-900 dark:text-white">€29 - €149</span>
                            <span className="text-gray-600 dark:text-gray-400">/ product</span>
                        </div>
                        <ul className="mt-8 space-y-4">
                            {[
                                "Lifetime access to purchased files",
                                "Free updates for 12 months",
                                "Commercial use license included",
                                "Instant download"
                            ].map((item) => (
                                <li key={item} className="flex items-center text-gray-700 dark:text-gray-300">
                                    <Check className="mr-3 h-5 w-5 text-blue-600 dark:text-blue-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8">
                            <Button href="/products" className="w-full justify-center">
                                Browse Products
                            </Button>
                        </div>
                    </div>

                    {/* Bundle Info */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Custom Bundles</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">For agencies and teams.</p>
                        <div className="mt-6 flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-gray-900 dark:text-white">Custom</span>
                        </div>
                        <ul className="mt-8 space-y-4">
                            {[
                                "Volume discounts (3+ items)",
                                "Team training sessions",
                                "Custom prompt engineering",
                                "Priority email support"
                            ].map((item) => (
                                <li key={item} className="flex items-center text-gray-700 dark:text-gray-300">
                                    <Check className="mr-3 h-5 w-5 text-gray-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8">
                            <Button href="/contact" variant="outline" className="w-full justify-center">
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
