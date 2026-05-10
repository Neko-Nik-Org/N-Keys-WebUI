import PageHeader from '../components/PageHeader'

const plans = [
  {
    name: 'Free',
    description: 'For small teams getting started',
    points: ['Small teams', 'Limited projects', 'Basic environment sync'],
  },
  {
    name: 'Pro',
    description: 'For growing product teams',
    points: ['Unlimited projects', 'Team access', 'Audit logs'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For larger org requirements',
    points: ['Custom support', 'Security review support', 'Priority onboarding'],
  },
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
              <ul>
                {plan.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <button type="button" className="button button-secondary">
                Choose {plan.name}
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default PricingPage
