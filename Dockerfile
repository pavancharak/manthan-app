# Use Node
FROM node:20

WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Copy code
COPY . .

# Build TS
RUN npm run build

# Expose port
EXPOSE 8080

# Start compiled JS (NOT ts-node)
CMD ["node", "dist/adapters/github/server.js"]