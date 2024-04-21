'use client'


import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export function QCLayout ({ children }) {
    const [queryClient] = useState(() => new QueryClient())
    const router = useRouter()
    return (
    <QueryClientProvider client={queryClient}>
            {children}
    </QueryClientProvider>)
}