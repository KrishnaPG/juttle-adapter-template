'use strict';

let expect = require('chai').expect;
let juttle_test_utils = require('juttle/test/runtime/specs/juttle-test-utils');
let check_juttle = juttle_test_utils.check_juttle;

let config = [];
let adapter = require('../lib')(config, Juttle);
let Juttle = require('juttle/lib/runtime').Juttle;
Juttle.adapters.register(adapter.name, adapter);

describe('_ADAPTER_NAME_ source', () => {
  
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
