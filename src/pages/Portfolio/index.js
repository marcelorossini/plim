import React from 'react';
import './style.css';
import m from '../../assets/portfolio/m.png';
import c from '../../assets/portfolio/c.png';

export default () => {
  return (
    <div className="portfolio">
      <h1>Portfólio</h1>
      <ul className="images">
        <li className="item">
          <img src={m}/>
        </li>
        <li className="item">
          <img src={c}/>
        </li>          
        <li className="item">
          <img src={c}/>
        </li>      
        <li className="item">
          <img src={c}/>
        </li>      
        <li className="item">
          <img src={c}/>
        </li>                                    
      </ul>
    </div>
  );
}
