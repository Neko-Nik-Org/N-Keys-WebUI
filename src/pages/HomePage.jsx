import { Link } from 'react-router-dom'
import SeoMeta from '../components/SeoMeta'

function HomePage() {
  return (
    <>
      <SeoMeta
        title="Secure Environment Variable Sync"
        description="N-Keys helps teams securely sync environment variables and config files across servers, including Docker Compose and raw env var workflows, with CLI or cURL access and API key authentication."
      />

      <section className="hero container">
        <h1>Securely Sync & Manage env vars and config files across servers</h1>
        <p>
          Manage environment variables and config files globally in one place.
          Use our CLI tool or cURL directly with simple API key authentication,
          including Docker Compose and raw env var workflows or server-to-server sync,
          and keep every deployment stage in sync.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/waitlist">
            Join Waitlist
          </Link>
          <a
            className="button button-secondary"
            href="https://calendly.com/neko-nik/general-meet"
            target="_blank"
            rel="noreferrer"
          >
            Book a Meet
          </a>
        </div>

        <Link to="/features" className="button button-explore">
          Explore More Features
        </Link>

        <article className="mock-card" aria-label="N-Keys sample environment synchronization state">
          <h2>Project: Core API Cluster</h2>
          <ul>
            <li>
              <span>Active stage</span>
              <strong>prod-eu-west</strong>
            </li>
            <li>
              <span>Configs + env vars synced</span>
              <strong>148</strong>
            </li>
            <li>
              <span>Last secure sync</span>
              <strong>just now</strong>
            </li>
          </ul>
        </article>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>Built for teams handling complex environments</h2>
          <p>
            N-Keys is designed for fast-moving teams where env and config sprawl
            becomes painful across dev, staging, production, and custom stages.
          </p>
        </div>
        <div className="simple-grid">
          <article className="card">
            <h3>Docker Compose and raw env ready</h3>
            <p>Use N-Keys directly with Docker Compose files and raw env var pipelines without changing your existing workflow.</p>
          </article>
          <article className="card">
            <h3>Stage-aware by design</h3>
            <p>Manage prod, dev, staging, and custom stage names with clear isolation and simple promotion flows.</p>
          </article>
          <article className="card">
            <h3>Rust-backed security</h3>
            <p>Keys are protected with Argon2 and built on a pure Rust backend focused on reliability and performance.</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default HomePage
