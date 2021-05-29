import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';
function App() {
  return (
    <main>
       <h1>POKEDEX</h1>
       <Pokedex pokemons={ pokemons }/>
    </main>
  );
}

export default App;
