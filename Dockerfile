
# Use Node.js 24
FROM node:24-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy application source code
COPY app.js ./

# Expose application port
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]
