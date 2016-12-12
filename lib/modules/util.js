'use strict';

const defaults = require('./../../config/defaults.json');

const validate = {
    env: env => env === 'dev' || env === 'prod',
    port: port => {
        if (port && (typeof port === 'number' || typeof parseInt(port) === 'number') && parseInt(port) > 0) {
            return true;
        }
        return false;
    }
};

const config = {
    env: validate.env(process.env.NODE_ENV) ? process.env.NODE_ENV : defaults.env,
    path: process.env.BASE_PATH || defaults.basePath,
    port: validate.port(process.env.PORT) ? process.env.PORT : defaults.port
};

const richMsg = msg => {
    return 'server ' + new Date() + ' :: ' + msg;
};

const err = msg => {
    const message = richMsg(msg);
    console.error(message);
    return message;
};

const say = msg => {
    const message = richMsg(msg);
    console.log(message);
    return message;
};

module.exports = {
    config: config,
    err: err,
    say: say,
    richMsg: richMsg,
    validate: validate
};
