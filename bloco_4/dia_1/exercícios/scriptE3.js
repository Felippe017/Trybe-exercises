function maiorDe3(numberOne, numberTwo, numberThree) {
  if (numberOne > numberTwo && numberOne > numberThree) {
    console.log(numberOne);
  }
  else if (numberTwo > numberOne && numberTwo > numberThree) {
    console.log(numberTwo);
  }
  else {
    console.log(numberThree);
  }
}


maiorDe3(10, 5, 20);