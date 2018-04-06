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


});