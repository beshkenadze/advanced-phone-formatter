'use strict';

/**
 * Expose transformer
 * @api public
 */
var LPN = require('google-libphonenumber'),
    PNF = LPN.PhoneNumberFormat,
    PU = LPN.phoneUtil;

module.exports = function (input, inputOptions) {
    var defaultOptions = {"region": "US"},
        options = inputOptions || defaultOptions,
        defaultRegion = "US",
        output = input;

    if ("region" in options) {
        defaultRegion = options.region;
    }

    try {
        output = PU.format(PU.parse(input, defaultRegion), PNF.INTERNATIONAL);
    } catch (ignore) {
    }

    return output;
};