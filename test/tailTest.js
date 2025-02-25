const assert = require('chai').assert;
const _ = require('../index');
const tail = _.tail;

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

  it("make sure the original array was not altered by the tail function", () => {
    const words = ["hello", "world", "lighthouse"];
    const result = tail(words);
    assert.deepEqual(result, ["world", "lighthouse"]);
    assert.strictEqual(words.length, 3);
  });
});
