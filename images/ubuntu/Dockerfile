# Use Ubuntu as the base image
FROM ubuntu:20.04

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive

# Update and install dependencies
RUN apt-get update && apt-get install -y \
    curl \
    gnupg2 \
    lsb-release \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean

# Verify Node.js installation
RUN node -v && npm -v

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install npm dependencies (if you have a package.json)
RUN npm install

# Expose port 3000 for the Node.js application
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
