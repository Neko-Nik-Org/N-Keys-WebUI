import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SeoMeta from '../components/SeoMeta'

function HiringPage() {
  const navigate = useNavigate()

  return (
    <>
      <SeoMeta
        title="We're Hiring"
        description="Join N-Keys! We're looking for UI designers and frontend/integration developers to help build amazing features."
      />

      <PageHeader
        title="We're Hiring Contributors"
        subtitle="Help us build the future of environment management."
      />

      <section className="container section section-tight">
        <div className="hiring-card card">
          <h2>UI Designer & Frontend Developer</h2>

          <div className="hiring-highlight">
            <h3>What We're Looking For:</h3>
            <ul>
              <li>UI/UX Design & Implementation</li>
              <li>Frontend Development (React, Vue, etc.)</li>
              <li>API Integration Skills</li>
              <li>Responsive & Beautiful Interfaces</li>
              <li>Web Design Best Practices</li>
            </ul>
          </div>

          <div className="hiring-highlight">
            <h3>What You Get:</h3>
            <ul>
              <li>🚀 Early adopter access (completely free)</li>
              <li>💡 Shape the product with your design</li>
              <li>🤝 Collaborate with everyone present</li>
              <li>📈 Showcase your work on open-source</li>
            </ul>
          </div>

          <div className="hiring-description">
            <p>
              <strong>Note:</strong> This is an <strong>unpaid</strong> opportunity for early contributors to join the project, help shape the product, and gain experience. We welcome anyone interested in contributing, regardless of background or experience level.
            </p>
          </div>

          <div className="hiring-cta">
            <button type="button" className="button button-primary" onClick={() => navigate('/contact')}>
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default HiringPage
