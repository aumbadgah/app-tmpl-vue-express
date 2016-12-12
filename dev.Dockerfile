FROM node:alpine

MAINTAINER antti.suoninen@gmail.com

RUN mkdir /app

ADD config /app/config
ADD lib /app/lib
ADD package.json /app/package.json
ADD index.js /app/index.js
ADD .babelrc /app/.babelrc
ADD .eslintrc /app/.eslintrc

WORKDIR /app

RUN NODE_ENV=dev npm install --no-progress

CMD ["node", "index.js"]
