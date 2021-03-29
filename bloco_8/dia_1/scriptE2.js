const verificaNumber = (userNumber, number)  => number === userNumber;

const lucky = (userNumber, verificaNumber) => {
  const number = Math.floor(Math.random() * (6-1) + 1);
  return verificaNumber(userNumber, number) ? "Parabéns você ganhou" : "Tente novamente";
};

console.log(lucky(2, verificaNumber));