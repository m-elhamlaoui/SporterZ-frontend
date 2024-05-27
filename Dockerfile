FROM node:alpine

WORKDIR /app

ADD package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

CMD ["ng", "serve"]
