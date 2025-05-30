import React from 'react';
import { FaYoutube, FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';
import '../css/main/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://youtube.com/tu_usuario" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube />
        </a>
        <a href="https://twitter.com/tu_usuario" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://discord.com/users/tu_usuario" target="_blank" rel="noopener noreferrer" aria-label="Discord">
          <FaDiscord />
        </a>
        <a href="https://github.com/tu_usuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      </div>
      <p>&copy; 2025 Zer0Dev - Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
