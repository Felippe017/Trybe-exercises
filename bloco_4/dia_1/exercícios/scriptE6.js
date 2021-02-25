const pecasXadrez = ["peão", "torre", "cavalo", "bispo", "rei", "rainha"];

let resultado = pecasXadrez[3];

if (resultado == pecasXadrez[0]) {
  console.log("Frente");
}
else if (resultado == pecasXadrez[1]) {
  console.log("Frente e lados");
}
else if (resultado == pecasXadrez[2]) {
  console.log("Em l");
}
else if (resultado == pecasXadrez[3]) {
  console.log("Diagonais");
}
else if (resultado == pecasXadrez[4]) {
  console.log("Qualquer direção");
}
else {
  console.log("Qualquer direção");
}
