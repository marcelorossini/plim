import React, { useState, useEffect } from "react";
import "./style.css";

import { getSectionAtPosition, fadeIn, fadeOut } from "../../helpers";
import { ContactForm } from "../Contact";

export default () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    // Esconde/Mostra botão
    const showHideChat = () => {
      // Variáveis auxiliares
      const atualSection = getSectionAtPosition();
      const chat = document.querySelector(".chat");

      // Se estiver na pagina de contato, esconde
      if (atualSection !== "contato") fadeIn(chat);
      else fadeOut(chat);
    };

    // OnScroll
    window.addEventListener("scroll", showHideChat, { passive: true });
    return () => window.removeEventListener("scroll", showHideChat);
  }, []);

  // Abre chat
  const handleChat = (openClose = null) => {
    // Define estado do chat
    setChatOpen(openClose !== null ? openClose : !chatOpen);
    // Exibe o titulo
    setShowTitle(true);
  };

  // Ao finalizar o envio
  const handleSended = () => {
    // Esconde o titulo
    setShowTitle(false);
    // Aguarda 3 segundo e esconde
    setTimeout(() => {
      handleChat(false);
    }, 3000);
  };

  return (
    <div className="chat">
      <div className={`wrapper ${chatOpen ? 'active' : ''}`}>
        {showTitle ? (
          <div className="title">
            <strong>E aí, pronto para mudar a cara do seu negócio?</strong>
            <button onClick={() => handleChat(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        ) : null}
        <ContactForm chat handleSended={handleSended} />
      </div>
      <div className="message">Oii, tem alguem ai? asdasd</div>
      <button className="button" onClick={() => handleChat()}>
        <i className="fas fa-comment-alt"></i>
      </button>
    </div>
  );
};
