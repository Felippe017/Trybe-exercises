const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const turno = (obj, key, value) => {
  Object.assign(lesson2, obj[key] = value);
  return lesson2;
}

// console.log(lesson2, 'turno', 'noite');

const listObj = obj => {
 return Object.keys(obj);
}

// console.log(listObj(lesson1));

const sizeObj = obj => {
  return Object.values(obj).length;
}

// console.log(sizeObj(lesson1));

const valuesObj = obj => Object.values(obj);

// console.log(valuesObj(lesson2));

const allLessons = {};

Object.assign(allLessons, {lesson1, lesson2, lesson3});

// console.log(allLessons);

const totalStudents = obj => {
  const le1 = lesson1.numeroEstudantes;
  const le2 = lesson2.numeroEstudantes;
  const le3 = lesson3.numeroEstudantes;
  return le1 + le2 + le3;
}

// console.log(totalStudents(allLessons));

// const getNumberOfStudents = (obj) => {
//   let total = 0;
//   const array = Object.keys(obj);
//   for (index in array) {
//     total += obj[array[index]].numeroEstudantes;
//   }
//   return total;
// };
// console.log(getNumberOfStudents(allLessons));

const positionNumber = (obj, number) => Object.values(obj)[number];

// console.log(positionNumber(lesson3, 0));

const verifyEntries = (obj, key, value) => {
  const object = Object.entries(obj);
  let verify = false;
  for (let index in object) {
    if (object[index][0] === key && object[index][1] === value) verify = true;
  }
  return verify;
};
console.log(verifyEntries(lesson2,'professor','Carlos'));