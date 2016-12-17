FROM node:alpine

MAINTAINER antti.suoninen@gmail.com

RUN mkdir /app

ADD config /app/config
ADD lib /app/lib
ADD package.json /app/package.json
ADD index.js /app/index.js
ADD .babelrc /app/.babelrc
ADD .eslintrc /app/.eslintrc

VOLUME /app/lib/front/src/templates
VOLUME /app/lib/front/dist

WORKDIR /app

RUN NODE_ENV=dev npm install --no-progress

CMD ["node", "index.js"]
