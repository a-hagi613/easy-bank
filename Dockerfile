# Use a base image with Node.js pre-installed
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json  ./

# Install project dependencies using Yarn
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the Vite project
RUN npm run build

# Expose the port your application will listen on
EXPOSE 5173

# Specify the command to run your application
CMD ["npm", "run", "dev"]