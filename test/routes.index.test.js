'use strict';

/* global describe, it, $ */

const chai = require('chai');
const chaiHttp = require('chai-http');
// http://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/#.WE2-J6J96L8

const defaults = require('./../config/defaults.json');
const server = require('./../lib/server');
const config = require('./../lib/modules/util').config;

chai.should();

chai.use(chaiHttp);
// chai.use($);

describe('routes.test', () => {
    describe('GET /', () => {
        it('should return index.html', done => {

            chai.request(server)
                .get(config.path)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.html;

                    done();
                });

        });
    });
});
