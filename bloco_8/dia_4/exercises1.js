
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const newArr = [];
  return arrays.reduce((accumulator, current) => accumulator.concat(current), newArr);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);