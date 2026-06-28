# ---------------------------------------------------------
# Phase 1: Build dependencies (Native Module Compilation)
# ---------------------------------------------------------
FROM node:24-bookworm-slim AS builder
WORKDIR /app
ARG TARGETARCH

# Install compilation tools for native modules (like better-sqlite3) and cloudflared
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    make \
    g++ \
    wget \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Download cloudflared based on target architecture
RUN if [ "$TARGETARCH" = "amd64" ]; then \
         wget -qO /usr/local/bin/cloudflared https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64; \
       elif [ "$TARGETARCH" = "arm64" ]; then \
         wget -qO /usr/local/bin/cloudflared https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-arm64; \
       else \
         echo "Unsupported architecture: $TARGETARCH" && exit 1; \
       fi \
    && chmod +x /usr/local/bin/cloudflared

# Copy only package files to install dependencies
COPY backend/package*.json ./backend/
WORKDIR /app/backend

# Install production dependencies (will compile native bindings for the target arch)
RUN npm install --omit=dev && npm cache clean --force


# ---------------------------------------------------------
# Phase 2: Ultimate Performance Lean Runner
# ---------------------------------------------------------
# This stage expects frontend/dist and backend/dist 
# to be pre-built outside the container via CI.
FROM node:24-bookworm-slim AS runner
WORKDIR /app

# Install ca-certificates (required by cloudflared for TLS connections)
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Copy cloudflared from builder
COPY --from=builder /usr/local/bin/cloudflared /usr/local/bin/cloudflared

# Copy compiled native node_modules from builder phase
COPY --from=builder /app/backend/node_modules ./backend/node_modules

# Copy pre-built platform-independent artifacts from the host context
COPY frontend/dist ./frontend/dist
COPY backend/dist ./backend/dist
COPY backend/package*.json ./backend/
COPY backend/schema.sql ./

# Ensure correct ownership for non-root user
RUN chown -R node:node /app
USER node

# Expose mapping port
EXPOSE 3000

# Start command
CMD ["node", "backend/dist/docker/server.js"]