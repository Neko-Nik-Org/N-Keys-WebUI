import PageHeader from '../components/PageHeader'
import FeatureIcon from '../components/FeatureIcon'

const features = [
  {
    title: 'Secure secret storage',
    description: 'Store sensitive variables in encrypted, centralized project vaults with enterprise-grade security.',
    iconPath: 'M12 3L5 7v5c0 5 3.5 8 7 9 3.5-1 7-4 7-9V7l-7-4z',
  },
  {
    title: 'Simple API access',
    description: 'Fetch environment values programmatically with straightforward, well-documented endpoints.',
    iconPath: 'M8 9l-3 3 3 3M16 9l3 3-3 3M13 7l-2 10',
  },
  {
    title: 'Team environments',
    description: 'Separate development, staging, and production variables with granular role-based access controls.',
    iconPath: 'M16 18a4 4 0 0 0-8 0M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6M6 18a3 3 0 0 0-2 0M18 18a3 3 0 0 1 2 0',
  },
  {
    title: 'Docker-friendly workflows',
    description: 'Inject secrets into container workflows seamlessly without manual copy-paste or git commits.',
    iconPath: 'M4 13h16M8 9V6h4v3M9 17h6M6 13v4h12v-4',
  },
  {
    title: 'Audit logs',
    description: 'Track all updates to secrets with comprehensive, readable change history for compliance and security.',
    iconPath: 'M6 4h12v16H6zM9 8h6M9 12h6M9 16h4',
  },
  {
    title: 'Fast onboarding',
    description: 'Invite teammates and standardize project configs from day one with minimal setup time.',
    iconPath: 'M12 5v14M5 12h14',
  },
]

const benefits = [
  'Zero configuration needed',
  'Real-time synchronization',
  'Version control integration',
  'One-click environment cloning',
  'Webhook notifications',
  'Multi-provider support',
]

function FeaturesPage() {
  return (
    <>
      <PageHeader
        title="Features"
        subtitle="Simple and secure secret management for modern development teams."
      />

      <section className="container section section-tight">
        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="card feature-card">
              <FeatureIcon path={feature.iconPath} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>Additional benefits</h2>
          <p>Everything you need to manage secrets like a pro team.</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article key={benefit} className="benefit-item">
              <span className="benefit-icon">✓</span>
              <p>{benefit}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default FeaturesPage
