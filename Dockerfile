# Use lightweight Node image
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy source
COPY . .

# Build TypeScript → JavaScript
RUN npm run build

# Expose port
EXPOSE 8080

# Start compiled app
CMD ["node", "dist/adapters/github/server.js"]