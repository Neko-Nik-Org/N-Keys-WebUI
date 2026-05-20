import { formatUsd } from '../../utils/pricingCalculator'

function PricingSummaryCard({ pricing, onJoinWaitlist, onContactSales, onOpenRateCard }) {
  return (
    <div className="flex flex-col justify-between p-8 bg-slate-50/80 dark:bg-slate-900/40 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 md:w-5/12">
      <div>
        <div className="flex items-center justify-between gap-4 mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Estimated Cost</h2>
          <button
            type="button"
            className="text-sm font-semibold text-brand-primary hover:text-brand-hover transition-colors"
            onClick={onOpenRateCard}
          >
            View Rates
          </button>
        </div>

        <div className="mb-8 relative overflow-hidden bg-white dark:bg-[#131c2c] p-6 rounded-xl border border-brand-primary/30 shadow-md">
          <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-xs font-bold rounded-bl-lg">Early Adopter</div>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">Total Monthly Cost</p>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-slate-400 dark:text-slate-500 line-through decoration-red-500/60 decoration-[3px]">
                {formatUsd(pricing.billedTotal)}
              </span>
              <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                $0.00
              </span>
            </div>
            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-2 bg-emerald-50 dark:bg-emerald-900/20 w-fit px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/50">
              ✨ Free for first 6 months!
            </span>
          </div>
        </div>

        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">Cost Breakdown</h3>
        <ul className="space-y-3 mb-8">
          {pricing.lineItems.map((item) => (
            <li key={item.name} className="flex items-center justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-300 font-medium">{item.name}</span>
              <span className="text-slate-500 dark:text-slate-400">
                {item.units} x {formatUsd(item.rate)} = <span className="font-semibold text-slate-700 dark:text-slate-200">{formatUsd(item.total)}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <div className="flex flex-col gap-3">
          <button
            type="button"
            className="w-full py-3 px-4 font-semibold text-white bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            onClick={onJoinWaitlist}
          >
            Join Waitlist Now
          </button>
          <button
            type="button"
            className="w-full py-3 px-4 font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-[#131c2c] border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200"
            onClick={onContactSales}
          >
            Contact Sales
          </button>
        </div>
        <p className="mt-6 text-xs text-slate-500 dark:text-slate-400 text-center leading-relaxed">
          🚀 <strong>Early adopters only:</strong> Get full access to N-Keys completely free in exchange for feedback to help shape the platform.
        </p>
      </div>
    </div>
  )
}

export default PricingSummaryCard
