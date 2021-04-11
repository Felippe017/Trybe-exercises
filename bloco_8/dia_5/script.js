// const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers)); // 800
// console.log(Math.min(...randomNumbers)); // 5



// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['Banana', 'Uva', 'Maçã'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['Leite', 'Açúcar', 'Manga'];

// const fruitSalad = (fruit, additional) => {
//   // Esreva sua função aqui
//   const result = [...fruit, ...additional];
//   return result;
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// function quantosParams(...args) {
//   console.log('parâmetros:', args);
//   return `Você passou ${args.length} parâmetros para a função.`;
// }

// console.log(quantosParams(0, 1, 2, 3, 5, 6)); // Você passou 3 parâmetros para a função.
// console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality } = person;

// console.log(nationality)

 const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

 const person = {
     firstName: 'João',
     lastName: 'Jr II',
 };

 const otherPerson = {
     firstName: 'Ivan',
     lastName: 'Ivanovich',
     nationality: 'Russian',
 };


 console.log(getNationality(otherPerson)); // Ivan is Russian
 console.log(getNationality(person));

// const getPosition = (latitude, longitude) => ({
//     latitude,
//     longitude
// });
  
//   console.log(getPosition(-19.8157, -43.9542));

// const multiply = (number, value = 1) => {
//     // Escreva aqui a sua função
//     return number * value;
//   };
  
//   console.log(multiply(8, 2));