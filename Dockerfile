# Build stage
FROM node:20-slim AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --production

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Copy SSL certificates
COPY server.cert ./
COPY server.key ./

# Expose the port your server runs on (set by SERVER_PORT env var)
EXPOSE ${SERVER_PORT}

# Start the server
CMD ["node", "dist/server.js"] 