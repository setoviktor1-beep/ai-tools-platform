import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Products | AI Tools Platform",
    description: "Browse our collection of professional AI prompts, agents, and toolkits.",
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function ProductsPage(props: {
    searchParams: SearchParams;
}) {
    const searchParams = await props.searchParams;
    const category = typeof searchParams.category === "string" ? searchParams.category.toLowerCase() : undefined;

    const filteredProducts = category
        ? products.filter((p) => p.category.toLowerCase().includes(category.slice(0, -1))) // simple hack for plural 'prompts' -> 'prompt' match
        : products;

    // Better category matching logic:
    // If param is "prompts", match "Prompt"
    // If param is "toolkits", match "Toolkit"
    // If param is "agents", match "Agent"

    const displayProducts = category
        ? products.filter(p => {
            if (category === "prompts") return p.category === "Prompt";
            if (category === "toolkits") return p.category === "Toolkit";
            if (category === "agents") return p.category === "Agent";
            return true;
        })
        : products;

    return (
        <div className="py-16 bg-gray-50 min-h-screen dark:bg-gray-950">
            <Container>
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                        {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : "All Products"}
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        {category
                            ? `Browse our specialized collection of ${category}.`
                            : "Explore our full catalog of high-impact AI resources."}
                    </p>
                </div>

                {displayProducts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {displayProducts.map((product) => (
                            <ProductCard key={product.slug} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-500">No products found for this category.</p>
                    </div>
                )}
            </Container>
        </div>
    );
}
