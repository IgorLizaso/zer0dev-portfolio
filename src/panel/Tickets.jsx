import React from 'react';

function Tickets() {
  // En el futuro puedes usar fetch o axios para traer los tickets desde un backend
  const tickets = [
    { id: 1, asunto: 'Soporte técnico', estado: 'Abierto' },
    { id: 2, asunto: 'Error en pedido', estado: 'Cerrado' }
  ];

  return (
    <div>
      <h2>Listado de Tickets</h2>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            #{ticket.id} - {ticket.asunto} ({ticket.estado})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tickets;
