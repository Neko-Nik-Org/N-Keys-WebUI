import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import SeoMeta from '../components/SeoMeta'
import CfTurnstileWidget from '../components/CfTurnstileWidget'

function WaitlistPage() {
  const [cfTurnstileToken, setCfTurnstileToken] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    formData.set('cfTurnstileToken', cfTurnstileToken)

    console.log('Waitlist form submitted with data:')
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`)
    }
  }

  return (
    <>
      <SeoMeta
        title="Waitlist"
        description="Join the N-Keys waitlist for secure env var and config sync powered by Rust, Argon2 key protection, CLI/cURL access, and economical pricing for teams."
      />

      <PageHeader
        title="Join the Waitlist"
        subtitle="Get early access to secure env var and config sync for multi-stage team deployments."
      />

      <section className="container section section-tight">
        <article className="card waitlist-card">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="waitlist-name">Name</label>
            <input id="waitlist-name" name="name" type="text" autoComplete="name" required />

            <label htmlFor="waitlist-email">Email</label>
            <input id="waitlist-email" name="email" type="email" autoComplete="email" required />

            <label htmlFor="waitlist-use-case">Use Case</label>
            <textarea id="waitlist-use-case" name="useCase" rows="4" required />

            <CfTurnstileWidget token={cfTurnstileToken} onTokenChange={setCfTurnstileToken} />

            <button type="submit" className="button button-primary">
              Join Waitlist
            </button>
          </form>
          <p className="support-text">Early users get priority onboarding and early economical pricing.</p>
        </article>
      </section>
    </>
  )
}

export default WaitlistPage
