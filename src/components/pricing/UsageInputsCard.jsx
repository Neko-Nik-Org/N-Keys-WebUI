function UsageInputsCard({ usage, onChange }) {
  return (
    <div className="pricing-panel">
      <h2>Usage Inputs</h2>
      <p className="calc-note">Adjust your users and projects to estimate your monthly bill.</p>

      <div className="calculator-fields">
        <div className="usage-field-group">
          <label>
            <span className="field-label">Users: <strong>{usage.users}</strong></span>
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              value={usage.users}
              onChange={onChange('users')}
              className="slider"
            />
          </label>
          <input
            type="number"
            min="1"
            step="1"
            value={usage.users}
            onChange={onChange('users')}
            className="counter-input"
          />
        </div>

        <div className="usage-field-group">
          <label>
            <span className="field-label">Projects: <strong>{usage.projects}</strong></span>
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              value={usage.projects}
              onChange={onChange('projects')}
              className="slider"
            />
          </label>
          <input
            type="number"
            min="1"
            step="1"
            value={usage.projects}
            onChange={onChange('projects')}
            className="counter-input"
          />
        </div>
      </div>

      <div className="unlimited-features">
        <h3>Unlimited Features *</h3>
        <ul>
          <li>Core N-Keys functionality</li>
          <li>Environment Variables</li>
          <li>Configuration Files</li>
          <li>API Keys</li>
          <li>Project Deployments (Dev, Staging, Prod, etc.)</li>
        </ul>
        <p className="fair-use-note">* Subject to fair use policy</p>
      </div>
    </div>
  )
}

export default UsageInputsCard
