import React, { useState, useEffect } from 'react';
import './style.css';

import logo from '../../assets/logo.svg';

export default () => {
    // Abre/Fecha menu
    const toggleButtonMenu = (bOpenClose = null) => {
        const menu = document.querySelector(".menu");

        if (bOpenClose != null) {
            if (bOpenClose === true) {
                menu.classList.add('menu-open');
            } else {
                menu.classList.remove('menu-open');
            }
        } else {
            menu.classList.toggle('menu-open');
        }
    }

    // Ultima posição
    const [lastScollPos, setLastScollPos] = useState(0);
    // Use effect
    useEffect(() => {
        // Esconde/mostra 
        const showHideNav = () => {
            // Variáveis auxiliares
            const menu = document.querySelector(".menu");
            const home = document.querySelector("#home");
            let homePositionTop = home.getBoundingClientRect().top;

            // Se está indo para cima
            let scrollToTop = homePositionTop > lastScollPos;

            // Para cima
            if (scrollToTop) {
                // Verifica a section atual
                let section = window.location.hash;
                let sectionPositionTop = null;
                // Verifica se está preenchida
                if (section.length > 0) {
                    section = document.querySelector(window.location.hash);
                    sectionPositionTop = section.getBoundingClientRect().top;
                }
                // Se não for a home e estiver em outra section
                if (homePositionTop !== 0 && sectionPositionTop === 0) {
                    menu.classList.remove("fadeIn");
                    menu.classList.add("fadeOut");
                } else {
                    menu.classList.remove("fadeOut");
                    menu.classList.add("fadeIn");
                }
                // Para Baixo
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
        // Esconde/Mostra o menu no Scroll
        window.addEventListener('scroll', showHideNav, { passive: true });
        return () => window.removeEventListener('scroll', showHideNav);
    }, [lastScollPos]);

    return (
        <nav className="menu">
            <a href="#home" className="menu-logo" onClick={() => toggleButtonMenu(false)}><img src={logo} alt=""/></a>
            <button className="menu-button" onClick={() => toggleButtonMenu()}><i className="fas fa-bars"></i></button>
            <ul className="menu-items">
                <li><a href="#home" onClick={() => toggleButtonMenu(false)}>HOME</a></li>
                <li><a href="#servicos" onClick={() => toggleButtonMenu(false)}>SERVIÇOS</a></li>
                <li><a href="#portfolio" onClick={() => toggleButtonMenu(false)}>PORTFÓLIO</a></li>
                <li><a href="#sobre" onClick={() => toggleButtonMenu(false)}>QUEM SOMOS</a></li>
                <li><a href="#depoimentos" onClick={() => toggleButtonMenu(false)}>DEPOIMENTOS</a></li>
                <li><a href="#contato" onClick={() => toggleButtonMenu(false)}>CONTATO</a></li>
            </ul>
        </nav>
    )
}