var p = require('promise-each-concurrency');

p([1,2,3], function() {
    return Promise.resolve(1);
});
