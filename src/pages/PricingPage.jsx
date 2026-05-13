import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import SeoMeta from '../components/SeoMeta'

const plans = [
  {
    name: 'Free',
    description: 'For individual developers',
    monthly: '$0',
    yearly: '$0',
    points: ['Single user (Can be upgraded)', '3 projects', '50 keys per project', '10 config files', '5 API keys', 'Basic Email support'],
    highlighted: false,
  },
  {
    name: 'Starter',
    description: 'For growing teams',
    monthly: '$8.99',
    yearly: '$79.99',
    points: ['10 users', '20 projects', '250 keys per project', '100 config files', '100 API keys', 'Email + scheduled meetings'],
    highlighted: true,
  },
  {
    name: 'Pro',
    description: 'For active product teams',
    monthly: '$19.99',
    yearly: '$149.99',
    points: ['30 users', '50 projects', '500 keys per project', '350 config files', '500 API keys', 'Priority Email + scheduled meetings'],
    highlighted: false,
  },
]

const comparisonFeatures = [
  { name: 'Users', free: '1', starter: '10', pro: '30', enterprise: 'Custom' },
  { name: 'Projects', free: '3', starter: '20', pro: '50', enterprise: 'Custom' },
  { name: 'Keys per project', free: '50', starter: '250', pro: '500', enterprise: 'Custom' },
  { name: 'Config files', free: '10', starter: '100', pro: '350', enterprise: 'Custom' },
  { name: 'API keys', free: '5', starter: '100', pro: '1,000', enterprise: 'Unlimited' },
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
    question: 'I am an individual developer / very small team. But I need higher limits than are offered above. Do you have options for that?',
    answer:
      'Yes, I can create a custom plan with specific limits and features that fit your needs and budget. Send me your requirements and proposal along with pricing expectations to me (or book a meeting).',
  },
  {
    question: 'Can I start with Free and upgrade later?',
    answer:
      'Yes. Start on Free, test your workflow, and upgrade to Starter or Pro as your team grows. Upgrade anytime—no long-term contracts.',
  },
  {
    question: 'Does every plan include CLI and API access?',
    answer:
      'Yes. All plans include CLI and API access so you can automate env var workflows via cURL or our tools.',
  },
  {
    question: 'Is audit history included in all plans?',
    answer:
      'Yes. All plans include audit history to track changes and ensure accountability. Which will hold 6 months (180 days) of history. Can not be extended at this time. Export your audit history regularly if you want to keep it longer.',
  },
]


function getSavings(monthly, yearly) {
  // Parse $5.99 → 5.99
  const m = parseFloat((monthly || '').replace(/[^\d.]/g, ''))
  const y = parseFloat((yearly || '').replace(/[^\d.]/g, ''))
  if (!m || !y) return null
  const totalYearly = m * 12
  const saved = totalYearly - y
  if (saved <= 0) return null
  const percent = Math.round((saved / totalYearly) * 100)
  return percent > 0 ? percent : null
}

function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly')

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
        <div className="billing-toggle-pill">
          <button
            type="button"
            className={billingCycle === 'monthly' ? 'pill active' : 'pill'}
            onClick={() => setBillingCycle('monthly')}
            aria-pressed={billingCycle === 'monthly'}
          >
            Monthly
          </button>
          <button
            type="button"
            className={billingCycle === 'yearly' ? 'pill active' : 'pill'}
            onClick={() => setBillingCycle('yearly')}
            aria-pressed={billingCycle === 'yearly'}
          >
            Yearly
            <span className="savings-badge">Save up to 17%</span>
          </button>
        </div>
        <p className="billing-note">Choose annual billing for the best savings</p>

        <div className="pricing-grid">
          {plans.map((plan) => {
            const savings = getSavings(plan.monthly, plan.yearly)
            return (
              <article
                key={plan.name}
                className={plan.highlighted ? 'card pricing-card pricing-card-focus' : 'card pricing-card'}
              >
                <h2>{plan.name}</h2>
                <p>{plan.description}</p>
                <div className="price-display">
                  <span className="price">{plan[billingCycle]}</span>
                  {plan.name !== 'Free' && (
                    <span className="period">{billingCycle === 'monthly' ? '/month' : '/year'}</span>
                  )}
                  {billingCycle === 'yearly' && savings && plan.name !== 'Free' && (
                    <span className="plan-savings">Save {savings}%</span>
                  )}
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
            )
          })}
        </div>

        {/* Enterprise/Custom Plan Banner */}
        <div className="entp-banner">
          <div className="entp-banner-content">
            <span className="entp-title">Enterprise & Custom</span>
            <span className="entp-desc">Need more users or have unique requirements? <b>Enterprise</b> and custom plans can be arranged for any team size or special needs.</span>
            <button
              type="button"
              className="button button-primary entp-btn"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </button>
          </div>
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
