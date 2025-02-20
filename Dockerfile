FROM node:20-slim

WORKDIR /app

COPY package*.json /app/

RUN npm i --force

COPY . . 

EXPOSE 3000

CMD [ "npm","start" ]