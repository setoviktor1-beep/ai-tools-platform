import { Container } from "@/components/ui/Container";

export const metadata = {
    title: "About Us | AI Tools Platform",
    description: "We build systems, not just prompts.",
};

export default function AboutPage() {
    return (
        <div className="py-24 bg-white dark:bg-gray-950">
            <Container>
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-8">
                        We Build Systems, Not Just Prompts.
                    </h1>

                    <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
                        <p>
                            The era of "magic words" is over. As LLMs become more commoditized, the value shifts from knowing a secret trick to building robust, reliable systems that integrate AI into meaningful workflows.
                        </p>
                        <p>
                            We are a team of engineers and product designers who grew tired of the "hustle bro" prompt ecosystem. We don't sell 10,000 one-line prompts scraped from Reddit. We build <strong>SaaS-grade tools</strong> that happen to run on natural language.
                        </p>
                        <h3>Our Principles</h3>
                        <ul>
                            <li><strong>Determinism over Creativity:</strong> We prefer reliable outputs over wild hallucinations.</li>
                            <li><strong>Transparency:</strong> We show you exactly how our agents think.</li>
                            <li><strong>Privacy:</strong> We advocate for local-first and non-custodial AI usage where possible.</li>
                        </ul>
                        <p>
                            Our tools are used by founders at YC startups, consultants at Big 4 firms, and independent creators who respect their audience's intelligence.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
