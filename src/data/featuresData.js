// src/data/featuresData.js
// Feature data and icon mapping for FeaturesPage

export const features = [
  {
    title: 'Server-to-server sync',
    description: 'Sync env vars and config files securely between servers without manual copy mistakes or drift.',
    icon: 'shield',
  },
  {
    title: 'Docker Compose support',
    description: 'Inject and sync variables directly for Docker Compose deployments with clean stage separation.',
    icon: 'docker',
  },
  {
    title: 'CLI and cURL workflows',
    description: 'Use our CLI tool daily or call endpoints directly with cURL when scripting is faster.',
    icon: 'terminal',
  },
  {
    title: 'Raw env variable support',
    description: 'Manage raw env vars as-is for existing scripts, CI pipelines, and server bootstrap automation.',
    icon: 'code',
  },
  {
    title: 'API key authentication',
    description: 'Keep auth simple with API-key based access that fits internal tools and automation pipelines.',
    icon: 'key',
  },
  {
    title: 'Custom stage support',
    description: 'Manage prod, dev, staging, and custom environment stage names with clear boundaries.',
    icon: 'layers',
  },
  {
    title: 'Argon2-secured keys',
    description: 'Sensitive credentials are protected with Argon2-based security implemented in Rust.',
    icon: 'lock',
  },
  {
    title: 'Pure Rust backend',
    description: 'Built in Rust for predictable performance, strong safety guarantees, and operational stability.',
    icon: 'rust',
  },
  {
    title: 'Audit logs with 180-day retention',
    description: 'Comprehensive audit logs of all significant actions, retained for 180 days for security and troubleshooting.',
    icon: 'history',
  },
  {
    title: 'Usage-based pricing',
    description: 'Simple, usage-based pricing with a free tier for small teams and practical costs for growing orgs.',
    icon: 'dollar',
  },
  {
    title: 'Multi-factor authentication (MFA)',
    description: 'Add an extra layer of security to your account with multi-factor authentication (MFA) support.',
    icon: 'mfa',
  },
  {
    title: 'Role-based access control (RBAC)',
    description: 'Control access to your environment variables and config files with role-based access control (RBAC).',
    icon: 'users',
  },
]


export const benefits = [
  'One global place to manage env and config data',
  'Works for small teams and growing engineering orgs',
  'Clear separation between environments and stages',
  'Simple onboarding for developers and DevOps teams',
  'Economical pricing designed for practical usage',
  'Built to reduce outages caused by config drift',
]
