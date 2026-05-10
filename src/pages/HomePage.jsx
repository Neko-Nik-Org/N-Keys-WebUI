import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <section className="hero container">
        <h1>Secure environment variables without the mess.</h1>
        <p>
          Manage and sync environment variables securely across projects, servers,
          and deployments.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/waitlist">
            Join Waitlist
          </Link>
          <a
            className="button button-secondary"
            href="https://calendly.com/your-name/n-keys-intro"
            target="_blank"
            rel="noreferrer"
          >
            Book a Meet
          </a>
        </div>

        <article className="mock-card" aria-label="N-Keys sample project configuration">
          <h2>Project: API Service</h2>
          <ul>
            <li>
              <span>Environment</span>
              <strong>Production</strong>
            </li>
            <li>
              <span>Secrets synced</span>
              <strong>12</strong>
            </li>
            <li>
              <span>Last update</span>
              <strong>2 min ago</strong>
            </li>
          </ul>
        </article>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>Built for fast team onboarding</h2>
          <p>
            N-Keys helps teams start quickly, keep secrets organized, and reduce
            config mistakes across environments.
          </p>
        </div>
        <div className="simple-grid">
          <article className="card">
            <h3>Quick setup</h3>
            <p>Connect your first project in minutes and share environment access safely.</p>
          </article>
          <article className="card">
            <h3>Safer collaboration</h3>
            <p>Keep sensitive values out of chat, notes, and local files.</p>
          </article>
          <article className="card">
            <h3>Clear visibility</h3>
            <p>Know who changed what and when with lightweight activity tracking.</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default HomePage
