import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import SeoMeta from '../components/SeoMeta'
import CfTurnstileWidget from '../components/CfTurnstileWidget'

function ContactPage() {
  const [cfTurnstileToken, setCfTurnstileToken] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    formData.set('cfTurnstileToken', cfTurnstileToken)
  }

  return (
    <>
      <SeoMeta
        title="Contact"
        description="Contact the N-Keys team to discuss secure environment variable and config management across servers, or book a meeting for onboarding and pricing guidance."
      />

      <PageHeader
        title="Contact"
        subtitle="Tell us how your team manages env vars today and we will help you plan a safer workflow."
      />

      <section className="container section section-tight">
        <div className="contact-grid">
          <article className="card">
            <h2>Contact me <span role="img" aria-label="email">📧</span></h2>
            <p>
              Email directly at <a href="mailto:nikhil@nekonik.com">nikhil@nekonik.com</a> for product, security, or pricing questions.
            </p>

            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" required />

              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required />

              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows="4" required />

              <CfTurnstileWidget token={cfTurnstileToken} onTokenChange={setCfTurnstileToken} />

              <button type="submit" className="button button-primary">
                Send message
              </button>
            </form>
          </article>

          <article className="card">
            <h2>Book a Meet <span role="img" aria-label="calendar">📅</span></h2>

            <p>Book a short call to review your environment stages, migration plan, and rollout timeline.</p>

            <div className="calendar-placeholder" role="img" aria-label="Calendar integration placeholder">
                <div className="calendly-widget">
                  <iframe
                    title="Calendly scheduling"
                    src="https://calendly.com/neko-nik/general-meet"
                    width="100%"
                    height="500"
                    frameBorder="0"
                  ></iframe>
                </div>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default ContactPage
