const axios = require('axios');

const getPokemonList = async (req, res) => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching Pokémon list' });
  }
};

const getPokemonDetails = async (req, res) => {
  const { name } = req.params;
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching Pokémon details' });
  }
};

module.exports = { getPokemonList, getPokemonDetails };
