import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import './style.css';
import logo from '../../assets/logo.svg';

export default () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {

  }, []);

  const handleMenu = (open) => {
    const menu = document.querySelector('.menu');
    
    if (typeof open === 'undefined') {
      open = !menu.classList.contains("menu-open");
    }

    if (open === true) {
      setMenuOpen(true);
      menu.classList.add("menu-open");
    } else if(open === false) {
      setMenuOpen(false);
      menu.classList.remove("menu-open");
    } 
  }

  return (
    <nav>
      <Link to="/" className="logo"><img src={logo} /></Link>
      <button className="menu-button" onClick={() => handleMenu()}><i class="fas fa-bars"></i></button>
      <ul className="menu">
        <li onClick={() => handleMenu(false)}><Link to="/">HOME</Link></li>
        <li onClick={() => handleMenu(false)}><Link to="/portfolio">PORTFÓLIO</Link></li>
        <li onClick={() => handleMenu(false)}><Link to="/services">SERVIÇOS</Link></li>
        <li onClick={() => handleMenu(false)}><Link to="/about">QUEM SOMOS</Link></li>
        <li onClick={() => handleMenu(false)}><Link to="/contact">CONTATO</Link></li>
      </ul>
      {menuOpen ? (
        <div className="menu-wrapper" on onClick={() => handleMenu(false)}/>
      ) : null}      
    </nav>
  );
}