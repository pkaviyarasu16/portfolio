# Use a Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package.json and lock file first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build the Vite app
RUN npm run build

# Install "serve" globally to serve the static site
RUN npm install -g serve

# Expose the port (serve default is 3000)
EXPOSE 3000

# Run the built app using "serve"
CMD ["serve", "-s", "dist", "-l", "3000"]
