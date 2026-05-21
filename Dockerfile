# ---- Base ----
FROM node:22-alpine AS base

WORKDIR /app

ENV NODE_ENV=production

# ---- Dependencies ----
FROM base AS deps

COPY package*.json ./

RUN npm ci

# ---- Builder ----
FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules

COPY . .

# standalone output
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ---- Runner ----
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# create non-root user
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# copy standalone app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
