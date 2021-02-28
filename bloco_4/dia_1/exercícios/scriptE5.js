function sumOfTriangule(anguloOne, anguloTwo, anguloThree) {
  const somaDosAngulos = anguloOne + anguloTwo + anguloThree;
  if (somaDosAngulos == 180) {
    console.log("true");
  }
  else {
    console.log("false");
  }
}


sumOfTriangule(60, 80, 40);