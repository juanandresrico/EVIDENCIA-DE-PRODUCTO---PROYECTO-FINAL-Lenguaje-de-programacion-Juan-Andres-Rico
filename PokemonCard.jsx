import React, { useState } from 'react';
import axios from 'axios';

function PokemonCard({ name }) {
  const [details, setDetails] = useState(null);

  const fetchDetails = () => {
    axios.get(`http://localhost:5000/api/pokemon/${name}`)
      .then(response => setDetails(response.data))
      .catch(error => console.error('Error fetching details:', error));
  };

  return (
    <div style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
      <h3>{name}</h3>
      <button onClick={fetchDetails}>Ver detalles</button>
      {details && (
        <div>
          <img src={details.sprites.front_default} alt={name} />
          <p>Peso: {details.weight}</p>
          <p>Altura: {details.height}</p>
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
