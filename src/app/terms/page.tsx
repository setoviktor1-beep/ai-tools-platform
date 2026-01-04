import { Container } from "@/components/ui/Container";

export default function TermsPage() {
    return (
        <div className="py-16 bg-white dark:bg-gray-950">
            <Container>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                    <h1>Terms of Service</h1>
                    <p>Effective Date: January 1, 2024</p>
                    <p>By purchasing our products, you agree to the following terms:</p>
                    <h3>1. License</h3>
                    <p>Purchase grants you a non-exclusive, non-transferable license to use the products for personal or commercial purposes as specified on the product page. You may not resell, redistribute, or sublicense the source files directly.</p>
                    <h3>2. Refunds</h3>
                    <p>We offer a 14-day refund policy for products that do not work as described. Please contact support.</p>
                    <h3>3. Disclaimer</h3>
                    <p>Our tools are provided "as is". We are not responsible for how you use the generative outputs. AI models are non-deterministic; use with human oversight.</p>
                </div>
            </Container>
        </div>
    );
}
