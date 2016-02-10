'use strict';

let AdapterWrite = require('juttle/lib/runtime/adapter-write');
let logger = require('juttle/lib/logger').getLogger('_ADAPTER_NAME_-write');

class Write_ADAPTER_NAME_ extends AdapterWrite {
    constructor(options, params) {
        super(options, params);
        logger.debug('initializing write _ADAPTER_NAME_');
        throw Error('implement me');
    }

    write(points) { 
        throw Error('implement me');
    }

    eof() {
        throw Error('implement me');
    }
}

module.exports = Write_ADAPTER_NAME_;
