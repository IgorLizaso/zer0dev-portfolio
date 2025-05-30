import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/panel/Login.module.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const ADMIN_EMAIL = import.meta.env.VITE_EMAIL_ADMIN;
    const ADMIN_PASSWORD = import.meta.env.VITE_EMAIL_PASSWORD;

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      navigate('/panel/admin/tickets');
    } else {
      navigate('/panel');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Iniciar Sesión</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Correo electrónico"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={styles.button}>Entrar</button>
      </form>
      <a href="/panel/registro" className={styles.link}>¿No tienes cuenta? Regístrate</a>

      {/* Botón para volver al portafolio */}
      <button
        className={styles.backToPortfolio}
        onClick={() => navigate('/')}
      >
        Volver al Portafolio
      </button>
    </div>
  );
}

export default Login;
