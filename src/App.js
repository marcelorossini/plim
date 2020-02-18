import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

export default () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio/" component={Portfolio} />
          <Route path="/services/" component={Services} />
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
