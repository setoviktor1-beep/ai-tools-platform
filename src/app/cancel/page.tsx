import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { XCircle } from "lucide-react";

export default function CancelPage() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center py-16">
            <Container className="text-center">
                <XCircle className="mx-auto h-20 w-20 text-red-500" />
                <h1 className="mt-8 text-4xl font-bold text-gray-900 dark:text-white">
                    Payment Cancelled
                </h1>
                <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                    No charges were made. You can try again whenever you're ready.
                </p>
                <div className="mt-8">
                    <Button href="/products">Return to Products</Button>
                </div>
            </Container>
        </div>
    );
}
