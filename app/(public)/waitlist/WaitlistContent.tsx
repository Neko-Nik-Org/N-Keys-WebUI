"use client";

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import CfTurnstileWidget from '@/components/CfTurnstileWidget'
import { contactFormSendTo, submitContactForm } from '@/utils/contactFormApi'

export default function WaitlistContent() {
    const [cfTurnstileToken, setCfTurnstileToken] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.currentTarget
        const formData = new FormData(form)

        const payload = {
            name: String(formData.get('name') || ''),
            email: String(formData.get('email') || ''),
            message: `Waitlist Request:\n\n${String(formData.get('useCase') || '')}`,
            send_to: contactFormSendTo,
        }

        if (!cfTurnstileToken) {
            setSubmitMessage('Please complete the Cloudflare verification before submitting.')
            return
        }

        setIsSubmitting(true)
        setSubmitMessage('')

        try {
            await submitContactForm(payload, cfTurnstileToken)
            setSubmitMessage('Waitlist request sent successfully.')
            form.reset()
            setCfTurnstileToken('')
        } catch (error) {
            const errorMsg = error instanceof Error ? error.message : 'Failed to send request. Please try again.';
            setSubmitMessage(errorMsg);
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <PageHeader
                title="Join the Waitlist"
                subtitle="Get early access to secure env var and config sync for multi-stage team deployments."
            />

            <section className="px-6 pb-20 lg:pb-28">
                <div className="max-w-2xl mx-auto">
                    <article className="bg-white dark:bg-[#131c2c] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xl shadow-brand-primary/5 dark:shadow-none p-8 sm:p-12 relative overflow-hidden group">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-primary/20 transition-colors duration-500"></div>

                        <div className="relative z-10">
                            <div className="mb-8 text-center sm:text-left">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                    Request Access <span role="img" aria-label="rocket" className="ml-1">🚀</span>
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Early users get priority onboarding and an exclusive opportunity to shape the platform.
                                </p>
                            </div>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="waitlist-name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                                        <input 
                                            id="waitlist-name" 
                                            name="name" 
                                            type="text" 
                                            autoComplete="name" 
                                            required 
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all shadow-sm"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="waitlist-email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Work Email</label>
                                        <input 
                                            id="waitlist-email" 
                                            name="email" 
                                            type="email" 
                                            autoComplete="email" 
                                            required 
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all shadow-sm"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="waitlist-use-case" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">How will your team use N-Keys?</label>
                                        <textarea 
                                            id="waitlist-use-case" 
                                            name="useCase" 
                                            rows={4} 
                                            required 
                                            placeholder="Tell us about your current env var challenges..."
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all shadow-sm resize-y min-h-[120px]"
                                        />
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <CfTurnstileWidget token={cfTurnstileToken} onTokenChange={setCfTurnstileToken} />
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full py-4 px-6 font-bold text-white text-lg bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? 'Submitting Request...' : 'Join Waitlist'}
                                </button>

                                {submitMessage && (
                                    <div className={`p-4 rounded-xl text-sm font-semibold border text-center ${submitMessage.includes('success') ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800' : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800'}`}>
                                        {submitMessage}
                                    </div>
                                )}
                            </form>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}
