'use strict';

/* global JuttleAdapterAPI */
let AdapterWrite = JuttleAdapterAPI.AdapterWrite;

class Write_ADAPTER_NAME_ extends AdapterWrite {
    constructor(options, params) {
        super(options, params);
        this.logger.debug('initializing write _ADAPTER_NAME_');
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
