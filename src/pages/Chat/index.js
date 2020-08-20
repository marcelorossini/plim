import React, { useState, useEffect } from "react";
import "./style.css";

import { getSectionAtPosition, fadeIn, fadeOut } from "../../helpers";
import { ContactForm } from "../Contact";

export default () => {
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    // Esconde/Mostra botão
    const showHideButton = () => {
      const atualSection = getSectionAtPosition();
      const button = document.querySelector(".chat > .button");

      if (atualSection !== "contato") fadeIn(button);
      else fadeOut(button);
    };

    // OnScroll
    window.addEventListener("scroll", showHideButton, { passive: true });
    return () => window.removeEventListener("scroll", showHideButton);
  }, []);

  // Abre chat
  const handleChat = (openClose = null) => {
    setChatOpen(openClose !== null ? openClose : !chatOpen);
  };

  return (
    <div className="chat">
      {chatOpen ? (
        <div className="wrapper">
          <div className="title">
            <strong>E aí, pronto para mudar a cara do seu negócio?</strong>
            <button onClick={() => handleChat(false)}>
              <i class="fas fa-times"></i>
            </button>
          </div>
          <ContactForm chat />
        </div>
      ) : null}
      <div className="message">Oii, tem alguem ai? asdasd</div>
      <button className="button" onClick={() => handleChat()}>
        <i className="fas fa-comment-alt"></i>
      </button>
    </div>
  );
};
