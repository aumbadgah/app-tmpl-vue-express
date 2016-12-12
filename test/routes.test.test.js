'use strict';

/* global describe, it */

const chai = require('chai');
const chaiHttp = require('chai-http');
// http://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/#.WE2-J6J96L8

const defaults = require('./../config/defaults.json');
const server = require('./../lib/server');
const config = require('./../lib/modules/util').config;

chai.should();
chai.use(chaiHttp);

describe('routes.test', function() {
    describe('GET /test-route', function() {
        it('should ', function(done) {

            chai.request(server)
                .get((config.path.length > 1 ? config.path : '') + '/api/test-route')
                .end(function(err, res){
                    res.should.have.status(200);
                    done();
                });

        });
    });
});
