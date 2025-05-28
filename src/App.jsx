import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="app">
        <Hero />
        <Content />
      </main>
      <Footer />
    </>
  );
}

export default App;
