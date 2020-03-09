import React from 'react';
import './style.css';

import logo from '../../assets/logo.svg';

export default () => {

    const toggleMenu = (bOpenClose = null) => {
        const menu = document.querySelector(".menu");

        if (bOpenClose != null) {
            if (bOpenClose == true) {
                menu.classList.add('menu-open');
            } else {
                menu.classList.remove('menu-open');
            }
        } else {
            menu.classList.toggle('menu-open');
        }                
    }

    return (
        <nav className="menu">
            <a href="#home" className="menu-logo" onClick={() => toggleMenu(false)}><img src={logo} /></a>
            <button className="menu-button" onClick={() => toggleMenu()}><i className="fas fa-bars"></i></button>
            <ul className="menu-items">
                <li><a href="#home" onClick={() => toggleMenu(false)}>HOME</a></li>
                <li><a href="#services" onClick={() => toggleMenu(false)}>SERVIÇOS</a></li>
                <li><a href="#portfolio" onClick={() => toggleMenu(false)}>PORTFÓLIO</a></li>
                <li><a href="#about" onClick={() => toggleMenu(false)}>QUEM SOMOS</a></li>
                <li><a href="#contact" onClick={() => toggleMenu(false)}>CONTATO</a></li>
            </ul>
        </nav>
    )
}