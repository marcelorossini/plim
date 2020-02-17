import React from 'react';
import './style.css';

import code from '../../assets/services/code.svg';
import management from '../../assets/services/management.svg';
import pen from '../../assets/services/pen.svg';
import social from '../../assets/services/social.svg';
import promote from '../../assets/services/promote.svg';

export default () => {
  return (
    <div className="services">
      <h1>Serviços</h1>
      <ul className="items">
        <li>
          <img src={management}/>
          <strong>Marketing Digital</strong>
        </li>
        <li>
          <img src={pen}/>
          <strong>Identidade Visual</strong>
        </li>
        <li>
          <img src={social}/>
          <strong>Gerenciamento de Mídias Sociais</strong>
        </li>
        <li>
          <img src={promote}/>
          <strong>Impressos</strong>
        </li>    
        <li>
          <img src={code}/>
          <strong>Desenvolvimento de Sites</strong>
        </li>            
      </ul>
    </div>
  );
}
