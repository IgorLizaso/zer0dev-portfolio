import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';
import Panel from './panel/Panel';
import Tickets from './panel/Tickets';
import Login from './panel/Login';
import Registro from './panel/Register';
import CrearTicket from './panel/CrearTicket';
import TicketDetalle from './panel/TicketDetalle'
import AdminTickets from './panel/AdminTickets'

function Layout() {
  const location = useLocation();

  // Define rutas donde quieres layout "simple" sin Header/Footer
  const isPanelRoute = location.pathname.startsWith('/panel');

  return (
    <>
      {!isPanelRoute && <Header />}
      <main className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Content />
            </>
          } />
          <Route path="/panel/login" element={<Login />} />
          <Route path="/panel/registro" element={<Registro />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/panel/tickets" element={<Tickets />} />
          <Route path="/panel/tickets/nuevo" element={<CrearTicket />} />
          <Route path="/panel/tickets/:ticket_id" element={<TicketDetalle />} />
          <Route path="/panel/admin/tickets" element={<AdminTickets />} />
        </Routes>
      </main>
      {!isPanelRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
