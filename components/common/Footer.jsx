function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-6 mt-12 text-sm text-slate-500 dark:text-slate-400">
      <div className="container max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">

        <p>© 2024-2026 N-Keys · All rights reserved.</p>

        <p>
          A Product of&nbsp;
          <a
            href="https://www.yukthi.com/"
            target="_blank"
            rel="noreferrer"
            className="text-brand-primary hover:text-brand-hover font-medium transition-colors"
          >
            Yukthi Systems Pvt Ltd
          </a>
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter
