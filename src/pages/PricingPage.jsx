import PageHeader from '../components/PageHeader'

const plans = [
  {
    name: 'Free',
    description: 'For small teams getting started',
    price: '$0',
    points: ['Small teams', 'Limited projects', 'Basic environment sync'],
  },
  {
    name: 'Pro',
    description: 'For growing product teams',
    price: '$29',
    period: '/month',
    points: ['Unlimited projects', 'Team access', 'Audit logs', 'Priority support'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For larger org requirements',
    price: 'Custom',
    points: ['Custom support', 'Security review', 'Priority onboarding', 'SLA'],
  },
]

const comparisonFeatures = [
  { name: 'Projects', free: '2', pro: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Team members', free: '1', pro: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Environments', free: '1', pro: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'API access', free: false, pro: true, enterprise: true },
  { name: 'Audit logs', free: false, pro: true, enterprise: true },
  { name: 'Webhooks', free: false, pro: true, enterprise: true },
  { name: 'SSO integration', free: false, pro: false, enterprise: true },
  { name: 'Priority support', free: false, pro: false, enterprise: true },
  { name: 'Custom domain', free: false, pro: false, enterprise: true },
]

function PricingPage() {
  return (
    <>
      <PageHeader
        title="Pricing"
        subtitle="Straightforward plans to validate fit before launch."
      />

      <section className="container section section-tight">
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={plan.highlighted ? 'card pricing-card pricing-card-focus' : 'card pricing-card'}
            >
              <h2>{plan.name}</h2>
              <p>{plan.description}</p>
              <div className="price-display">
                <span className="price">{plan.price}</span>
                {plan.period && <span className="period">{plan.period}</span>}
              </div>
              <ul>
                {plan.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <button type="button" className={plan.highlighted ? 'button button-primary' : 'button button-secondary'}>
                Choose {plan.name}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>Detailed comparison</h2>
          <p>Compare features across all plans to find the right fit for your team.</p>
        </div>
        <div className="table-scroll">
        <table className="comparison-table">
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>Feature</th>
              <th>Free</th>
              <th style={{ background: 'rgba(2, 181, 184, 0.12)' }}>Pro</th>
              <th>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {comparisonFeatures.map((feature) => (
              <tr key={feature.name}>
                <td>{feature.name}</td>
                <td>
                  {typeof feature.free === 'boolean' ? (
                    <span className={feature.free ? 'feature-check' : 'feature-cross'}>
                      {feature.free ? '✓' : '—'}
                    </span>
                  ) : (
                    feature.free
                  )}
                </td>
                <td style={{ background: 'rgba(2, 181, 184, 0.02)' }}>
                  {typeof feature.pro === 'boolean' ? (
                    <span className={feature.pro ? 'feature-check' : 'feature-cross'}>
                      {feature.pro ? '✓' : '—'}
                    </span>
                  ) : (
                    feature.pro
                  )}
                </td>
                <td>
                  {typeof feature.enterprise === 'boolean' ? (
                    <span className={feature.enterprise ? 'feature-check' : 'feature-cross'}>
                      {feature.enterprise ? '✓' : '—'}
                    </span>
                  ) : (
                    feature.enterprise
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </section>
    </>
  )
}

export default PricingPage
