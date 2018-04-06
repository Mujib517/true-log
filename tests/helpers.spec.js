var helpers = require('../helpers');
var expect = require('chai').expect;

describe("helpers", function () {

    describe("getClientIP()", function () {

        it("Should return the ip address of client", function () {
            var req = {
                ip: "127.0.0.1"
            };

            var clientIP = helpers.getClientIP(req);
            expect(clientIP).to.equal("127.0.0.1");
        });

        it("Should return the ip address of client", function () {
            var req = {
                _remoteAddress: "127.0.0.1"
            };

            var clientIP = helpers.getClientIP(req);
            expect(clientIP).to.equal("127.0.0.1");
        });

        it("Should return the ip address of client", function () {
            var req = {
                connection: {
                    remoteAddress: "127.0.0.1"
                }
            };

            var clientIP = helpers.getClientIP(req);
            expect(clientIP).to.equal("127.0.0.1");
        });

        it("Should return empty string when ip address is not found in req obj", function () {
            var req = {};

            var clientIP = helpers.getClientIP(req);
            expect(clientIP).to.equal("");
        });
    });

    describe("captureStartTime()", function () {

        it("Should attach starttime to res object", function () {
            var res = {};
            helpers.captureStartTime.call(res);
            expect(res.__startTime).to.not.be.null;
        });
    });

    describe("captureEndTime()", function () {
        
        it("Should write log and clean up res obj", function () {
            var res = {
                __startTime: new Date(),
                logObject: {},
                statusCode: 200
            };

            helpers.captureEndTime(null, res);

            expect(res.logObject).to.be.undefined;
            expect(res.statusCode).to.be.undefined;
        });
    });

});