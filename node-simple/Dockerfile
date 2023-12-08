FROM node:21-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["nodemon", "index.js"]
