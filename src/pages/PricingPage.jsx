import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SeoMeta from '../components/SeoMeta'
import UsageInputsCard from '../components/pricing/UsageInputsCard'
import PricingSummaryCard from '../components/pricing/PricingSummaryCard'
import RateCardModal from '../components/pricing/RateCardModal'
import { DEFAULT_USAGE, FREE_TIER_MAX_SUBTOTAL, PRICING_FAQS, PRICING_WEIGHTS } from '../data/pricingConfig'
import { calculatePricing, toNumber } from '../utils/pricingCalculator'

function PricingPage() {
  const navigate = useNavigate()
  const [usage, setUsage] = useState(DEFAULT_USAGE)
  const [isRateCardOpen, setIsRateCardOpen] = useState(false)

  const handleJoinWaitlist = () => {
    navigate('/waitlist')
  }

  const updateUsageValue = (field) => (event) => {
    const value = event.target.value
    setUsage((current) => ({
      ...current,
      [field]: field === 'supportTier' ? value : toNumber(value),
    }))
  }

  const pricingBreakdown = useMemo(
    () => calculatePricing({ usage, weights: PRICING_WEIGHTS, freeTierLimits: FREE_TIER_MAX_SUBTOTAL }),
    [usage],
  )

  return (
    <>
      <SeoMeta
        title="Pricing"
        description="Compact usage-based N-Keys pricing calculator with fixed rates and free-tier eligibility."
      />

      <PageHeader
        title="Pricing Calculator"
        subtitle="Simple usage-based pricing. Enter your usage and get an instant monthly estimate."
      />

      <section className="container section section-tight">
        <div className="pricing-estimator-shell">
          <div className="pricing-estimator-layout">
            <UsageInputsCard usage={usage} onChange={updateUsageValue} />
            <PricingSummaryCard
              pricing={pricingBreakdown}
              onJoinWaitlist={handleJoinWaitlist}
              onContactSales={() => navigate('/contact')}
              onOpenRateCard={() => setIsRateCardOpen(true)}
            />
          </div>
        </div>

        <RateCardModal
          isOpen={isRateCardOpen}
          onClose={() => setIsRateCardOpen(false)}
          weights={PRICING_WEIGHTS}
        />
      </section>

      <section className="container section section-tight">
        <div className="section-head">
          <h2>Pricing FAQ</h2>
          <p>Quick answers to common plan and billing questions.</p>
        </div>

        <div className="faq-list" role="list">
          {PRICING_FAQS.map((faq) => (
            <details key={faq.question} className="faq-item card" role="listitem">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}

export default PricingPage
