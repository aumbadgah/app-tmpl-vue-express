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

View results at [http://localhost/wut](http://localhost/wut)

environment
```
[PORT=3000]
[NODE_ENV=prod] # dev, prod
[BASE_PATH=/]
```

Defaults can be configured in `config/defaults.json`
