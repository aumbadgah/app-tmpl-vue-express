'use strict';

/* global describe, it */

const chai = require('chai');

const defaults = require('./../config/defaults.json');
const util = require('./../lib/modules/util');

chai.should();

describe('util', function() {
    describe('config.env', function() {
        it('should equal dev', () => {

            util.config.env.should.be.a('string');
            util.config.env.should.be.oneOf(['dev', 'prod']);

        });
    });

    describe('config.path', function() {
        it('should equal default base path', () => {

            util.config.path.should.be.a('string');
            if (process.env.BASE_PATH) {
                util.config.path.should.equal(process.env.BASE_PATH);
            } else {
                util.config.path.should.equal(defaults.basePath);
            }

        });
    });
    
    describe('config.port', function() {
        it('should equal default port', () => {

            util.config.port.should.be.a('number');

            if (process.env.PORT && util.validate.port(process.env.PORT)) {
                util.config.port.should.equal(process.env.PORT);
            } else {
                util.config.port.should.equal(defaults.port);
            }

        });
    });
    
    describe('say', function() {
        it('should return a specific type of log string', () => {

            const phrase = 'test phrase';

            util.say('test phrase 1').should.be.a('string');
            util.say('test phrase 2').indexOf('server').should.equal(0);
            util.say('test phrase 3').indexOf('test phrase 3').should.be.above(5);

        });
    });
    
    describe('validate.env', function() {
        it('should only accept dev or prod', () => {

            util.validate.env('dev').should.equal.true;
            util.validate.env('prod').should.equal.true;
            
            util.validate.env('local').should.equal.false;
            util.validate.env('test').should.equal.false;

        });
    });
    
    describe('validate.port', function() {
        it('should', () => {

            util.validate.port('80').should.be.true;
            util.validate.port(80).should.be.true;
            util.validate.port('443').should.be.true;
            util.validate.port(443).should.be.true;

            util.validate.port('NaN').should.be.false;
            util.validate.port(0).should.be.false;
            util.validate.port(-4).should.be.false;

        });
    });
});
