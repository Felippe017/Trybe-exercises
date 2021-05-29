const assert = require('assert');
// escreva a função sumAllNumbers aqui
const sumAllNumbers = (arr) => {
  let result = 0;
  for (let index = 0; index < arr.length; index += 1) {
    result += arr[index];
  }
  return result;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

// console.log(sumAllNumbers(numbers));