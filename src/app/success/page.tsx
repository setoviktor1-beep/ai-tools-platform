import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export default function SuccessPage() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center py-16">
            <Container className="text-center">
                <CheckCircle2 className="mx-auto h-20 w-20 text-green-500" />
                <h1 className="mt-8 text-4xl font-bold text-gray-900 dark:text-white">
                    Payment Successful!
                </h1>
                <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                    Check your email for the download link.
                </p>
                <div className="mt-8">
                    <Button href="/products">Continue Browsing</Button>
                </div>
            </Container>
        </div>
    );
}
