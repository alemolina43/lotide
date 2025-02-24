const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns ['Yo', 'Lighthouse', 'Labs'] for ['Yo', 'Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo', 'Yo', 'Lighthouse', 'Labs']), ['Yo', 'Lighthouse', 'Labs']);
  });

  it("returns empty for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns empty for [9]", () => {
    assert.deepEqual(tail([9]), []);
  });

});
