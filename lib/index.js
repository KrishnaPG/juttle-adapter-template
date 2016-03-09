'use strict';

function _ADAPTER_NAME_Adapter(config) {
    return {
        name: '_ADAPTER_NAME_',
        read: require('./read'),
        write: require('./write'),
        optimizer: require('./optimize')
    };
}

module.exports = _ADAPTER_NAME_Adapter;
