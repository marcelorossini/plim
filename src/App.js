import React from 'react';
import './App.css';

import Nav from './components/Nav';

import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

export default () => {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}
