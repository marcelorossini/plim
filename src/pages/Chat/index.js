import React, { useEffect } from "react";
import "./style.css";

import { getSectionAtPosition, fadeIn, fadeOut } from "../../helpers";
import { ContactForm } from "../Contact";

export default () => {
  useEffect(() => {
    // Esconde/Mostra botão
    const showHideButton = () => {
      const atualSection = getSectionAtPosition();
      const button = document.querySelector('.chat > .button');

      if (atualSection !== "contato")
        fadeIn(button);
      else 
        fadeOut(button);
    };

    // OnScroll
    window.addEventListener("scroll", showHideButton, { passive: true });
    return () => window.removeEventListener("scroll", showHideButton);
  }, []);

  // Abre chat
  const handleChat = () => {
    const chat = document.querySelector(".chat > .wrapper");
    chat.classList.toggle("active");
  };

  return (
    <div className="chat">
      <div className="wrapper">
        <ContactForm chat />
      </div>
      <div className="message">Oii, tem alguem ai? asdasd</div>
      <button className="button" onClick={() => handleChat()}>
        <i className="fas fa-comment-alt"></i>
      </button>
    </div>
  );
};
