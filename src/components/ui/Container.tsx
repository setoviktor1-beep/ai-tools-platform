import type { ComponentProps } from "react";
import Link from "next/link";

export function Container({
    children,
    className = "",
    ...props
}: ComponentProps<"div">) {
    return (
        <div
            className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
