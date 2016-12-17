### aumbadgah-app-tmpl

Application template for [aumbadgah-ci](https://github.com/aumbadgah/aumbadgah-ci)

##### install

[NodeJS](https://nodejs.org/en/download/)

[Docker](https://docs.docker.com/engine/installation/)

```
NODE_ENV=dev npm i
```

##### dev

```
NODE_ENV=dev BASE_PATH=/wut npm start
```

environment
```
PORT=[3000]
NODE_ENV=[dev || prod]
BASE_PATH=[/]
```

View results at [http://localhost/wut](http://localhost/wut)

##### todo

fresh hmr build should be mounted for serve in container
also mount templates directory
