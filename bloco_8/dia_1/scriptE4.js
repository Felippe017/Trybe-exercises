const gabarito = ['D', 'C', 'A', 'D', 'C', 'A', 'B', 'B', 'D', 'C'];
const studentAnswers = ['B', 'C', 'N.A', 'D', 'C', 'B', 'B', 'B', 'D', 'C'];

const repeat = (rightAnswers, studentAnswers, action) => {
  let counter = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    counter += actionReturn;
  }
  return `Resultado final: ${counter} corretas`;
};

console.log(repeat(gabarito, studentAnswers, (rAnswer, uAnswer) => {
  if (rAnswer === uAnswer) {
    return 1;
  } if (uAnswer === 'N.A') {
    return 0;
  }
    return -0.5;
}));