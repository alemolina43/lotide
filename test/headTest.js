const assert = require('chai').assert;
const _ = require('../index');
const head = _.head;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });

  it("returns 4 for [4, 5, 7, 8, 9]", () => {
    assert.strictEqual(head([4, 5, 7, 8, 9]), 4);
  });

  it("returns 2 for [2]", () => {
    assert.strictEqual(head([2]), 2);
  });

  it("returns undefined for []]", () => {
    assert.strictEqual(head([]), undefined);
  });
});

