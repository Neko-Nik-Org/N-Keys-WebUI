import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="container section">
      <div className="hero" style={{ paddingTop: '15vh' }}>
        <h1 style={{ fontSize: '6rem', marginBottom: '0.5rem', background: 'linear-gradient(90deg, var(--brand-primary), var(--brand-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          404
        </h1>
        <h2>Page not found</h2>
        <p>
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
        </p>
        <div className="hero-actions">
          <Link to="/" className="button button-primary">
            Go back home
          </Link>
          <Link to="/contact" className="button button-secondary">
            Contact support &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
