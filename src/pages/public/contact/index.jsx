import { contactFormSendTo, submitContactForm } from "@/api/contactFormApi"
import CfTurnstileWidget from "@/components/CfTurnstileWidget"
import PageHeader from "@/components/PageHeader"
import SeoMeta from "@/components/SeoMeta"
import { useState } from "react"

function Contact() {
    const [cfTurnstileToken, setCfTurnstileToken] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        const form = event.currentTarget
        const formData = new FormData(form)

        const payload = {
            name: String(formData.get('name') || ''),
            email: String(formData.get('email') || ''),
            message: `Contact Form Submission:\n\n${String(formData.get('message') || '')}`,
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
            setSubmitMessage('Message sent successfully.')
            form.reset()
            setCfTurnstileToken('')
        } catch (error) {
            setSubmitMessage(error.message || 'Failed to send message. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <SeoMeta
                title="Contact"
                description="Contact the N-Keys team to discuss secure environment variable and config management across servers, or book a meeting for onboarding and pricing guidance."
            />

            <PageHeader
                title="Contact Us"
                subtitle="Tell us how your team manages env vars today and we will help you plan a safer workflow."
            />

            <section className="px-6 pb-20 lg:pb-28">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Form Card */}
                    <article className="bg-white dark:bg-[#131c2c] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none p-8 sm:p-10 flex flex-col relative overflow-hidden group">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-primary/20 transition-colors duration-500"></div>
                        
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                Send a Message <span role="img" aria-label="email" className="text-xl">📧</span>
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Email directly at <a href="mailto:nikhil@nekonik.com" className="font-semibold text-brand-primary hover:text-brand-hover transition-colors">nikhil@nekonik.com</a> for product, security, or pricing questions.
                            </p>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Name</label>
                                        <input 
                                            id="contact-name" 
                                            name="name" 
                                            type="text" 
                                            autoComplete="name" 
                                            required 
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all shadow-sm"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                                        <input 
                                            id="contact-email" 
                                            name="email" 
                                            type="email" 
                                            autoComplete="email" 
                                            required 
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all shadow-sm"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                        <textarea 
                                            id="contact-message" 
                                            name="message" 
                                            rows="4" 
                                            required 
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all shadow-sm resize-y min-h-[120px]"
                                        />
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <CfTurnstileWidget token={cfTurnstileToken} onTokenChange={setCfTurnstileToken} />
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full py-3.5 px-6 font-bold text-white bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                                </button>

                                {submitMessage && (
                                    <div className={`p-4 rounded-xl text-sm font-semibold border ${submitMessage.includes('success') ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800' : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800'}`}>
                                        {submitMessage}
                                    </div>
                                )}
                            </form>
                            
                            <p className="mt-6 text-sm text-center text-slate-500 dark:text-slate-400 font-medium">We will get back to you as soon as possible!</p>
                        </div>
                    </article>

                    {/* Calendly Card */}
                    <article className="bg-white dark:bg-[#131c2c] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none p-8 sm:p-10 flex flex-col h-full">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                            Book a Meet <span role="img" aria-label="calendar" className="text-xl">📅</span>
                        </h2>

                        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            Book a short call to review your environment stages, migration plan, and rollout timeline.
                        </p>

                        <div className="flex-1 bg-slate-50 dark:bg-[#0a1120] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden min-h-[500px]">
                            <iframe
                                title="Calendly scheduling"
                                src="https://calendly.com/neko-nik/general-meet"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                className="min-h-[500px]"
                            ></iframe>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Contact