import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import SeoMeta from '../components/SeoMeta'
import CfTurnstileWidget from '../components/CfTurnstileWidget'
import { contactFormSendTo, submitContactForm } from '../api/contactFormApi'

function WaitlistPage() {
  const [cfTurnstileToken, setCfTurnstileToken] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      message: String(formData.get('useCase') || ''),
      send_to: contactFormSendTo,
    }

    if (!cfTurnstileToken) {
      setSubmitMessage('Please complete the Cloudflare verification before submitting.')
      return
    }

    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      await submitContactForm(payload, cfTurnstileToken)
      setSubmitMessage('Waitlist request sent successfully.')
      form.reset()
      setCfTurnstileToken('')
    } catch (error) {
      setSubmitMessage(error.message || 'Failed to send request. Please try again.')
    } finally {
      setIsSubmitting(false)
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

            <button type="submit" className="button button-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
            </button>

            {submitMessage ? <p className="support-text">{submitMessage}</p> : null}
          </form>
          <p className="support-text">Early users get priority onboarding and early economical pricing.</p>
        </article>
      </section>
    </>
  )
}

export default WaitlistPage
