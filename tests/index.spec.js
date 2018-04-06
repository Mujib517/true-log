'use strict';
var expect = require('chai').expect;
var sinon = require('sinon');
var helpers = require('../helpers');

var logger = require('../index');

describe("True logger", function () {

    var req = {
        headers: {}
    };
    var next = sinon.spy();

    it('Should return a middleware function', function () {
        var middleware = logger();

        expect(typeof middleware).is.equal("function");
    });

    it("Should call next function", function () {
        var middleware = logger();
        var res = {};
        middleware(req, res, next);
        expect(next.called).to.be.true;
    });

    it("Should write full log to a file", function () {
        var stream = {
            write: sinon.spy()
        }
        var config = {
            level: 'full',
            stream: stream
        };
        var res = {
        };
        var middleware = logger(config);
        middleware(req, res, next);
    });
});