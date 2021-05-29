const uppercase = require('./exercises1');

test('Testando chamada da callback', done => {
  uppercase('banana', (callback) => {
    expect(callback).toBe('BANANA');
    done();
  });
}); 
