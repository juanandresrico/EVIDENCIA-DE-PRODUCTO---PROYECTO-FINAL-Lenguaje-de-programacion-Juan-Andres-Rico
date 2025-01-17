import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/pokemon')
      .then(response => setPokemons(response.data))
      .catch(error => console.error('Error fetching Pokémon:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Pokémon</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
