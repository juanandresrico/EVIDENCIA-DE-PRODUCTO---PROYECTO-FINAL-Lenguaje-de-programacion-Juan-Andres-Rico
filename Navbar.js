import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/about">Somos</Link>
      <Link to="/pokemon">Personajes Pokémon</Link>
    </nav>
  );
}

export default Navbar;
