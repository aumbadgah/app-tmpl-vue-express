'use strict';

const path = require('path');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const http = require('http');

const util = require('./modules/util');
const config = util.config;

app.set('port', config.port);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.set('views', __dirname + '/' + path.join('front', 'src', 'templates'));
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    util.say(req.method + ' ' + req.originalUrl);
    next();
});

app.use(express.static(path.join(__dirname, './front/dist'), {
    dotfiles: 'ignore',
    etag: true,
    maxAge: '1d',
}));

const renderIndex = (req, res) => {
    res.render('index', {
        basePath: config.path
    });
};

const basePath = () => config.path.length > 1 ? config.path : '';

app.get(basePath() + '/index.html', renderIndex);
app.get(basePath() + '/', renderIndex);

require('./routes')(app);

const server = http.createServer(app);

server.listen( app.get('port') );

server.on('error', err => util.err(err));
server.on('listening', () => {
    util.say('Server listening in port ' + server.address().port);
});

module.exports = server;
