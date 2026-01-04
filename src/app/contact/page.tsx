import { Container } from "@/components/ui/Container";
import { Mail } from "lucide-react";

export const metadata = {
    title: "Contact | AI Tools Platform",
    description: "Get in touch with us.",
};

export default function ContactPage() {
    return (
        <div className="py-24 bg-gray-50 dark:bg-gray-950 min-h-screen">
            <Container>
                <div className="mx-auto max-w-2xl bg-white p-8 rounded-2xl shadow-sm dark:bg-gray-900 dark:border dark:border-gray-800">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        Have a question about a product or need a custom solution? Drop us a line.
                    </p>

                    <div className="flex items-center gap-4 text-lg font-medium text-gray-900 dark:text-white">
                        <Mail className="h-6 w-6 text-blue-600" />
                        <a href="mailto:support@example.com" className="hover:underline hover:text-blue-600">
                            support@example.com
                        </a>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Support Hours</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Monday - Friday: 9am - 5pm CET<br />
                            We typicaly reply within 24 hours.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
