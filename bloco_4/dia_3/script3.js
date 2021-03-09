let n = 5;
let asteristico = "*";
let espaco = '';

for (let espacoIndex = 0; espacoIndex < n; espacoIndex -= 1) {
  espaco = espaco + asteristico;
}

for (let lineindex = 0; lineindex < n; lineindex +=1 ) {
  console.log(espaco);
}
