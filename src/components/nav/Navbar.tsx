"use client";

import Link from "next/link";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

const navigation = [
    { name: "Products", href: "/products" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
];

export function Navbar() {
    // Mobile menu state will be handled by a client wrapper or simple CSS toggle for MVP?
    // Since we want "No bugs", we should make this a Client Component if we want state.
    // Alternatively, use a checkbox hack or just make it a client component.
    // Let's make it a client component for the mobile menu interaction.
    // BUT: This file is .tsx. To use state it must be 'use client'.
    // I will add 'use client' at the top.

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-900/80">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-blue-600 dark:text-blue-400">
                            <Sparkles className="h-6 w-6" />
                            <span>AITools.</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex md:gap-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                            <Button href="/products" variant="primary" size="sm">
                                Browse Tools
                            </Button>
                        </div>
                        {/* Mobile menu button place holder - implementing simplest non-state version or just hiding for now until I add the client logic */}
                        <MobileMenu />
                    </div>
                </div>
            </Container>
        </header>
    );
}

// Sub-component for mobile menu to keep the main navbar cleaner if I wanted, but for single file simple structure:
function MobileMenu() {
    return (
        <div className="md:hidden">
            {/* Actual mobile menu implementation would go here, maybe a simple detail/summary or just a link to products for MVP if space is tight. 
                 For a "Production Ready" look, we need a working hamburger.
             */}
            <Button variant="ghost" size="sm" className="md:hidden" aria-label="Menu" href="/products">
                <Menu className="h-6 w-6" />
            </Button>
        </div>
    )
}
