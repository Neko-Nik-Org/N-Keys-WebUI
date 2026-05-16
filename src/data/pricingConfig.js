export const PRICING_WEIGHTS = {
  user: 0.5,
  project: 0.05,
  envKey: 0.005,
  apiKey: 0.001,
  configFile: 0.01,
  supportUserBandSize: 10,
  basicSupportPerBand: 1,
  prioritySupportPerBand: 2,
}

export const FREE_TIER_MAX_SUBTOTAL = 3

export const DEFAULT_USAGE = {
  users: 1,
  projects: 15,
  envKeys: 230,
  apiKeys: 50,
  configFiles: 50,
  supportTier: 'free',
}

export const PRICING_FAQS = [
  {
    question: 'We are a non-profit / open-source / educational organization. Can we get a free/discounted pricing?',
    answer:
      'Yes! We do offer fully free or discounted pricing for non-profit, open-source, and educational organizations. Just send me your requirements and proposal along with pricing expectations.',
  },
  {
    question: 'Is it possible to upgrade or downgrade the feature usage month-to-month?',
    answer:
      'Absolutely! Our pricing is designed to be flexible and usage-based, allowing you to easily adjust your feature usage on a month-to-month basis without any long-term commitments.',
  },
  {
    question: 'How to pay? Do you have monthly/annual billing?',
    answer:
      'You pay via PayPal only for now, and we bill monthly, based on your chosen features and usage. Discounts are available for annual prepayment and commitments. Contact us for more details.',
  },
  {
    question: 'Do you have Audit logs, and how long do you retain them?',
    answer:
      'Yes, we do have audit logs that track all significant actions. We retain these logs for 180 days to help with troubleshooting and security audits.',
  },
  {
    question: 'What is your refund policy?',
    answer:
      'No refunds for now, but we are happy to work with you if you have any issues or concerns with the service. Please contact us and we will do our best to resolve any problems you may have.',
  },
]
