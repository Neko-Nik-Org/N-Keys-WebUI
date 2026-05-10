import PageHeader from '../components/PageHeader'

function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Share your use case, and we will follow up quickly."
      />

      <section className="container section section-tight">
        <div className="contact-grid">
          <article className="card">
            <h2>Contact us</h2>
            <p>
              Email us at <a href="mailto:hello@n-keys.dev">hello@n-keys.dev</a>
            </p>

            <form className="form" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" required />

              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required />

              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows="4" required />

              <button type="submit" className="button button-primary">
                Send message
              </button>
            </form>
          </article>

          <article className="card">
            <h2>Book a Meet</h2>
            <p>Prefer a short call? Pick a time that works for you.</p>
            <a
              className="button button-primary"
              href="https://calendly.com/your-name/n-keys-intro"
              target="_blank"
              rel="noreferrer"
            >
              Book a Meet
            </a>

            <div className="calendar-placeholder" role="img" aria-label="Calendar integration placeholder">
              Calendar integration placeholder
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default ContactPage
