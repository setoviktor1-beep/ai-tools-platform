import Link from "next/link";
import { Container } from "../ui/Container";

const navigation = {
    product: [
        { name: "Prompts", href: "/products?category=prompts" },
        { name: "Toolkits", href: "/products?category=toolkits" },
        { name: "Agents", href: "/products?category=agents" },
    ],
    company: [
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Pricing", href: "/pricing" },
    ],
    legal: [
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" },
        { name: "Refund Policy", href: "/refund" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <Container className="py-12 md:py-16">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
                            AITools.
                        </Link>
                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                            Professional AI prompts, agents, and toolkits for modern businesses.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Product</h3>
                        <ul className="mt-4 space-y-2">
                            {navigation.product.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Company</h3>
                        <ul className="mt-4 space-y-2">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Legal</h3>
                        <ul className="mt-4 space-y-2">
                            {navigation.legal.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                        &copy; {new Date().getFullYear()} AI Tools Platform. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
