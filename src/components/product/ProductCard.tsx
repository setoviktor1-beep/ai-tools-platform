import Link from "next/link";
import { Product } from "@/data/products";
import { ArrowRight, Check } from "lucide-react";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    {product.category}
                </span>
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                    €{product.priceEUR}
                </span>
            </div>

            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                <Link href={`/products/${product.slug}`} className="hover:underline">
                    {product.title}
                </Link>
            </h3>

            <p className="mb-6 flex-grow text-sm text-gray-600 dark:text-gray-400">
                {product.shortDescription}
            </p>

            <div className="mt-auto">
                <Link
                    href={`/products/${product.slug}`}
                    className="group inline-flex w-full items-center justify-center rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
}
