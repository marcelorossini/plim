import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import './style.css';
import logo from '../../assets/logo.svg';

export default () => {
  useEffect(() => {
  
  }, []);

  const hideShowMenu = () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle("close");
  }

  const handleClick = () => {
    hideShowMenu();
  }

  return (
    <nav>
      <img className="logo" src={logo} />
      <button className="menu-button" onClick={handleClick}><i class="fas fa-bars"></i></button>
      <ul className="menu close">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/portfolio">PORTFÓLIO</Link></li>
        <li><Link to="/services">SERVIÇOS</Link></li>
        <li><Link to="/contact">CONTATO</Link></li>
      </ul>
    </nav>
  );
}
