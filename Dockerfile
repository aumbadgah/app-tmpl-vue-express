FROM node:alpine

MAINTAINER antti.suoninen@gmail.com

RUN mkdir /app

ADD config /app/config
ADD lib /app/lib
ADD package.json /app/package.json
ADD index.js /app/index.js
ADD .babelrc /app/.babelrc
ADD .eslintrc /app/.eslintrc
ADD process.yml /app/process.yml

WORKDIR /app

RUN npm install --no-progress

CMD ["node_modules/.bin/pm2", "start", "/app/process.yml"]
