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

Vue components can be found in `lib/front/src/components`. Use `import` statement in Vue components. Most of server code is in `lib/server.js`, `lib/modules` and `lib/routes`.

You can run server on host or in a container. Running on host enables server live reload on file change, but both ways run Vue with hot module reload.

```
# run on host with server live reload and Vue HMR
NODE_ENV=dev BASE_PATH=/woot npm start
```
View results at [http://localhost:3000/woot](http://localhost:3000/woot)

```
# run in container with Vue HMR
NODE_ENV=dev PORT=80 BASE_PATH=/woot npm run start-docker
```
View results at [http://localhost/woot](http://localhost/woot)


#### environment

```
PORT=[3000]
NODE_ENV=[prod] # dev || prod
BASE_PATH=[/]
```
