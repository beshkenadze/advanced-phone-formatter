var apf = require('..'),
    assert = require('assert');

describe('apf(input, {"region":"RU"})', function () {
    it('format RU local format', function () {
        assert(apf("89211234567", {"region": "RU"}) === '+7 921 123-45-67');
    });
    it('format RU format', function () {
        assert(apf("79211234567", {"region": "RU"}) === '+7 921 123-45-67');
    });
    it('format US format', function () {
        assert(apf("1800MYAPPLE", {"region": "US"}) === '+1 800-692-7753');
    });
    it('format default format', function () {
        assert(apf("1800MYAPPLE") === '+1 800-692-7753');
    });
});