var writer = require('../writer');
var expect = require('chai').expect;
var sinon = require('sinon');

describe("Writer", function () {

    var res;

    beforeEach(function () {
        res = {
            config: {},
            logObject: {},
            statusCode: 200,
            __startTime: new Date()
        };
    });

    it("Should cleanup res object", function () {

        writer(res);

        expect(res.config).to.be.undefined;
        expect(res.logObject).to.be.undefined;
        expect(res.statusCode).to.be.undefined;
        expect(res.__startTime).to.be.undefined;
    });

    it("Should log to a stream", function () {
        var stream = {
            write: sinon.spy()
        };
        res.config.stream = stream;
        console.log = sinon.spy();

        writer(res);

        expect(stream.write.called).to.be.true;
        expect(console.log.called).to.be.undefined;
    });

    it("Should log to console when no stream is passed", function () {
        console.log = sinon.spy();

        writer(res);

        expect(console.log.called).to.be.true;
    });
});