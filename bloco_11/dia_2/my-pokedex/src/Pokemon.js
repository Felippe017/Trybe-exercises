import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image} = this.props.pokemon;
    return(
      <section>
        <h3>{ name }</h3>
        <p>{ type }</p>
        <p>{ `Average Weight: ${averageWeight.value}${averageWeight.measurementUnit}` }</p> 
        <img src={ image } alt={ name }/>
      </section>
    )
 }
}

export default Pokemon;