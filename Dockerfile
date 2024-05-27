FROM node:19.5.0-alpine

WORKDIR /app

ADD package*.json ./

RUN npm install

COPY . .

CMD ["ng", "serve"]
