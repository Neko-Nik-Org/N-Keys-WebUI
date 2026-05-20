import { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "We're Hiring | N-Keys",
  description: "Join N-Keys! We're looking for UI designers and frontend/integration developers to help build amazing features.",
  openGraph: {
    title: "We're Hiring | N-Keys",
    description: "Join N-Keys! We're looking for UI designers and frontend/integration developers to help build amazing features.",
    type: "website",
  },
};

export default function HiringPage() {
    return (
        <main>
            <PageHeader
                title="We're Hiring Contributors"
                subtitle="Help us build the future of environment management."
            />

            <section className="px-6 pb-20 lg:pb-28">
                <div className="max-w-4xl mx-auto">
                    <article className="bg-white dark:bg-[#131c2c] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none p-8 sm:p-12 relative overflow-hidden group">
                        {/* Decorative Gradient Glow */}
                        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-brand-primary/20 transition-colors duration-700"></div>

                        <div className="relative z-10">
                            <div className="mb-10 text-center sm:text-left">
                                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                                    UI Designer & Frontend Developer
                                </h2>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                                    Volunteer / Open Source
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-10">
                                {/* What We're Looking For */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                                        What We're Looking For
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            'UI/UX Design & Implementation',
                                            'Frontend Development (React, Vue, etc.)',
                                            'API Integration Skills',
                                            'Responsive & Beautiful Interfaces',
                                            'Web Design Best Practices'
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start text-slate-700 dark:text-slate-300">
                                                <svg className="w-5 h-5 text-brand-primary mt-0.5 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* What You Get */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                                        What You Get
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start text-slate-700 dark:text-slate-300">
                                            <span className="mr-3 text-lg leading-none">🚀</span>
                                            <span className="leading-relaxed">Early adopter access (completely free)</span>
                                        </li>
                                        <li className="flex items-start text-slate-700 dark:text-slate-300">
                                            <span className="mr-3 text-lg leading-none">💡</span>
                                            <span className="leading-relaxed">Shape the product with your design</span>
                                        </li>
                                        <li className="flex items-start text-slate-700 dark:text-slate-300">
                                            <span className="mr-3 text-lg leading-none">🤝</span>
                                            <span className="leading-relaxed">Collaborate with the founding team</span>
                                        </li>
                                        <li className="flex items-start text-slate-700 dark:text-slate-300">
                                            <span className="mr-3 text-lg leading-none">📈</span>
                                            <span className="leading-relaxed">Showcase your work on open-source</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Note / Disclaimer */}
                            <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/50 p-6 rounded-xl mb-10 flex gap-4">
                                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                    <strong className="text-slate-900 dark:text-white">Note:</strong> This is an <strong className="text-slate-900 dark:text-white">unpaid</strong> opportunity for early contributors to join the project, help shape the product, and gain experience. We welcome anyone interested in contributing, regardless of background or experience level.
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="text-center sm:text-left">
                                <Link 
                                    href="/contact"
                                    className="w-full sm:w-auto py-3.5 px-8 font-bold text-white bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 inline-flex justify-center items-center gap-2 group/btn" 
                                >
                                    Get In Touch
                                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    )
}
