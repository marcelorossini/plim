import React from "react";
import "./style.css";
import { Portfolio } from "../../config";

export default () => {
  return (
    <section id="portfolio">
      <div className="wrapper">
        <div className="top">
          <h1>PORTFÓLIO</h1>
          <p>Veja alguns de nossos trabalhos</p>
        </div>
        <div className="gallery">
          <ul className="images">
            {Portfolio.data.map((item, key) => (
              <li key={key}>
                <div className="info">
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
                <img src={require(`../../${item.image}`)} alt="" />
              </li>
            ))}
          </ul>
          {/*<button>VER MAIS</button>*/}
        </div>
      </div>
      <div className="bottom"></div>
    </section>
  );
};
