import { Container } from "@/components/ui/Container";
import { products } from "@/data/products";
import { BuyButton } from "@/components/product/BuyButton";
import { notFound } from "next/navigation";
import { Check, FileText, Shield, Clock, Tag } from "lucide-react";
import { Metadata } from "next";

// Force static generation for these paths
export function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);
    if (!product) return { title: "Product Not Found" };

    return {
        title: `${product.title} | AI Tools Platform`,
        description: product.shortDescription,
    };
}

export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const product = products.find((p) => p.slug === params.slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="py-16 bg-white dark:bg-gray-950 min-h-screen">
            <Container>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Left Column: Details */}
                    <div>
                        <div className="mb-6 flex items-center gap-4">
                            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                                {product.category}
                            </span>
                            <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <Clock className="mr-1 h-4 w-4" />
                                Updated: {product.updatedAt}
                            </span>
                        </div>

                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                            {product.title}
                        </h1>

                        <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
                            {product.shortDescription}
                        </p>

                        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Description</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {product.longDescription}
                            </p>
                        </div>

                        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Use Case</h3>
                            <div className="bg-blue-50 p-6 rounded-xl dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800">
                                <p className="text-blue-900 dark:text-blue-300 font-medium">
                                    Perfect for: {product.whoFor}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Included Files</h3>
                            <ul className="space-y-3">
                                {product.deliverables.map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                                        <FileText className="mr-3 h-5 w-5 text-gray-400 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Checkout & Preview */}
                    <div className="lg:pl-8">
                        <div className="sticky top-24 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                            <div className="mb-6">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">One-time payment</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-bold text-gray-900 dark:text-white">€{product.priceEUR}</span>
                                    <span className="text-gray-500 dark:text-gray-400">EUR</span>
                                </div>
                            </div>

                            <BuyButton slug={product.slug} priceId={product.stripePriceId} price={product.priceEUR} />

                            <div className="mt-6 space-y-4">
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                    <Check className="mr-3 h-5 w-5 text-green-500" />
                                    Instant Download
                                </div>
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                    <Shield className="mr-3 h-5 w-5 text-green-500" />
                                    Secure Stripe Checkout
                                </div>
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                    <Tag className="mr-3 h-5 w-5 text-green-500" />
                                    License: {product.license}
                                </div>
                            </div>
                        </div>

                        {/* Preview Section */}
                        <div className="mt-12">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Preview</h3>
                            <div className="prose prose-sm dark:prose-invert max-w-none rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
                                <pre className="whitespace-pre-wrap font-mono text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                                    {product.preview}
                                </pre>
                            </div>
                            <p className="mt-2 text-center text-xs text-gray-500 italic">
                                * This is a truncated preview. Full content available after purchase.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
