import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="container section">
      <div className="hero" style={{ paddingTop: '15vh' }}>
        <h1 style={{ fontSize: '6rem', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #ef4444, #b91c1c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          500
        </h1>
        <h2>Oops! Something went wrong</h2>
        <p>
          An unexpected error occurred on our end. Please try again later or contact our support team if the problem persists.
        </p>
        <div className="hero-actions">
          <button 
            onClick={() => window.location.reload()} 
            className="button button-primary"
            style={{ background: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)' }}
          >
            Reload Page
          </button>
          <Link to="/" className="button button-secondary">
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
