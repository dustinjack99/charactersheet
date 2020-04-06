FROM node:10

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . . 

EXPOSE 8080
EXPOSE 3306

CMD [ "node", "server.js" ]
