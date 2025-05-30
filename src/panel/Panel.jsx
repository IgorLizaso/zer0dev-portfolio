import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/panel/Panel.module.css';

function Panel() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido al Panel</h1>
      <p className={styles.description}>Aquí puedes gestionar tus pedidos, tickets o usuarios.</p>

      <div className={styles.actions}>
        <button className={styles.button} onClick={() => navigate('/panel/tickets/nuevo')}>
          Crear Ticket
        </button>
        <button className={styles.buttonOutline} onClick={() => navigate('/panel/tickets')}>
          Ver Tickets
        </button>
      </div>

      <a href="/panel/login" className={styles.link}>Cerrar sesión</a>
    </div>
  );
}

export default Panel;
