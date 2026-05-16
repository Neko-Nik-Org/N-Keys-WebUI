import PageHeader from '../components/PageHeader'
import FeatureIcon from '../components/FeatureIcon'
import SeoMeta from '../components/SeoMeta'
import { features, benefits } from '../data/featuresData'

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
              <FeatureIcon icon={feature.icon} />
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
