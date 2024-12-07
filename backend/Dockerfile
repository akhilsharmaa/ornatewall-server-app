# Fetching the latest node image on alpine linux
FROM node:18-alpine

# Setting up the work directory
WORKDIR /app/backend

# Installing dependencies
COPY ./package*.json ./

RUN npm install
RUN npm i -g nodemon 

# Copying all the files in our project
COPY . .

# Starting our application
CMD ["nodemon", "server.js"]
