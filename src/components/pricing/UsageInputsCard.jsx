function UsageInputsCard({ usage, onChange }) {
  return (
    <div className="pricing-panel">
      <h2>Usage Inputs</h2>
      <p className="calc-note">Adjust values to estimate your monthly bill.</p>

      <div className="calculator-fields">
        <label>
          Users
          <input type="number" min="1" step="1" value={usage.users} onChange={onChange('users')} />
        </label>
        <label>
          Projects
          <input type="number" min="1" step="1" value={usage.projects} onChange={onChange('projects')} />
        </label>
        <label>
          Env keys (Per Project)
          <input type="number" min="1" step="1" value={usage.envKeys} onChange={onChange('envKeys')} />
        </label>
        <label>
          API keys
          <input type="number" min="1" step="1" value={usage.apiKeys} onChange={onChange('apiKeys')} />
        </label>
        <label>
          Config files (Not per project, in total)
          <input type="number" min="1" step="1" value={usage.configFiles} onChange={onChange('configFiles')} />
        </label>
        <label>
          Support tier
          <select value={usage.supportTier} onChange={onChange('supportTier')}>
            <option value="free">Free (E-Mail)</option>
            <option value="basic">Basic (Free + Scheduled meetings)</option>
            <option value="priority">Priority (Basic + Faster response times)</option>
          </select>
        </label>
      </div>
    </div>
  )
}

export default UsageInputsCard
