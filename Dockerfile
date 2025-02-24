# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build application
RUN yarn build

# Expose port
EXPOSE 3000

# Start application
CMD ["yarn", "start"] 