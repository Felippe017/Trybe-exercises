let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]); 
}



let soma = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9];
console.log(soma);




let mediaAritimetica = (numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9]) / 10;
console.log(mediaAritimetica);

if (mediaAritimetica > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}




let maior = 0;
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > maior) {
    maior = numbers[index];
  }
}

console.log(maior);




let impares = 0;

for (let index = 0; index < numbers.length; index++) {
  if(numbers[index]%2 !== 0) {
    impares += 1;
  }
}

if (impares > 1) {
  console.log(impares);
} else {
  console.log("Nenhum valor encontrado");
}




let menor = 110;
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] < menor) {
    menor = numbers[index];
  }
}
console.log(menor);





let contagem = [];
for (let i = 1; i < 26; i++) {
  contagem.push(i);
}

console.log(contagem);



for (let i = 0; i < contagem.length; i++) {
  console.log(contagem[i] / 2);
}


