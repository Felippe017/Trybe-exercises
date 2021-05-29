const randomNumbers = require('./exercises1');

describe('Testando a função de número aleatórios', () => {
  it('Testando se a função foi chamada, qual o seu retorno e quantas vezes foi chamada', () => {
    randomNumbers.numberRandom = jest.fn().mockReturnValue('10');

    randomNumbers.numberRandom();
    expect(randomNumbers.numberRandom).toHaveBeenCalled();
    expect(randomNumbers.numberRandom()).toBe('10');
    expect(randomNumbers.numberRandom).toHaveBeenCalledTimes(2);
  });
});
