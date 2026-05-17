import { formatUsd } from '../../utils/pricingCalculator'

function PricingSummaryCard({ pricing, onJoinWaitlist, onContactSales, onOpenRateCard }) {
  return (
    <div className="pricing-panel pricing-panel-summary">
      <div className="pricing-summary-top">
        <h2>Estimated Monthly Cost</h2>
        <button type="button" className="button button-secondary pricing-rate-trigger" onClick={onOpenRateCard}>
          View Rate Card
        </button>
      </div>

      <div className="pricing-total-row pricing-total-row-large">
        <span>Total Monthly Cost</span>
        <strong>{formatUsd(pricing.billedTotal)}</strong>
      </div>

      <h3 className="pricing-subtitle">Cost Breakdown</h3>
      <ul className="pricing-breakdown-list pricing-breakdown-list-simple">
        {pricing.lineItems.map((item) => (
          <li key={item.name}>
            <span>{item.name}</span>
            <span>
              {item.units} x {formatUsd(item.rate)} = {formatUsd(item.total)}
            </span>
          </li>
        ))}
      </ul>

      <div className="pricing-actions">
        <button type="button" className="button button-primary" onClick={onJoinWaitlist}>
          Join Waitlist
        </button>
        <button type="button" className="button button-secondary" onClick={onContactSales}>
          Contact Sales
        </button>
      </div>

      <p className="early-adopter-note">
        🚀 <strong>Early adopters:</strong> Get full access to N-Keys completely free in exchange for feedback and help us shape the future of the platform.
      </p>
    </div>
  )
}

export default PricingSummaryCard
