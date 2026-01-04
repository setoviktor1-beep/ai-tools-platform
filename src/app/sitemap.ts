import { products } from "@/data/products";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

    const productUrls = products.map((product) => ({
        url: `${baseUrl}/products/${product.slug}`,
        lastModified: new Date(product.updatedAt),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    const staticUrls = [
        "",
        "/products",
        "/pricing",
        "/about",
        "/contact",
        "/terms",
        "/privacy",
        "/refund",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1.0 : 0.5,
    }));

    return [...staticUrls, ...productUrls];
}
