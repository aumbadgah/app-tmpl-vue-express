
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

Most of your backend source should go in `lib/modules` and `lib/routes`. Create a new router file in `lib/routes` to make the server automatically listen to your new routes, `require` the necessary `lib/modules` and you're all set.

Vue components can be found in `lib/front/src/components`.


```
NODE_ENV=dev BASE_PATH=/woot npm start
```
Run the application on host. Starts the server with live reload on file change and Vue with hot module reload.

View results at [http://localhost:3000/woot](http://localhost:3000/woot)


```
NODE_ENV=dev PORT=80 BASE_PATH=/woot npm run start-docker
```
Run the application in a Docker container. Starts Vue with hot module reload server, but runs the server *without* live reload.

View results at [http://localhost/woot](http://localhost/woot)


```
npm test
```
Test your code with `eslint` and `mocha` unit tests. Tests are also run by default on development server start.



#### environment

```
BASE_PATH=[/]
NODE_ENV=[prod] # dev || prod
PORT=[3000]
```


#### production

Build a production version of browser script bundle
```
npm run build-production-bundle
```
