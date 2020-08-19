import React, { useEffect } from "react";
import "./style.css";

export default () => {
  useEffect(() => {
    // Animação type
    const typeWriter = (aTextos, nPosArr, nPosCursor, bReverse) => {
      const menu = document.querySelector(".animation-text");

      let sText = aTextos[nPosArr];
      if (!bReverse) {
        menu.innerHTML += sText.charAt(nPosCursor);
        nPosCursor++;

        let bCondition = nPosCursor >= sText.length;

        setTimeout(
          () => typeWriter(aTextos, nPosArr, nPosCursor, bCondition),
          bCondition ? getRandomInt(800, 1200) : getRandomInt(50, 300)
        );
      } else {
        menu.innerHTML = menu.innerHTML.slice(0, -1);
        nPosCursor--;
        let bCondition = nPosCursor === 0;

        if (bCondition) {
          if (nPosArr + 1 === aTextos.length) {
            nPosArr = 0;
          } else {
            nPosArr++;
          }
        }
        setTimeout(
          () => typeWriter(aTextos, nPosArr, nPosCursor, !bCondition),
          bCondition ? 500 : 80
        );
      }
    };

    // Animação
    typeWriter(
      [
        "CRIATIVAS",
        "EFICAZES",
        "RÁPIDAS",
        "EXCLUSIVAS",
        "INTELIGENTES",
        "OUSADAS",
      ],
      0,
      0,
      false
    );
  }, []);

  // Gera número randomico
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <section id="home">
      <div className="home-animation">
        <small className="animation-title">SOLUÇÕES</small>
        <div>
          <div className="animation-text"></div>
          <div className="animation-cursor"></div>
        </div>
      </div>
      <div className="home-content">
        <p>Na Plim é assim: nossas ideias, seus resultados.</p>
      </div>
      <div className="home-bottom">
        <a href="#servicos">
          <i className="fas fa-angle-down"></i>
        </a>
      </div>
    </section>
  );
};
