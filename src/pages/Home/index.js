import React from 'react';
import './style.css';
import home from '../../assets/home.svg';

export default () => {
  return (
    <div className="home">
      <h1>Soluções Criativas</h1>
      <p>
      Está precisando divulgar seu trabalho mas não sabe por onde começar?<br/>A gente tem a solução! ;)<br/>
      <br/>
      Somos especializados em técnicas de marketing digital para alavancar seus rendimentos, estando presente tanto na criação de sua identidade visual quanto na divulgação de suas campanhas, garantindo o que há de mais atual na área das mídias digitais.<br/>
      <br/>
      Aqui não falta criatividade, por isso, atendemos desde pequenos negócios até grandes empreendimentos, inclusive, abrangendo a criação de impressos gráficos e o desenvolvimento de sites.
      </p>
      <button>SAIBA MAIS</button>
      <img className="image" src={home} />
    </div>
  );
}
