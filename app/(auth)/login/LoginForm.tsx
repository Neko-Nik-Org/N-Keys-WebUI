"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useAtom } from "jotai";
import { userAtom, csrfTokenAtom } from "@/store/authStore";

function LoginFormContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const nextUrl = searchParams.get("next") || "/dashboard";

    const [, setUser] = useAtom(userAtom);
    const [, setCsrfToken] = useAtom(csrfTokenAtom);

    const [user_email, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const res = await fetch("https://secrets.nekonik.com/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user_email, password }),
            });

            if (!res.ok) {
                const errText = await res.text();
                throw new Error(errText || "Invalid credentials");
            }

            const userData = await res.json();
            const token = res.headers.get("x-csrf-token");

            // Save user and csrf token to jotai (localStorage)
            setUser(userData);
            if (token) setCsrfToken(token);

            // Set a cookie so Next.js middleware allows dashboard access
            document.cookie = "auth-token=true; path=/; max-age=86400"; // 1 day

            // Navigate and clear router cache
            router.push(nextUrl);
            router.refresh();
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : "An error occurred during login.";
            setError(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white dark:bg-[#131c2c] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-8">
            <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-brand-primary transition-colors mb-6">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Welcome Back</h1>
                <p className="text-slate-600 dark:text-slate-400">Sign in to your N-Keys account to manage your environments.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                    <input
                        type="email"
                        value={user_email}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all shadow-sm"
                        required
                    />
                </div>
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
                        <a href="#" className="text-sm font-medium text-brand-primary hover:text-brand-hover">Forgot password?</a>
                    </div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all shadow-sm"
                        required
                    />
                </div>

                {error && (
                    <div className="p-3 text-sm text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400 rounded-xl border border-red-100 dark:border-red-900/50">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-4 font-bold text-white bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 flex justify-center items-center"
                >
                    {isLoading ? (
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : "Sign In"}
                </button>
            </form>

            <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
                Don&apos;t have an account? <Link href="/waitlist" className="font-medium text-brand-primary hover:text-brand-hover">Join the waitlist</Link>
            </div>
        </div>
    );
}

export default function LoginForm() {
    return (
        <Suspense fallback={
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary"></div>
            </div>
        }>
            <LoginFormContent />
        </Suspense>
    );
}
