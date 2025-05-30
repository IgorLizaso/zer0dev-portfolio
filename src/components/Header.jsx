import React from 'react';
import '../css/main/Header.css';

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
        <a href="/panel/login" className="panel-button">Panel</a>
      </nav>
    </header>
  );
}

export default Header;
