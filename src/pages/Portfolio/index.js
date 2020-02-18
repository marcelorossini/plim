import React from 'react';
import './style.css';
import m from '../../assets/portfolio/m.png';
import c from '../../assets/portfolio/c.png';

export default () => {
  return (
    <div className="portfolio">
      <h1>Portfólio</h1>
      <p>Text</p>
      <ul className="images">
        <li>
          <div className="info">
            <strong>Ju fotografia</strong>
            <p>ha muleque</p>
          </div>
          <img src={m} />
        </li>
        <li>
          <div className="info">
            <strong>Ju fotografia</strong>
            <p>ha muleque</p>
          </div>
          <img src={c} />
        </li>
        <li>
          <div className="info">
            <strong>Ju fotografia</strong>
            <p>ha muleque</p>
          </div>
          <img src={c} />
        </li>
        <li>
          <div className="info">
            <strong>Ju fotografia</strong>
            <p>ha muleque</p>
          </div>
          <img src={c} />
        </li>
        <li>
          <div className="info">
            <strong>Ju fotografia</strong>
            <p>ha muleque</p>
          </div>
          <img src={c} />
        </li>
        <li>
          <div className="info">
            <strong>Ju fotografia</strong>
            <p>ha muleque</p>
          </div>
          <img src={c} />
        </li>
        <li>
          <div className="info">
            <strong>Ju fotografia</strong>
            <p>ha muleque</p>
          </div>
          <img src={c} />
        </li>
        <li>
          <div className="info">
            <strong>Ju fotografia</strong>
            <p>ha muleque</p>
          </div>
          <img src={c} />
        </li>                        
      </ul>
    </div>
  );
}
