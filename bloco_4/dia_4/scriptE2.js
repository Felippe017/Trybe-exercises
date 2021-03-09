function palindromo(str) {
  let verificaPali;
  for(var i = 0; i < str.length / 2; i++) if (str[i] != str[str.length - i - 1]) verificaPali = false;
    verificaPali =  true;
  console.log(verificaPali);
}

palindromo("desenvolvimento");













for(var i = 0; i < str.length / 2; i++) if (str[i] != str[str.length - i - 1]) return false;
    return true;
}



for(let index = 0; index < str.length/2; index += 1){
  if (str[index] != str[str.length - index - 1]) {
    verificaPali = false;
  } else {
    verificaPali = true;
  }
}
console.log(verificaPali);
}
