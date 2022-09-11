FROM node:14-slim

WORKDIR /app

COPY ./package.json /app
COPY ./package-lock.json /app

RUN npm install

COPY ./ /app

RUN npm run build 

CMD ["npm", "start"]