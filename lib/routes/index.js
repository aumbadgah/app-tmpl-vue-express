'use strict';

const fs = require('fs');
const config = require('./../modules/util').config;

module.exports = app => {
    fs.readdirSync(__dirname).forEach(file => {
        if (file == "index.js") {
            return;
        }
        const name = file.substr(0, file.indexOf('.'));
        app.use(config.path.length > 1 ? config.path + '/api' : '/api', require('./' + name));
    });
};
