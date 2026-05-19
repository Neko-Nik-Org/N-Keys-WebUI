function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-6 mt-12 text-sm text-slate-500 dark:text-slate-400">
      <div className="container max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">

        <p>© 2024-2026 Neko Nik · N-Keys · All rights reserved.</p>

        <p>
          Made with <span role="img" aria-label="heart">❤️</span> by&nbsp;
          <a
            href="https://nekonik.com"
            target="_blank"
            rel="noreferrer"
            className="text-brand-primary hover:text-brand-hover font-medium transition-colors"
          >
            Neko Nik
          </a>
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter
