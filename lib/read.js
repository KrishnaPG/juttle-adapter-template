'use strict';

let AdapterRead = require('juttle/lib/runtime/adapter-read');
let logger = require('juttle/lib/logger').getLogger('_ADAPTER_NAME_-read');

class Read_ADAPTER_NAME_ extends AdapterRead {
    constructor(options, params) {
        super(options, params);
        logger.debug('initializing read _ADAPTER_NAME_');
        throw Error('implement me');
    }

    read(from, to, limit, state) { 
        throw Error('implement me');
    }
}

module.exports = Read_ADAPTER_NAME_;
