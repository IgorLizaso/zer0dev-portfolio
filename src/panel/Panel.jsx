import React from 'react';
import { Link } from 'react-router-dom';

function Panel() {
  return (
    <div>
      <h1>Panel de Administración</h1>
      <p>Bienvenido al panel. Aquí puedes gestionar tickets, usuarios, etc.</p>
      <Link to="/panel/tickets">Ver todos los tickets</Link>
    </div>
  );
}

export default Panel;
