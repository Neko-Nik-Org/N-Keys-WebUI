import { formatUsd } from '../../utils/pricingCalculator'

function RateCardModal({ isOpen, onClose, weights }) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="pricing-modal-overlay" role="presentation" onClick={onClose}>
      <div
        className="pricing-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Rate card"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pricing-modal-head">
          <h3>Rate Card (USD)</h3>
          <button type="button" className="pricing-modal-close" onClick={onClose} aria-label="Close rate card">
            x
          </button>
        </div>

        <ul className="pricing-rate-list">
          <li><span>Per user</span><span>{formatUsd(weights.user, 3)}</span></li>
          <li><span>Per project</span><span>{formatUsd(weights.project, 3)}</span></li>
          <li><span>Per env key (Per Project)</span><span>{formatUsd(weights.envKey, 3)}</span></li>
          <li><span>Per api key</span><span>{formatUsd(weights.apiKey, 3)}</span></li>
          <li><span>Per config file</span><span>{formatUsd(weights.configFile, 3)}</span></li>
          <li><span>Basic support (per 10 users)</span><span>{formatUsd(weights.basicSupportPerBand, 3)}</span></li>
          <li><span>Priority support (per 10 users)</span><span>{formatUsd(weights.prioritySupportPerBand, 3)}</span></li>
        </ul>

        <h4 className="pricing-subtitle">Free Tier Limits</h4>
        <p className="pricing-free-tier-note">
            Less than $3 total monthly cost is waived under the free tier.
        </p>
        <p className="pricing-free-tier-note">
            Non-profit / Open-source / Educational organizations can apply for a free tier waiver regardless of usage. Contact us for details.
        </p>
      </div>
    </div>
  )
}

export default RateCardModal
