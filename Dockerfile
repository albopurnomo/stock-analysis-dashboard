# Use Node.js as the base image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose port
EXPOSE 8888

# Start Vite dev server with host flag for Docker networking
CMD ["npm", "run", "dev", "--", "--host"]
