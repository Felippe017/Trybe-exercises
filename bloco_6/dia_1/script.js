let allStates = document.getElementById('states');
let array = ['Amazônia', 'Amapá', 'Minas Gerais', 'Rio de Janeiro', 'São Paulo', 'Rio Grande do Sul', 'Mato Grosso', 
'Mato Grosso do Sul', 'Bahia', 'Pernambuco', 'Paraná', 'Santa Catarina', 'Espírito Santo', 'Goiás', 'Alagoas', 
'Roraima', 'Rondônia', 'Pará', 'Acre', 'Maranhão', 'Distrito Federal', 'Tocantins', 'Ceará', 'Piauí', 'Rio Grande do Norte', 'Sergipe', 'Paraíba'];

function createOptions() {
  for (let index = 0; index < array.length; index += 1) {
    const listStates = array[index];
    const state = document.createElement('option');
    state.innerHTML = listStates;
    allStates.appendChild(state);
  }
}

createOptions();