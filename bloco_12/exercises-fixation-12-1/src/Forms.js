import React from 'react';

class Forms extends React.Component {
  constructor() {
    super()
    
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      lembranca: '',
    }
  }

  handleChange(event) {
    this.setState({lembranca: event.target.value})
    console.log(this.state.lembranca)
  }

  render() {
    return(
      <div>
        <h1>Exercício só pra fixar</h1>
        <form>
          <input type='text' name='time'/>
          <input type='number' name='títulos'/>
          <select>
            <option value='RJ'>Rio de Janeiro</option>
            <option value='RS'>Rio Grande do Sul</option>
            <option value='MG'>Minas Gerais</option>
            <option value='SP'>São Paulo</option>
          </select>
          <label>
            Escreva aqui o gol mais marcante 
            <textarea name='lembranca' value={this.state.lembranca} onChange={this.handleChange} />
          </label>
        </form>
      </div>
    )
  }
}

export default Forms;