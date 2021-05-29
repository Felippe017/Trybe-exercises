const gabarito = 'higher order function';
const user_answer = 'HIGHER ORDER FUNCTION';

const checkAnswer2 = (correctAnswer) => (userAnswer) => correctAnswer === userAnswer.toLowerCase();

console.log(checkAnswer2(gabarito)(user_answer));