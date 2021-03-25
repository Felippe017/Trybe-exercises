const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (arr) => {
  const result = [];
  for (let index = 0; index < arr.length; index += 1) {
    result.push(arr[index].length);
  }
  return result;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);