import { Container } from "@/components/ui/Container";

export default function PrivacyPage() {
    return (
        <div className="py-16 bg-white dark:bg-gray-950">
            <Container>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                    <h1>Privacy Policy</h1>
                    <p>We respect your privacy. Minimal data collection.</p>
                    <h3>1. Data We Collect</h3>
                    <p>We only collect data necessary for transaction processing via Stripe (email, payment details). We do not store your credit card information.</p>
                    <h3>2. Usage</h3>
                    <p>Your email is used to send you the product files and important updates. We do not sell your data.</p>
                </div>
            </Container>
        </div>
    );
}
