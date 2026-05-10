function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <p>Copyright {new Date().getFullYear()} N-Keys</p>
        <a href="mailto:hello@n-keys.dev">hello@n-keys.dev</a>
      </div>
    </footer>
  )
}

export default SiteFooter
