var expect = require('chai').expect;

describe("True logger", function () {

    it('should expect true to be true', function () {
        expect(true).to.equal(true);
    });

    it('a failing test', function () {
        expect(false).to.equal(true);
    })
})