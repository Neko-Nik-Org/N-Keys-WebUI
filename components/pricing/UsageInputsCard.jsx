function UsageInputsCard({ usage, onChange }) {
  return (
    <div className="p-8 bg-white dark:bg-[#131c2c] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none md:w-7/12 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Usage Inputs</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">Adjust your users and projects to estimate your monthly bill.</p>

        <div className="space-y-8">
          {/* Users Input */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                Users: <strong className="text-brand-primary">{usage.users}</strong>
              </span>
              <input
                type="number"
                min="1"
                step="1"
                value={usage.users}
                onChange={onChange('users')}
                className="w-20 px-3 py-1.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all"
              />
            </div>
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              value={usage.users}
              onChange={onChange('users')}
              className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-primary"
            />
          </div>

          {/* Projects Input */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                Projects: <strong className="text-brand-primary">{usage.projects}</strong>
              </span>
              <input
                type="number"
                min="1"
                step="1"
                value={usage.projects}
                onChange={onChange('projects')}
                className="w-20 px-3 py-1.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all"
              />
            </div>
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              value={usage.projects}
              onChange={onChange('projects')}
              className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-primary"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-brand-primary/5 dark:bg-brand-primary/10 border border-brand-primary/20 rounded-xl">
        <h3 className="text-sm font-bold uppercase tracking-wider text-brand-primary mb-4">Unlimited Features *</h3>
        <ul className="space-y-2 mb-4">
          {[
            'Core N-Keys functionality',
            'Environment Variables',
            'Configuration Files',
            'API Keys',
            'Project Deployments (Dev, Staging, Prod, etc.)'
          ].map((feature, i) => (
            <li key={i} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
              <svg className="w-4 h-4 text-brand-primary mt-0.5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-500 dark:text-slate-500">* Subject to fair use policy</p>
      </div>
    </div>
  )
}

export default UsageInputsCard
