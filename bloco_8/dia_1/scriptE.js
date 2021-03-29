const person = (name) => {
  const email = name.toLowerCase().split(' ').join('_');
  return name, `${email}@trybe.com`;
};

const newEmployees = (person) => {
  const employees = {
    id1: person('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: person('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: person('Carla Paiva')// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.log(newEmployees(person));