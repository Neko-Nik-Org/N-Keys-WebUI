import PageHeader from '../components/PageHeader'
import FeatureIcon from '../components/FeatureIcon'
import SeoMeta from '../components/SeoMeta'

const features = [
  {
    title: 'Server-to-server sync',
    description: 'Sync env vars and config files securely between servers without manual copy mistakes or drift.',
    iconPath: 'M12 3L5 7v5c0 5 3.5 8 7 9 3.5-1 7-4 7-9V7l-7-4z',
  },
  {
    title: 'Docker Compose support',
    description: 'Inject and sync variables directly for Docker Compose deployments with clean stage separation.',
    iconPath: 'M4 13h16M8 9V6h4v3M9 17h6M6 13v4h12v-4',
  },
  {
    title: 'CLI and cURL workflows',
    description: 'Use our CLI tool daily or call endpoints directly with cURL when scripting is faster.',
    iconPath: 'M8 9l-3 3 3 3M16 9l3 3-3 3M13 7l-2 10',
  },
  {
    title: 'Raw env variable support',
    description: 'Manage raw env vars as-is for existing scripts, CI pipelines, and server bootstrap automation.',
    iconPath: 'M12 5v14M5 12h14',
  },
  {
    title: 'API key authentication',
    description: 'Keep auth simple with API-key based access that fits internal tools and automation pipelines.',
    iconPath: 'M16 18a4 4 0 0 0-8 0M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6M6 18a3 3 0 0 0-2 0M18 18a3 3 0 0 1 2 0',
  },
  {
    title: 'Custom stage support',
    description: 'Manage prod, dev, staging, and custom environment stage names with clear boundaries.',
    iconPath: 'M6 4h12v16H6zM9 8h6M9 12h6M9 16h4',
  },
  {
    title: 'Argon2-secured keys',
    description: 'Sensitive credentials are protected with Argon2-based security implemented in Rust.',
    iconPath: 'M12 3L5 7v5c0 5 3.5 8 7 9 3.5-1 7-4 7-9V7l-7-4z',
  },
  {
    title: 'Pure Rust backend',
    description: 'Built in Rust for predictable performance, strong safety guarantees, and operational stability.',
    iconPath: 'M16 18a4 4 0 0 0-8 0M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6M6 18a3 3 0 0 0-2 0M18 18a3 3 0 0 1 2 0',
  },
]

const benefits = [
  'One global place to manage env and config data',
  'Works for small teams and growing engineering orgs',
  'Clear separation between environments and stages',
  'Simple onboarding for developers and DevOps teams',
  'Economical pricing designed for practical usage',
  'Built to reduce outages caused by config drift',
]

function FeaturesPage() {
  return (
    <>
      <SeoMeta
        title="Features"
        description="Discover N-Keys features: server-to-server env sync, Docker Compose support, raw env variable workflows, CLI and cURL access, API-key auth, custom stages, Argon2 security, and pure Rust backend."
      />

      <PageHeader
        title="Features"
        subtitle="Everything your team needs to securely manage env vars and config files at scale."
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
          <h2>Why teams pick N-Keys</h2>
          <p>Simple workflows, strong security, and practical pricing for real-world teams.</p>
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
