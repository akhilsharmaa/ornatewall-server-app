# Fetching the latest node image on alpine linux
FROM node:18-alpine

# Setting up the work directory
WORKDIR /app/frontend

# Installing dependencies
COPY ./package*.json ./

RUN npm install

# Copying all the files in our project
COPY . .

# Starting our application
CMD ["node", "app.js"]