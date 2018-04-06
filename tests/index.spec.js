'use strict';
var expect = require('chai').expect;
var sinon = require('sinon');

var logger = require('../index');

describe("True logger", function () {

    it('Should return a middleware function', function () {
        var middleware = logger();

        expect(typeof middleware).is.equal("function");
    });

    it("Should call next function", function () {
        var middleware = logger();
        var res = {};
        var req = {
            headers: {}
        };
        var next = sinon.spy();
        middleware(req, res, next);
        expect(next.called).to.be.true;
    });
});