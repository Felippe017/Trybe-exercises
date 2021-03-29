// /* First class functions */

// const product = (productName, price, isOnSale) => ({
//   productName,
//   price: `R$ ${price}`,
//   sale: isOnSale ? 'For sale' : 'Not for sale',
// });

// console.log(product('Computador', 3000, false));
// // { productName: 'Computador', price: 'R$ 3000', sale: 'Not for sale' }

/* HOF */

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(5, console.log);

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(3, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// });

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// const isEven = (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// };

// const isOdd = (number) => {
//   if ((number % 2) > 0) {
//     console.log(number, 'is odd');
//   }
// };

// repeat(3, isEven); // Testa quais números serão pares;
// repeat(3, isOdd); // Testa quais números serão ímpares;

// const greaterThan = (firstNumber) => (secondNumber) => secondNumber > firstNumber;

// const greaterThan10 = greaterThan(10);
// console.log(greaterThan10(15));
// // true

// console.log(greaterThan(10)(15));

const pass1 = () => console.log('Acordando!!');
const pass2 = () => console.log('Bora tomar um café!!');
const pass3 = () => console.log('Partiu dormir!!');

const doingThings = (passo1, passo2, passo3) => {
  if (passo1 === 'WakeUp') {
    return pass1();
  } else if (passo2 === 'Lets have a coffee') {
    return pass2();
  } else if (passo3 === 'Go to sleep') {
    return pass3();
  }
};

doingThings('WakeUp', 'Lets have a coffee', 'Go to sleep');