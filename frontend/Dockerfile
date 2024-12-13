# Use the latest Node.js LTS image with Alpine Linux for the build stage
FROM node:18-alpine as build

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy application source code
COPY . .

# Build the application for production
RUN npm run build

# Use a minimal Node.js base image for the production stage
FROM node:18-alpine

# Install a lightweight static file server
RUN npm install -g serve

# Set the working directory
WORKDIR /app

# Copy the build artifacts from the build stage
COPY --from=build /app/dist ./dist

# Expose the port serve will run on (optional)
EXPOSE 5000

# Use serve to serve the static files
CMD ["serve", "-s", "dist", "-l", "5000"]
