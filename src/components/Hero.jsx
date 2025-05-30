import React from 'react';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import '../css/main/Hero.css';
import myPhoto from '../assets/imagen.jpg'; // Pon tu foto aquí

function Hero() {
  return (
    <section className="hero" id="sobre-mi">
      <img src={myPhoto} alt="Foto de Zer0Dev" className="hero-photo" />
      <div className="hero-text">
        <h1>Zer0Dev - Portafolio</h1>
        <p>
          Hola, soy Zer0Dev, desarrollador enfocado en automatizaciones, bots personalizados y soluciones para servidores.
          Me apasiona crear herramientas eficientes que optimicen procesos digitales y mejoren la experiencia del usuario.
          Aquí podrás ver mis habilidades, proyectos y cómo puedo ayudarte a construir lo que necesitas.
        </p>
        <div className="hero-buttons">
          <a
            href="https://discord.com/users/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="btn discord-btn"
            aria-label="Discord"
          >
            <FaDiscord size={20} />
            Discord
          </a>
          <a
            href="https://github.com/Zer0Dev-exe"
            target="_blank"
            rel="noopener noreferrer"
            className="btn github-btn"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
