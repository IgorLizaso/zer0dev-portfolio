import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../css/panel/TicketDetalle.module.css';

const mockChats = {
  1: [
    { id: 1, sender: 'cliente', text: 'Hola, tengo un problema con mi servidor.' },
    { id: 2, sender: 'soporte', text: 'Hola, ¿en qué puedo ayudarte?' },
    { id: 3, sender: 'cliente', text: 'No puedo acceder desde ayer.' },
  ],
  2: [
    { id: 1, sender: 'cliente', text: 'Mi pedido llegó con error.' },
    { id: 2, sender: 'soporte', text: 'Lo siento mucho, vamos a resolverlo.' },
  ],
  3: [
    { id: 1, sender: 'cliente', text: '¿Me pueden ayudar con la cotización?' },
    { id: 2, sender: 'soporte', text: 'Claro, revisaremos y te responderemos pronto.' },
  ],
};

function TicketDetalle() {
  const { ticket_id } = useParams();
  const navigate = useNavigate();

  // Estado para el mensaje que está escribiendo el usuario
  const [newMessage, setNewMessage] = useState('');

  // Aquí simulamos obtener el chat según el id
  const [chat, setChat] = useState([]);

  useEffect(() => {
    setChat(mockChats[ticket_id] || []);
  }, [ticket_id]);

  // Función para enviar un mensaje
  const handleSend = () => {
    if (newMessage.trim() === '') return;

    const newMsgObj = {
      id: chat.length + 1,
      sender: 'cliente',
      text: newMessage.trim(),
    };

    setChat([...chat, newMsgObj]);
    setNewMessage('');
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate('/panel/tickets')}>
        ← Volver a Tickets
      </button>
      <h2 className={styles.title}>Ticket #{ticket_id} - Chat</h2>

      <div className={styles.chatBox}>
        {chat.length === 0 && <p className={styles.emptyChat}>No hay mensajes aún.</p>}
        {chat.map(({ id, sender, text }) => (
          <div
            key={id}
            className={`${styles.message} ${
              sender === 'cliente' ? styles.messageCliente : styles.messageSoporte
            }`}
          >
            {text}
          </div>
        ))}
      </div>

      <div className={styles.inputArea}>
        <input
          type="text"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          placeholder="Escribe tu mensaje..."
          className={styles.input}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} className={styles.sendButton}>
          Enviar
        </button>
      </div>
    </div>
  );
}

export default TicketDetalle;
