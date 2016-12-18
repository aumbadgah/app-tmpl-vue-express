## app-tmpl-vue-express

- Vue with hot module reload
- Express
- Docker


#### requirements

- [NodeJS](https://nodejs.org/en/download/)
- [Docker](https://docs.docker.com/engine/installation/)


#### install

```
NODE_ENV=dev npm i
```


#### dev

```
NODE_ENV=dev BASE_PATH=/woot npm start
```

Runs the server on host and reloads it on file change. Also runs Vue with HMR.

View results at [http://localhost:3000/woot](http://localhost:3000/woot)


```
NODE_ENV=dev PORT=80 BASE_PATH=/woot npm run start-docker
```

Runs the server in a Docker container, but does not support server live reload. Does, however, run Vue with HMR.

View results at [http://localhost/woot](http://localhost/woot)


Vue components can be found in `lib/front/src/components`. Use `import` statement in Vue components.

Most of server code is in `lib/server.js`, `lib/modules` and `lib/routes`.


#### environment

```
PORT=[3000]
NODE_ENV=[prod] # dev || prod
BASE_PATH=[/]
```
