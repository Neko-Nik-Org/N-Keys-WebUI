import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Environment Variable Sync | N-Keys",
  description: "N-Keys helps teams securely sync environment variables and config files across servers, including Docker Compose and raw env var workflows, with CLI or cURL access and API key authentication.",
  openGraph: {
    title: "Secure Environment Variable Sync | N-Keys",
    description: "N-Keys helps teams securely sync environment variables and config files across servers, including Docker Compose and raw env var workflows, with CLI or cURL access and API key authentication.",
    type: "website",
  },
};

export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative px-6 pt-20 pb-24 sm:pt-32 sm:pb-32 lg:pb-40 overflow-hidden flex flex-col items-center text-center">
                {/* Background Glow */}
                <div className="absolute top-0 -translate-y-12 w-full max-w-3xl h-[400px] bg-brand-primary/20 dark:bg-brand-primary/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto animate-[fadeInUp_0.6s_ease-out_both]">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                        Securely Sync & Manage <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">env vars and configs</span>
                    </h1>
                    
                    <p className="mt-8 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Manage environment variables and config files globally in one place. 
                        Use our CLI tool or cURL directly with simple API key authentication, 
                        including Docker Compose and raw env var workflows.
                    </p>
                    
                    <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link 
                            href="/waitlist" 
                            className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                        >
                            Join Waitlist
                        </Link>
                        <a
                            href="https://calendly.com/neko-nik/general-meet"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:border-brand-primary/50 hover:shadow-lg transition-all duration-300 active:scale-[0.98]"
                        >
                            Book a Meet
                        </a>
                    </div>
                    
                    <div className="mt-8">
                        <Link 
                            href="/feature" 
                            className="group inline-flex items-center text-sm font-semibold text-brand-primary hover:text-brand-hover transition-colors"
                        >
                            Explore More Features
                            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Open Source Banner */}
                <article className="mt-20 max-w-3xl w-full mx-auto p-6 sm:p-8 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 dark:from-brand-primary/10 dark:to-brand-secondary/10 border border-brand-primary/20 rounded-2xl text-left animate-[fadeInUp_0.8s_ease-out_both] shadow-xl shadow-brand-primary/5">
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                        <div className="p-3 bg-brand-primary/10 rounded-lg text-brand-primary shrink-0">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <div className="min-w-0">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Open source and community-driven</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                                Our UI, CLI, and many more parts are open source so everyone can 
                                check code integrity, build trust, and help improve the product.
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm overflow-hidden">
                                <span className="text-slate-500 dark:text-slate-400 shrink-0">Web UI code:</span>
                                <a 
                                    href="https://github.com/Neko-Nik-Org/N-Keys-WebUI" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="text-brand-secondary hover:text-brand-primary font-medium truncate transition-colors"
                                >
                                    github.com/Neko-Nik-Org/N-Keys-WebUI
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            {/* Features Section */}
            <section className="px-6 py-20 lg:py-28 bg-transparent border-t border-slate-200 dark:border-slate-800/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
                            Built for teams handling complex environments
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            N-Keys is designed for fast-moving teams where env and config sprawl becomes painful across dev, staging, production, and custom stages.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <article className="p-8 bg-white dark:bg-[#131c2c] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-brand-primary/10 hover:border-brand-primary/40 dark:hover:border-brand-primary/40 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Docker Compose ready</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Use N-Keys directly with Docker Compose files and raw env var pipelines without changing your existing workflow.
                            </p>
                        </article>

                        {/* Feature 2 */}
                        <article className="p-8 bg-white dark:bg-[#131c2c] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-brand-primary/10 hover:border-brand-primary/40 dark:hover:border-brand-primary/40 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Stage-aware by design</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Manage prod, dev, staging, and custom stage names with clear isolation and simple promotion flows.
                            </p>
                        </article>

                        {/* Feature 3 */}
                        <article className="p-8 bg-white dark:bg-[#131c2c] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-brand-primary/10 hover:border-brand-primary/40 dark:hover:border-brand-primary/40 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Rust-backed security</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Keys are protected with Argon2 and built on a pure Rust backend focused on reliability and performance.
                            </p>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    )
}
