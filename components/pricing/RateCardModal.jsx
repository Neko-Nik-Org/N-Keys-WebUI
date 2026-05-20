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
          <li><span>Per user</span><span>{formatUsd(weights.user)}</span></li>
          <li><span>Per project</span><span>{formatUsd(weights.project)}</span></li>
        </ul>

        <h4 className="pricing-subtitle">Unlimited Included</h4>
        <ul className="pricing-rate-list">
          <li><span>✓ Core N-Keys functionality</span><span></span></li>
          <li><span>✓ Environment Variables</span><span>Unlimited*</span></li>
          <li><span>✓ Configuration Files</span><span>Unlimited*</span></li>
          <li><span>✓ API Keys</span><span>Unlimited*</span></li>
          <li><span>✓ Project Deployments (Dev, Staging, Prod, etc.)</span><span>Unlimited*</span></li>
        </ul>

        <p className="pricing-free-tier-note" style={{ marginTop: '1rem' }}>
          * Subject to fair use policy to ensure service quality for all users. We monitor usage patterns and will contact you if excessive usage is detected.
        </p>
        <p className="pricing-free-tier-note">
          Non-profit / Open-source / Educational organizations can apply for discounted or free pricing. Contact us for details.
        </p>
      </div>
    </div>
  )
}

export default RateCardModal
