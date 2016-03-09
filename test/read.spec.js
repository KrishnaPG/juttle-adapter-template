'use strict';

let expect = require('chai').expect;

let juttle_test_utils = require('juttle/test').utils;
let configureAdapter = juttle_test_utils.configureAdapter;
let check_juttle = juttle_test_utils.check_juttle;

let config = {};
config.path = path.resolve(__dirname, '..');
configureAdapter({_ADAPTER_NAME_: config});

juttle_test_utils.withAdapterAPI(() => {
    describe('_ADAPTER_NAME_', () => {
        it('reads nothing back', () => {
            return check_juttle({
                program: 'read _ADAPTER_NAME_ '
            })
            .then(function(result) {
                expect(result.errors.length).to.equal(0);
                expect(result.warnings.length).to.equal(0);
                expect(result.sinks.table[0].length).to.equal(0);
            });
        });
    });
});
