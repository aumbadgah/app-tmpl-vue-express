FROM node:alpine

MAINTAINER antti.suoninen@gmail.com

RUN mkdir /app

ADD package.json /app/package.json
WORKDIR /app
RUN npm install --no-progress

ADD .babelrc /app/.babelrc
ADD config /app/config
ADD index.js /app/index.js

VOLUME /app/lib

WORKDIR /app
CMD ["node", "index.js"]
