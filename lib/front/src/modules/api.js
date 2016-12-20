'use strict';

/* global window */

const request = require('client-request');

const util = require('./util');

const get = path => {
    return new Promise((resolve, reject) => {    
        const options = {
            method: 'GET',
            json: true,
            uri: window.location.origin + util.apiBasePath() + path
        };

        request(options, (err, res, body) => {
            if (err) reject(err);
            resolve(body);
        });
    });
};

const api = {
    get: get,
    getMsg: () => {
        return new Promise((resolve, reject) => {
            get('/test-route')
            .then(msg => resolve(msg))
            .catch(err => reject(err));
        });
    }
};

export default api;
