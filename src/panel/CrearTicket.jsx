import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/panel/CrearTicket.module.css';

function CreateTicket() {
  const [requestType, setRequestType] = useState('');
  const [offer, setOffer] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ requestType, offer, description });
    alert('Ticket creado correctamente!');
    navigate('/panel/tickets');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Crear Nuevo Ticket</h1>
      <form className={styles.form} onSubmit={handleSubmit}>

        <label className={styles.label}>
          ¿Qué deseas pedir?
          <select
            value={requestType}
            onChange={(e) => setRequestType(e.target.value)}
            className={styles.select}
            required
          >
            <option value="" disabled>Selecciona una opción</option>
            <option value="bot-discord">Bot Discord</option>
            <option value="servidor-discord">Servidor Discord</option>
            <option value="otro">Otro</option>
          </select>
        </label>

        <label className={styles.label}>
          Oferta (€):
          <input
            type="number"
            value={offer}
            onChange={(e) => setOffer(e.target.value)}
            className={styles.input}
            placeholder="Ejemplo: 50"
            min="0"
            required
          />
        </label>

        <label className={styles.label}>
          📝 Descripción del proyecto:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.textarea}
            placeholder="Describe tu proyecto aquí"
            required
          />
        </label>

        <button type="submit" className={styles.button}>
          Crear Ticket
        </button>
      </form>

      <button
        className={styles.cancelButton}
        onClick={() => navigate('/panel')}
      >
        Cancelar
      </button>
    </div>
  );
}

export default CreateTicket;
