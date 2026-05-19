function PageHeader({ title, subtitle }) {
  return (
    <section className="text-center pt-16 sm:pt-24 pb-8 sm:pb-12 animate-[fadeInUp_0.45s_ease-out_both] max-w-5xl mx-auto px-6">
      <h1 className="m-0 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      ) : null}
    </section>
  )
}

export default PageHeader
