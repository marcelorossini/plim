import React from 'react';
import './App.css';

import Nav from './components/Nav';

import Maintence from './pages/Maintence';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import CustomerTestimonial from './pages/CustomerTestimonial';
import Contact from './pages/Contact';
import Chat from './pages/Chat';

export default () => {
  if (process.env.REACT_APP_MAINTENCE === "true" || false) {
    return (
      <Maintence />
    )
  } else {
    return (
      <div className="App">
        <Nav />
        <Home />
        <Services />
        <Portfolio />
        <About />
        <CustomerTestimonial />
        <Contact />
        <Chat />
      </div>
    );
  }
}
