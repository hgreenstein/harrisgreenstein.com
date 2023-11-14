# Stage 1: Build
FROM node:20.9-alpine AS build

# Set the working directory
WORKDIR /app/client

# Copy package.json and package-lock.json
COPY package.json .
COPY package-lock.json .

# Install dependencies, including devDependencies
# We need them for the build process
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build the project
# This will create the /app/client/dist directory
RUN npm run build

# Stage 2: Production with NGINX
FROM nginx:alpine AS production

WORKDIR /app/client

# Copy the build artifacts from the build stage
COPY --from=build /app/client/dist /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf
# Expose port 3000
EXPOSE 3000

# Optional: Copy your NGINX configuration file (if you have one)

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
