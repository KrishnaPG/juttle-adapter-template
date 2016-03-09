'use strict';

/* global JuttleAdapterAPI */
let AdapterWrite = JuttleAdapterAPI.AdapterWrite;
let logger = JuttleAdapterAPI.getLogger('_ADAPTER_NAME_-write');

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
