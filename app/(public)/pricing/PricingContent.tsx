"use client";

import PageHeader from "@/components/PageHeader"
import PricingSummaryCard from "@/components/pricing/PricingSummaryCard"
import RateCardModal from "@/components/pricing/RateCardModal"
import UsageInputsCard from "@/components/pricing/UsageInputsCard"
import { DEFAULT_USAGE, PRICING_FAQS, PRICING_WEIGHTS } from "@/data/pricingConfig"
import { calculatePricing } from "@/utils/pricingCalculator"
import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"

export default function PricingContent() {
    const router = useRouter()
    const [usage, setUsage] = useState(DEFAULT_USAGE)
    const [isRateCardOpen, setIsRateCardOpen] = useState(false)

    const handleJoinWaitlist = () => {
        router.push('/waitlist')
    }

    const updateUsageValue = (field: string) => (event: any) => {
        const value = event.target.value
        setUsage((current) => ({
            ...current,
            [field]: field === 'supportTier' ? value : Number(value),
        }))
    }

    const pricingBreakdown = useMemo(
        () => calculatePricing({ usage, weights: PRICING_WEIGHTS }),
        [usage],
    )

    return (
        <>
            <PageHeader
                title="Pricing Calculator"
                subtitle="Simple usage-based pricing. Enter your usage and get an instant monthly estimate."
            />

            <section className="px-6 pb-20 lg:pb-28">
                <div className="max-w-5xl mx-auto bg-white dark:bg-[#131c2c]/50 rounded-2xl shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row backdrop-blur-xl">
                    <UsageInputsCard usage={usage} onChange={updateUsageValue} />
                    <PricingSummaryCard
                        pricing={pricingBreakdown}
                        onJoinWaitlist={handleJoinWaitlist}
                        onContactSales={() => router.push('/contact')}
                        onOpenRateCard={() => setIsRateCardOpen(true)}
                    />
                </div>

                <RateCardModal
                    isOpen={isRateCardOpen}
                    onClose={() => setIsRateCardOpen(false)}
                    weights={PRICING_WEIGHTS}
                />
            </section>

            <section className="px-6 py-20 lg:py-28 bg-slate-50/50 dark:bg-transparent border-t border-slate-200 dark:border-slate-800/50">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                            Pricing FAQ
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            Quick answers to common plan and billing questions.
                        </p>
                    </div>

                    <div className="space-y-4" role="list">
                        {PRICING_FAQS.map((faq: any) => (
                            <details key={faq.question} className="group bg-white dark:bg-[#131c2c] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm open:shadow-md transition-all duration-300" role="listitem">
                                <summary className="flex items-center justify-between gap-4 p-6 font-semibold text-slate-900 dark:text-white cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
                                    {faq.question}
                                    <span className="flex-shrink-0 ml-1.5 p-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform duration-300">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/50 pt-4">
                                    <p>{faq.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
