const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

module.exports = uppercase;

/* Dava pra ser feito em um arquivo*/

// const uppercase = (str, callback) => {
//   callback(str.toUpperCase());
// }

// it(`uppercase 'test' to equal 'TEST'`, (done) => {
//   uppercase('test', (str) => {
//     expect(str).toBe('TEST');
//     done();
//   });
// });