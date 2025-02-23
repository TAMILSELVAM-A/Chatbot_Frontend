# Use an official Node.js image as the build stage

FROM node:18 AS build
 
# Set the working directory in the container

WORKDIR /app
 
# Copy package.json and package-lock.json

COPY package*.json ./
 
# Install dependencies

RUN npm install
 
# Copy the entire project

COPY . .
 
# Build the React app

RUN npm run build
 
# Use an Nginx image for production

FROM nginx:alpine
 
# Copy built files from the previous stage

COPY --from=build /app/build /usr/share/nginx/html
 
# Expose port 80

EXPOSE 80
 
# Start Nginx

CMD ["nginx", "-g", "daemon off;"]

 