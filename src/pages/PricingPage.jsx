import PageHeader from '../components/PageHeader'
import SeoMeta from '../components/SeoMeta'

const plans = [
  {
    name: 'Free',
    description: 'For personal projects and early testing',
    price: '$0',
    points: ['1 workspace', 'Basic sync', 'Community support'],
  },
  {
    name: 'Pro',
    description: 'Economical plan for active product teams',
    price: '$12',
    period: '/month',
    points: ['Unlimited projects', 'Team access', 'Stage management', 'CLI + API access'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For large deployments and compliance needs',
    price: 'Custom',
    points: ['SLA and priority support', 'Custom deployment options', 'Security review support', 'Dedicated onboarding'],
  },
]

const comparisonFeatures = [
  { name: 'Workspaces', free: '1', pro: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Projects', free: '3', pro: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Stage names (prod/dev/custom)', free: 'Basic', pro: 'Advanced', enterprise: 'Advanced' },
  { name: 'CLI support', free: true, pro: true, enterprise: true },
  { name: 'cURL + API key access', free: true, pro: true, enterprise: true },
  { name: 'Server-to-server secure sync', free: false, pro: true, enterprise: true },
  { name: 'Audit history', free: false, pro: true, enterprise: true },
  { name: 'SSO / advanced access controls', free: false, pro: false, enterprise: true },
  { name: 'Dedicated support', free: false, pro: false, enterprise: true },
]

const faqs = [
  {
    question: 'Can I start with the Free plan and upgrade later?',
    answer:
      'Yes. You can start on Free, validate your workflow, and upgrade to Pro or Enterprise anytime as your team grows.',
  },
  {
    question: 'Does Pro include CLI and API access?',
    answer:
      'Yes. Pro includes both CLI and cURL API workflows with API-key based authentication for automation and team usage.',
  },
  {
    question: 'Do you support custom environment stages?',
    answer:
      'Yes. N-Keys supports standard stages like prod/dev/staging and custom stage names so teams can match existing deployment conventions.',
  },
  {
    question: 'Is Docker Compose workflow supported?',
    answer:
      'Yes. You can integrate N-Keys with Docker Compose and raw env variable workflows without changing your existing setup.',
  },
  {
    question: 'How is pricing handled for larger teams?',
    answer:
      'Enterprise pricing is customized based on support, compliance, and deployment needs. Contact us for a tailored plan.',
  },
]

function PricingPage() {
  return (
    <>
      <SeoMeta
        title="Pricing"
        description="Economical N-Keys pricing for teams managing environment variables and config files across multiple stages, with secure sync, CLI/cURL access, and Rust-backed reliability."
      />

      <PageHeader
        title="Pricing"
        subtitle="Economical pricing built for teams managing a lot of env vars and config files."
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
          <h2>Plan comparison</h2>
          <p>Pick the plan that fits your team size, stage complexity, and security requirements.</p>
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

      <section className="container section section-tight">
        <div className="section-head">
          <h2>Pricing FAQ</h2>
          <p>Quick answers to common plan and billing questions.</p>
        </div>

        <div className="faq-list" role="list">
          {faqs.map((faq) => (
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
