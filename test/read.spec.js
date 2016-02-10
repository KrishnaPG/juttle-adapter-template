'use strict';

var expect = require('chai').expect;
var juttle_test_utils = require('juttle/test/runtime/specs/juttle-test-utils');
var check_juttle = juttle_test_utils.check_juttle;

var config = [];
var adapter = require('../lib')(config, Juttle);
var Juttle = require('juttle/lib/runtime').Juttle;
Juttle.adapters.register(adapter.name, adapter);

describe('elastic source', function() {
  
    it('reads nothing back', function() {
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
