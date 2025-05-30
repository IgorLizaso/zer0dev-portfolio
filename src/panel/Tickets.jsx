import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/panel/Tickets.module.css';

function Tickets() {
  const navigate = useNavigate();

  const tickets = [
    { id: 1, asunto: 'Soporte técnico', estado: 'Abierto', tipo: 'Server' },
    { id: 2, asunto: 'Error en pedido', estado: 'Cerrado', tipo: 'Bot' },
    { id: 3, asunto: 'Seguimiento a cotización', estado: 'En proceso', tipo: 'Otro' }
  ];

  return (
    <div className={styles.ticketsContainer}>
      <button 
        className={styles.backButton} 
        onClick={() => navigate('/panel')}
      >
        ← Volver
      </button>

      <h2 className={styles.title}>Listado de Tickets</h2>

      <ul className={styles.ticketsList}>
        {tickets.map(ticket => (
          <li key={ticket.id} className={styles.ticketItem}>
            <div className={styles.ticketInfo}>
              <div className={styles.badgeGroup}>
                <span className={`${styles.estadoBadge} ${styles[`estado${ticket.estado.replace(/\s/g, '')}`]}`}>
                  {ticket.estado}
                </span>
                <span className={styles.tipoBadge}>
                  {ticket.tipo}
                </span>
              </div>
              <div className={styles.ticketText}>
                <strong>{ticket.asunto}</strong>
              </div>
            </div>
            <button
              className={styles.verButton}
              onClick={() => navigate(`/panel/tickets/${ticket.id}`)}
            >
              Ver
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tickets;
