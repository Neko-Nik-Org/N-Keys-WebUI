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
            <h2>Contact me <span role="img" aria-label="email">📧</span></h2>
            <p>
              Email me directly at <a href="mailto:nikhil@nekonik.com">nikhil@nekonik.com</a>
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
            <h2>Book a Meet <span role="img" aria-label="calendar">📅</span></h2>

            <p>Feel free to book a meeting directly with me to discuss your use case or even just say hi!</p>

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
