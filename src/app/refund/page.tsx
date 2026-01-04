import { Container } from "@/components/ui/Container";

export default function RefundPage() {
    return (
        <div className="py-16 bg-white dark:bg-gray-950">
            <Container>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                    <h1>Refund Policy</h1>
                    <p>We stand by our quality.</p>
                    <p>If you are not satisfied with the product, you can request a full refund within 14 days of purchase.</p>
                    <p>To initiate a refund, email support@example.com with your Order ID and a brief explanation of why the product didn't meet your needs.</p>
                </div>
            </Container>
        </div>
    );
}
