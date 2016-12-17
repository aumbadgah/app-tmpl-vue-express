### aumbadgah-app-tmpl

- Vue with hot module reload
- Express

Application template for [aumbadgah-ci](https://github.com/aumbadgah/aumbadgah-ci)

##### install

[NodeJS](https://nodejs.org/en/download/)

[Docker](https://docs.docker.com/engine/installation/)

```
NODE_ENV=dev npm i
```

##### dev

```
NODE_ENV=dev BASE_PATH=/woot npm start
```

View results at [http://localhost/woot](http://localhost/woot)

environment
```
[PORT=3000]
[NODE_ENV=prod] # dev || prod
[BASE_PATH=/]
```

Defaults can be configured in `config/defaults.json`
