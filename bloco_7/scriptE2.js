// const fatorial = number => {
//   let fat = 1;
//   for (let index = 1; index <= number; index += 1) {
//     fat *= index;
//   }
//   return fat;
// };

// console.log(fatorial(3));

const biggerWord = word => {
  let arrayText = word.split(' ');
  let result = '';
  let maxWord = 0;
  
  for (const text of arrayText) {
    if (text.length > maxWord) {
      maxWord = text.length;
      result = text;
    }
  }
  return result;
};

console.log(biggerWord('Tensa Zangetsu!'));