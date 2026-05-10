import PageHeader from '../components/PageHeader'

function WaitlistPage() {
  return (
    <>
      <PageHeader
        title="Join the Waitlist"
        subtitle="Be among the first to try N-Keys and shape the product direction."
      />

      <section className="container section section-tight">
        <article className="card waitlist-card">
          <form className="form" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="waitlist-name">Name</label>
            <input id="waitlist-name" name="name" type="text" autoComplete="name" required />

            <label htmlFor="waitlist-email">Email</label>
            <input id="waitlist-email" name="email" type="email" autoComplete="email" required />

            <label htmlFor="waitlist-use-case">Use Case</label>
            <textarea id="waitlist-use-case" name="useCase" rows="4" required />

            <button type="submit" className="button button-primary">
              Join Waitlist
            </button>
          </form>
          <p className="support-text">Early users will get priority access.</p>
        </article>
      </section>
    </>
  )
}

export default WaitlistPage
