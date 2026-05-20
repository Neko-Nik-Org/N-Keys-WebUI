export function toNumber(value) {
  const parsed = Number.parseFloat(value)
  if (Number.isNaN(parsed)) {
    return 0
  }
  return Math.max(0, parsed)
}

export function formatUsd(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(amount)
}

export function roundUpToTwoDecimals(amount) {
  return Math.ceil(amount * 100) / 100;
}

export function calculatePricing({ usage, weights }) {
  const lineItems = [
    { name: 'Users', units: usage.users, rate: weights.user, total: usage.users * weights.user },
    { name: 'Projects', units: usage.projects, rate: weights.project, total: usage.projects * weights.project },
  ]

  const subtotalRaw = lineItems.reduce((sum, item) => sum + item.total, 0)
  const roundedSubtotal = roundUpToTwoDecimals(subtotalRaw)

  return {
    lineItems,
    subtotalRaw,
    subtotal: roundedSubtotal,
    freeTierApplied: false,
    billedTotal: roundedSubtotal,
  }
}
