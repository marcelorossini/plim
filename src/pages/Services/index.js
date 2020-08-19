import React from "react";
import "./style.css";

import socialMedia from "../../assets/social-media.svg";
import marketing from "../../assets/marketing.svg";
import bussinessCard from "../../assets/bc.svg";
import tablet from "../../assets/tablet.svg";
import code from "../../assets/code.svg";
import artes from "../../assets/artes.svg";

export default () => {
  return (
    <section id="servicos">
      <div className="wrapper">
        <h1 className="mark-left">SERVIÇOS</h1>
        <div className="items">
          <ul>
            <li>
              <img src={socialMedia} alt="" />
              <strong>Gestão de Redes Sociais</strong>
              <p>
                A gestão das suas redes sociais, em conjunto com a implementação
                de estratégias de marketing, garante o crescimento da sua
                empresa e a captura de novos clientes.
              </p>
            </li>
            <li>
              <img src={marketing} alt="" />
              <strong>Marketing Digital</strong>
              <p>
                Através de ferramentas de engajamento, como anúncios
                patrocinados e publicações impulsionadas, seu negócio se expande
                pelas mídias e alcança novos horizontes.
              </p>
            </li>
            <li>
              <img src={artes} alt="" />
              <strong>Artes gráficas</strong>
              <p>
                Postagens, folhas timbradas, marcas d' água, wallpapers e outras
                artes gráficas são de extrema utilidade para o dia a dia
                comercial.
              </p>
            </li>
            <li>
              <img src={tablet} alt="" />
              <strong>Criação de Identidade visual</strong>
              <p>
                Com uma identidade visual bem elaborada e marcante, sua marca
                será facilmente reconhecida, se consolidando no mercado de forma
                positiva.
              </p>
            </li>
            <li>
              <img src={bussinessCard} alt="" />
              <strong>Impressos</strong>
              <p>
                Cartões de visita, panfletos e adesivos são a ferramenta
                perfeita para garantir que seus clientes divulguem seu negócio
                para outras pessoas.
              </p>
            </li>
            <li>
              <img src={code} alt="" />
              <strong>Desenvolvimento de Sites</strong>
              <p>
                Ter um endereço marcado na internet garante melhor
                posicionamento nos sites de pesquisa, demonstrando maior
                confiança aos novos clientes.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom"></div>
    </section>
  );
};
