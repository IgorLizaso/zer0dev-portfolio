import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/panel/AdminTickets.module.css';

function AdminTickets() {
  const navigate = useNavigate();

  const tickets = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    asunto: `Ticket #${i + 1} - ${['Soporte', 'Error en pedido', 'Consulta'][i % 3]}`,
    estado: ['Abierto', 'Cerrado', 'En proceso'][i % 3],
    tipo: ['Bot', 'Server', 'Otro'][i % 3]
  }));

  const getEstadoClass = (estado) => {
    switch (estado.toLowerCase()) {
      case 'abierto': return styles.estadoAbierto;
      case 'cerrado': return styles.estadoCerrado;
      case 'en proceso': return styles.estadoEnProceso;
      default: return '';
    }
  };

  const getTipoEmoji = (tipo) => {
    switch (tipo.toLowerCase()) {
      case 'bot': return '🤖';
      case 'server': return '🌐';
      default: return '❓';
    }
  };

  return (
    <div className={styles.ticketsContainer}>
      <div className={styles.topBar}>
        <h2 className={styles.title}>Tickets Administrador</h2>
        <button className={styles.exitButton} onClick={() => navigate('/panel/login')}>
          Salir
        </button>
      </div>

      <ul className={styles.ticketsList}>
        {tickets.map(ticket => (
          <li key={ticket.id} className={styles.ticketItem}>
            <div className={styles.info}>
              <div className={styles.badges}>
                <span className={`${styles.estado} ${getEstadoClass(ticket.estado)}`}>
                  {ticket.estado}
                </span>
                <span className={styles.tipo}>
                  {getTipoEmoji(ticket.tipo)} {ticket.tipo}
                </span>
              </div>
              <div className={styles.asunto}>{ticket.asunto}</div>
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

export default AdminTickets;
