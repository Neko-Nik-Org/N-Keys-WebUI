const ICON_PATHS = {
  shield: 'M12 3L5 7v5c0 5 3.5 8 7 9 3.5-1 7-4 7-9V7l-7-4z',
  docker: 'M4 13h16M7 13V9h3v4M10 13V7h3v6M13 13v-3h3v3M6 17h12',
  terminal: 'M8 9l-3 3 3 3M16 9l3 3-3 3M13 7l-2 10',
  code: 'M9 18l-6-6 6-6M15 6l6 6-6 6',
  key: 'M14 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm0 0h7m-2-2v4',
  layers: 'M12 3l9 5-9 5-9-5 9-5zm0 9l9 5-9 5-9-5 9-5',
  lock: 'M7 11V8a5 5 0 0 1 10 0v3M6 11h12v10H6V11z',
  rust: 'M12 2l2 2 3-1 1 3 3 1-1 3 2 2-2 2 1 3-3 1-1 3-3-1-2 2-2-2-3 1-1-3-3-1 1-3-2-2 2-2-1-3 3-1 1-3 3 1 2-2zm0 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  history: 'M3 12a9 9 0 1 0 3-6.7M3 4v5h5M12 7v5l3 3',
  dollar: 'M12 2v20M17 5H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H7',
  mfa: 'M12 1l8 4v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-4zm0 10v3m0 4h.01',
  users: 'M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M16 3.13a4 4 0 0 1 0 7.75M20 21v-2a4 4 0 0 0-3-3.87M10 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
};


function FeatureIcon({ icon }) {
  const path = ICON_PATHS[icon] || ICON_PATHS['shield'];
  return (
    <span className="feature-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d={path} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default FeatureIcon;
