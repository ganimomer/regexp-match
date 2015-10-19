const assert = require('assert');
const regexpMatch = require('./index.js');

const validMatch = '123'.match(/1/);

assert(regexpMatch);
assert.deepEqual(regexpMatch('123', /1/), validMatch);
assert.deepEqual(regexpMatch('123', /4/), []);
assert.deepEqual(regexpMatch(null, /u/), []);
assert.deepEqual(regexpMatch('123', null), []);

assert.deepEqual(regexpMatch(123, /1/), validMatch);
assert.deepEqual(regexpMatch(0, /0/), '0'.match(/0/));
assert.deepEqual(regexpMatch(false, 'al'), 'false'.match('al'));
assert.deepEqual(regexpMatch('123', 1), validMatch);
assert.deepEqual(regexpMatch('123'), '123'.match());
