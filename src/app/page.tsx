import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import { ArrowRight, CheckCircle2, Zap, Shield, Users } from "lucide-react";

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 dark:bg-gray-950">
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
              Professional AI Tools for <span className="text-blue-600 dark:text-blue-500">Serious Builders</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Stop wasting time with generic prompts. Get production-ready agent systems, rigorous evaluation toolkits, and premium prompt engineering frameworks.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button href="/products" size="lg">
                Browse Products
              </Button>
              <Button href="/about" variant="outline" size="lg">
                Our Philosophy
              </Button>
            </div>
          </div>
        </Container>

        {/* Background gradient blob */}
        <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-blue-50/50 blur-3xl dark:bg-blue-950/20" />
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <Container>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Resources</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Hand-picked tools to accelerate your workflow.</p>
            </div>
            <Link href="/products" className="hidden text-sm font-semibold text-blue-600 hover:text-blue-500 sm:block dark:text-blue-400">
              View all products <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/products" className="text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400">
              View all products <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* How it works / Features */}
      <section className="bg-gray-50 py-24 dark:bg-gray-900/50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Choose Our Tools?</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              We don't sell "magic". We sell engineered systems with predictable outputs.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Production Ready</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Rigourously tested components. Copy, paste, and deploy to your production environment with confidence.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Safety First</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Built-in guardrails and risk assessment modules to keep your AI agents from going rogue.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Human in the Loop</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Designed for professionals. Our tools augment your expertise rather than attempting to replace it.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Building in Public / FAQ */}
      <section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "How do I receive the files?", a: "Immediately after purchase, you will receive an email with a secure download link for all included files (Markdown, JSON, PDF, etc.)." },
                { q: "Can I use these for client work?", a: "Yes! All 'Premium' and 'Toolkit' licenses allow for commercial use in your own projects or client deliverables. You just can't resell the prompt raw." },
                { q: "Do you offer refunds?", a: "We offer a 14-day refund guarantee if the product doesn't work as described. Just reach out to support." },
                { q: "How often are these updated?", a: "We update our meaningful prompts quarterly to match the latest model capabilities (e.g., GPT-5, Claude 3.5)." }
              ].map((faq, i) => (
                <div key={i} className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.q}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}