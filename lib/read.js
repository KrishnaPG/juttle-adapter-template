'use strict';

/* global JuttleAdapterAPI */
let AdapterRead = JuttleAdapterAPI.AdapterRead;

class Read_ADAPTER_NAME_ extends AdapterRead {
    constructor(options, params) {
        super(options, params);
        this.logger.debug('initializing read _ADAPTER_NAME_');
        throw Error('implement me');
    }

    read(from, to, limit, state) {
        throw Error('implement me');
    }
}

module.exports = Read_ADAPTER_NAME_;
