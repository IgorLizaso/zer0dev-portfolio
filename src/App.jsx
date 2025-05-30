import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';
import Panel from './panel/Panel';
import Tickets from './panel/Tickets';

function App() {
  return (
    <Router>
      <Header />
      <main className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Content />
            </>
          } />
          <Route path="/panel" element={<Panel />} />
          <Route path="/panel/tickets" element={<Tickets />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
