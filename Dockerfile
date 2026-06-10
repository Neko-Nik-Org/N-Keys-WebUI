# ---- Base ----
FROM node:22-alpine AS base

WORKDIR /app

# ---- Dependencies ----
FROM base AS deps

COPY package*.json ./

RUN npm ci

# ---- Builder ----
FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ---- Runner ----
FROM node:22-alpine AS runner

WORKDIR /app

RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nextjs /app/public ./public

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
