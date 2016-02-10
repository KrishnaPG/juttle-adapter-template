'use strict';

let optimizer = {
    optimize_head: function(read, head, graph, optimization_info) {
        // implement or remove the function if you're not implementing any optimizations
        throw Error('implement me');
    },
    optimize_tail: function(read, tail, graph, optimization_info) {
        // implement or remove the function if you're not implementing any optimizations
        throw Error('implement me');
    },
    optimize_reduce: function(read, reduce, graph, optimization_info) {
        // implement or remove the function if you're not implementing any optimizations
        throw Error('implement me');
    }
};

module.exports = optimizer;
