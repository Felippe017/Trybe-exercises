function maiorValorArray(arr) {
  let max = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > max) {
      max = arr[index];
    }
  }
  console.log(max);
}

maiorValorArray([2, 3, 6, 7, 10, 1]);