FROM node:10


RUN mkdir -p /usr/src/app
WORKDIR /usr/app

# Install Dependencies
COPY package*.json ./

RUN npm ci

# Copy app source code
COPY . .

# Exports
EXPOSE 8080

CMD ["npm","start"]