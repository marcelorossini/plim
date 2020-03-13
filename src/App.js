import React, { useEffect, useState } from 'react';
import './App.css';

import Nav from './components/Nav';

import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

export default () => {
  // Ultima posição
  const [lastScollPos, setLastScollPos] = useState(0);
  useEffect(() => {
    // Esconde ou mostra o menu no Scroll    
    const hideMenuOnScroll = () => {
      const menu = document.querySelector(".menu");
      const home = document.querySelector("#home");
      let homePositionTop = home.getBoundingClientRect().top;

      let scrollToTop = homePositionTop > lastScollPos;

      if (scrollToTop) {
        menu.classList.remove("fadeOut");
        menu.classList.add("fadeIn");
      } else {
        if (homePositionTop < -80) {
          menu.classList.remove("fadeIn");
          menu.classList.add("fadeOut");
        } else {
          menu.classList.remove("fadeOut");
          menu.classList.add("fadeIn");
        }
      }
      setLastScollPos(homePositionTop);
    }
    // Scroll
    window.addEventListener('scroll',hideMenuOnScroll,{passive: true});
    return () => window.removeEventListener('scroll', hideMenuOnScroll);
  }, [lastScollPos]);

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
