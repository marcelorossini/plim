import React, { useState, useEffect } from "react";
import "./style.css";
import logo from "../../assets/logo.svg";
import { fadeIn, fadeOut } from "../../helpers";

export default () => {
  // Abre/Fecha menu
  const toggleButtonMenu = (bOpenClose = null) => {
    const menu = document.querySelector(".menu");

    if (bOpenClose != null) {
      if (bOpenClose === true) {
        menu.classList.add("menuOpen");
      } else {
        menu.classList.remove("menuOpen");
      }
    } else {
      menu.classList.toggle("menuOpen");
    }
  };

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
        if (
          homePositionTop !== 0 &&
          sectionPositionTop > -5 &&
          sectionPositionTop < 5
        ) {
          fadeOut(menu);
        } else {
          fadeIn(menu);
        }
        // Para Baixo
      } else {
        if (homePositionTop < -80) {
          fadeOut(menu);
        } else {
          fadeIn(menu);
        }
      }
      setLastScollPos(homePositionTop);
      toggleButtonMenu(false)
    };
    // Esconde/Mostra o menu no Scroll
    window.addEventListener("scroll", showHideNav, { passive: true });
    return () => window.removeEventListener("scroll", showHideNav);
  }, [lastScollPos]);

  return (
    <nav className="menu">
      <a
        href="#home"
        className="menuLogo"
        onClick={() => toggleButtonMenu(false)}
      >
        <img src={logo} alt="" />
      </a>
      <button className="menuButton" onClick={() => toggleButtonMenu()}>
        <i className="fas fa-bars"></i>
      </button>
      <ul className="menuItems">
        <li>
          <a href="#home" onClick={() => toggleButtonMenu(false)}>
            HOME
          </a>
        </li>
        <li>
          <a href="#servicos" onClick={() => toggleButtonMenu(false)}>
            SERVIÇOS
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/aryanetoffetti" target="_blank">
            PORTFÓLIO
          </a>
        </li>
        <li>
          <a href="#sobre" onClick={() => toggleButtonMenu(false)}>
            SOBRE
          </a>
        </li>
        <li>
          <a href="#depoimentos" onClick={() => toggleButtonMenu(false)}>
            DEPOIMENTOS
          </a>
        </li>
        <li>
          <a href="#contato" onClick={() => toggleButtonMenu(false)}>
            CONTATO
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/designplim/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/soluplim/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=5514991814270&text=Ol%C3%A1%2C%20estou%20pronto%20para%20mudar%20a%20cara%20do%20meu%20neg%C3%B3cio!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};
