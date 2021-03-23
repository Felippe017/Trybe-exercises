

const skills = ['JavaScript', 'CSS', 'HTML', 'Linux', 'DOM'];

function concatenaTudo(parameter) {
  const array = string => `Tryber ${string} aqui!`;

  let result = `${array(parameter)} Minhas principais habilidades são:`
  skills.forEach((skill, index) =>
  result = `${result}

  - ${skill}`)

  result = `
  ${result}

  #goTrybe
  `

  return result
}

console.log(concatenaTudo('Lucas'));