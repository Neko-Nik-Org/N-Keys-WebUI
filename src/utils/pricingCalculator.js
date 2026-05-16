export function toNumber(value) {
  const parsed = Number.parseFloat(value)
  if (Number.isNaN(parsed)) {
    return 0
  }
  return Math.max(0, parsed)
}

export function formatUsd(amount, digits) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(amount)
}

export function roundUpToTwoDecimals(amount) {
  return Math.ceil(amount * 100) / 100;
}

export function calculatePricing({ usage, weights, freeTierMaxSubtotal }) {
  const supportBands = usage.supportTier === 'free'
    ? 0
    : Math.max(1, Math.ceil(usage.users / (weights.supportUserBandSize || 10)))

  const supportRatePerBand = usage.supportTier === 'priority'
    ? weights.prioritySupportPerBand
    : usage.supportTier === 'basic'
      ? weights.basicSupportPerBand
      : 0

  const lineItems = [
    { name: 'Users', units: usage.users, rate: weights.user, total: usage.users * weights.user },
    { name: 'Projects', units: usage.projects, rate: weights.project, total: usage.projects * weights.project },
    { name: 'Env keys (Per Project)', units: usage.envKeys, rate: weights.envKey, total: usage.envKeys * weights.envKey },
    { name: 'API keys', units: usage.apiKeys, rate: weights.apiKey, total: usage.apiKeys * weights.apiKey },
    { name: 'Config files (In total)', units: usage.configFiles, rate: weights.configFile, total: usage.configFiles * weights.configFile },
    {
      name: usage.supportTier === 'free' ? 'Support (Free)' : `${usage.supportTier === 'basic' ? 'Basic' : 'Priority'} support`,
      units: supportBands,
      rate: supportRatePerBand,
      total: supportBands * supportRatePerBand,
    },
  ]

  const subtotalRaw = lineItems.reduce((sum, item) => sum + item.total, 0)
  const roundedSubtotal = roundUpToTwoDecimals(subtotalRaw)
  const freeTierApplied = roundedSubtotal < 3

  return {
    supportBands,
    lineItems,
    subtotalRaw,
    subtotal: roundedSubtotal,
    freeTierApplied,
    billedTotal: freeTierApplied ? 0 : roundedSubtotal,
  }
}
