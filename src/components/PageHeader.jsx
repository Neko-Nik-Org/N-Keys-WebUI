function PageHeader({ title, subtitle }) {
  return (
    <section className="page-header container">
      <h1>{title}</h1>
      {subtitle ? <p>{subtitle}</p> : null}
    </section>
  )
}

export default PageHeader
