FROM node:alpine

MAINTAINER antti.suoninen@gmail.com

RUN mkdir /app

ADD package.json /app/package.json
WORKDIR /app
RUN npm install --no-progress

ADD .babelrc /app/.babelrc
ADD config /app/config
ADD lib /app/lib
ADD index.js /app/index.js

# PM2 process configuration
ADD process.yml /app/process.yml

WORKDIR /app
CMD ["node_modules/.bin/pm2", "start", "process.yml"]
