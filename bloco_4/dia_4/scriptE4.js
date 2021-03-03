function menorValorArray(arr) {
  let min = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] < min) {
      min = index;
    }
  }
  console.log(min);
}


menorValorArray([2, 4, 6, 7, 10, 5]);