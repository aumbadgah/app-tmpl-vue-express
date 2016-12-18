FROM node:alpine

MAINTAINER antti.suoninen@gmail.com

RUN npm install pm2 -g

RUN mkdir /app

COPY package.json /app/package.json
WORKDIR /app
RUN npm install --no-progress

COPY .babelrc /app/.babelrc
COPY config /app/config
COPY index.js /app/index.js

VOLUME /app/lib

WORKDIR /app
CMD ["pm2-dev", "start", "index.js"]
