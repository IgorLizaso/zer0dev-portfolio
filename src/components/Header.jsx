import React from 'react';
import '../css/Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#trabajos">Trabajos hechos</a></li>
          <li><a href="#custom">Custom Orders</a></li>
          <li><a href="#crear-pedido">Crear Pedido</a></li>
          <li><a href="#soporte">Soporte</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
