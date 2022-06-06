const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("Returns [2, 'Three', 4] for ['One', 2, 'Three', 4]", () => {
    const test1 = tail(['One', 2, 'Three', 4]);
    assert.deepEqual(test1, [2, 'Three', 4]);
  })

  it("Orginal array should not be changed.", () => {
    const test2 = ['Yo Yo', 'Lighthouse', 'Labs'];
    tail(test2);
    assert.deepEqual(test2, ['Yo Yo', 'Lighthouse', 'Labs']);
  });
});





