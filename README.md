# N-Keys Web UI

N-Keys is a developer-focused platform to securely manage and sync environment variables and configuration data across servers and stages.

This repository currently contains the web application (marketing + onboarding surface), and is planned to evolve into dashboard and payments-related flows. But still keeping all open-source and public.

## Product Direction

N-Keys focuses on:
- Secure, encrypted environment variable management.
- Dashboard management of secrets and configuration.
- Secure server-to-server environment sync too.
- Docker Compose and raw env-var workflows.
- CLI and cURL-friendly operations.
- API key-based authentication.
- Stage-aware config management (prod/dev/staging/custom names).
- Rust-first backend with Argon2-based key protection.
- Economical pricing for teams.

## Tech Stack

- React 19
- React Router 7
- Vite 8
- ESLint 10
- Wrangler (Cloudflare deploy flow)

## Local Development

Prerequisites:
- Node.js 20+
- npm

Install and run:

```bash
npm install
npm run dev
```

Build and lint:

```bash
npm run lint
npm run build
```

Preview/deploy scripts:

```bash
npm run preview
npm run deploy
```

## Contribution Guidelines

For contributions, please follow the guidelines below to ensure code quality, security, and maintainability.

Please include in PRs:
- What changed and why.
- Screenshots for UI changes.
- Any migration or config notes.
