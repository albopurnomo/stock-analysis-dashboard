# Stage 1: Build the React app
FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Node.js Express proxy
FROM node:20-slim
WORKDIR /app
COPY package*.json ./
# Install production dependencies only
RUN npm install --omit=dev
COPY --from=build /app/dist ./dist
COPY server.js ./

EXPOSE 8888
CMD ["npm", "start"]
