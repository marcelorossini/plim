import React, { useState, useEffect } from "react";
import "./style.css";

import { Portfolio } from "./config";
import { getSectionAtPosition, fadeIn, fadeOut } from "../../helpers";

export default () => {
  const titleInitial = "PORTFÓLIO";
  const descriptionInitial = "Veja alguns de nossos trabalhos";
  const [title, setTitle] = useState(titleInitial);
  const [description, setDescription] = useState(descriptionInitial);
  const [detail, setDetail] = useState([]);

  // Mostra detalhe
  const handleDetail = (item = null) => {
    setTitle(item === null ? titleInitial : item.title.toUpperCase());
    setDescription(item === null ? descriptionInitial : item.description);
    setDetail(item === null ? [] : item.images);
    window.location.hash = "#servicos";
    window.location.hash = "#portfolio";
  };

  useEffect(() => {
    // Esconde/Mostra botão
    const showHideButton = () => {
      const atualSection = getSectionAtPosition();
      const button = document.querySelector(".gallery button");

      if (button !== null)
        if (atualSection === "portfolio") fadeIn(button);
        else fadeOut(button);
    };

    // OnScroll
    window.addEventListener("scroll", showHideButton, { passive: true });
    return () => window.removeEventListener("scroll", showHideButton);
  }, []);

  return (
    <section id="portfolio">
      <div className="wrapper">
        <div className="top">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="gallery">
          {detail.length === 0 ? (
            <ul className="images">
              {Portfolio.data.map((item, key) => (
                <li key={key} onClick={() => handleDetail(item)}>
                  <div className="info">
                    <strong>{item.title}</strong>
                  </div>
                  <img src={require(`../../${item.thumb}`) || ""} alt="" />
                </li>
              ))}
            </ul>
          ) : (
            <>
              <ul className="detail">
                {detail.map((img, key) => (
                  <li key={key}>
                    <img src={require(`../../${img}`)} alt="" />
                  </li>
                ))}
              </ul>
              <button className="fadeOut" onClick={() => handleDetail()}>
                VOLTAR PARA O PORTFÓLIO
              </button>
            </>
          )}
        </div>
      </div>
      <div className="bottom"><div/></div>
    </section>
  );
};
