## aumbadgah-app-tmpl

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
NODE_ENV=dev PORT=80 BASE_PATH=/woot npm start
```

View results at [http://localhost/woot](http://localhost/woot)

#### environment

```
[PORT=3000]
[NODE_ENV=prod] # dev || prod
[BASE_PATH=/]
```

Defaults can be configured in `config/defaults.json`
