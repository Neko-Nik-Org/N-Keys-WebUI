import PageHeader from '../components/PageHeader'
import SeoMeta from '../components/SeoMeta'

const plans = [
  {
    name: 'Free',
    description: 'For individual developers',
    price: '$0',
    points: ['3 projects', '50 keys per project', '10 config files', 'Email support', 'CLI + API access'],
  },
  {
    name: 'Starter',
    description: 'For growing teams',
    price: '$5.99',
    period: '/month',
    points: ['10 users', '10 projects', '250 keys per project', '100 config files', '100 API keys', 'Email + scheduled meetings', 'Rust-powered backend'],
  },
  {
    name: 'Pro',
    description: 'For active product teams',
    price: '$14.99',
    period: '/month',
    points: ['30 users', '30 projects', '500 keys per project', '350 config files', 'Unlimited API keys', 'Priority support with meetings', 'Full MFA + RBAC'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For large deployments and custom needs',
    price: 'Custom',
    points: ['Based on what you need'],
  },
]

const comparisonFeatures = [
  { name: 'Users', free: '1', starter: '10', pro: '30', enterprise: 'Custom' },
  { name: 'Projects', free: '3', starter: '10', pro: '30', enterprise: 'Custom' },
  { name: 'Keys per project', free: '50', starter: '250', pro: '500', enterprise: 'Custom' },
  { name: 'Config files', free: '10', starter: '100', pro: '350', enterprise: 'Custom' },
  { name: 'API keys', free: '5', starter: '100', pro: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Environments per project', free: '10', starter: 'Unlimited', pro: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'CLI tool', free: true, starter: true, pro: true, enterprise: true },
  { name: 'API access', free: true, starter: true, pro: true, enterprise: true },
  { name: 'Audit history', free: true, starter: true, pro: true, enterprise: true },
  { name: 'Multi-factor auth (MFA)', free: true, starter: true, pro: true, enterprise: true },
  { name: 'Encryption', free: true, starter: true, pro: true, enterprise: true },
  { name: 'RBAC & team access', free: false, starter: true, pro: true, enterprise: true },
  { name: 'Support', free: 'Email', starter: 'Email + meetings', pro: 'Priority email + meetings', enterprise: 'Dedicated support' },
]

const faqs = [
  {
    question: 'I am an individual developer. But I need higher limits than Free. What should I do?',
    answer:
      'I can arrange a custom plan tailored for individual developers with higher limits than Free at affordable pricing. Contact me at nikhil@nekonik.com with your needs and pricing requirements.',
  },
  {
    question: 'Can I start with Free and upgrade later?',
    answer:
      'Yes. Start on Free, test your workflow, and upgrade to Starter or Pro as your team grows. Upgrade anytime—no long-term contracts.',
  },
  {
    question: 'Does every plan include CLI and API access?',
    answer:
      'Yes. All plans (Free, Starter, Pro, Enterprise) include CLI and API access so you can automate env var workflows via cURL or our tools.',
  },
  {
    question: 'Is audit history included in all plans?',
    answer:
      'Yes. All plans (Free, Starter, Pro, Enterprise) include audit history to track changes and ensure accountability. Which will hold 6 months (180 days) of history.',
  },
  {
    question: 'I want higher limits, but have a smaller team and tighter budget than Pro. Do you have options for that?',
    answer:
      'Yes. I can create a custom plan with specific limits and features that fit your team size, needs, and budget. Contact me at nikhil@nekonik.com with your propsal.',
  },
  {
    question: 'What does Enterprise include?',
    answer:
      'Enterprise plans are fully customized. We offer unlimited users, projects, and API keys, dedicated support, whatever you need.',
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
                <th>Starter</th>
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
                  <td>
                    {typeof feature.starter === 'boolean' ? (
                      <span className={feature.starter ? 'feature-check' : 'feature-cross'}>
                        {feature.starter ? '✓' : '—'}
                      </span>
                    ) : (
                      feature.starter
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
