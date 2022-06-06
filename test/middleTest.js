const assert = require('chai').assert;
const middle = require('../middle')

describe('#middle', () => {
  it('Returns [] for []', () => {
    assert.deepEqual(middle([]), []);
  });

  it('Returns [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('Returns [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('Returns [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('Returns [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
})
