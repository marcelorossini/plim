import React from 'react';
import './style.css';

import socialMedia from '../../assets/social-media.svg';
import marketing from '../../assets/marketing.svg';
import bussinessCard from '../../assets/bc.svg';
import tablet from '../../assets/tablet.svg';
import code from '../../assets/code.svg';
import printing from '../../assets/printing.svg';

export default () => {
    return (
        <section id="services">
            <h1 className="mark-left">SERVIÇOS</h1>
            <p>Teste</p>
            <div className="items">
                <ul>
                    <li>
                        <img src={socialMedia} />
                        <strong>Gestão de Redes Sociais</strong>
                    </li>
                    <li>
                        <img src={marketing} />
                        <strong>Marketing Digital</strong>
                    </li>
                    <li>
                        <img src={bussinessCard} />
                        <strong>Cartões de Visita</strong>
                    </li>
                    <li>
                        <img src={tablet} />
                        <strong>Criação de Identidade visual</strong>
                    </li>
                    <li>
                        <img src={code} />
                        <strong>Desenvolvimento de Sites</strong>
                    </li>
                    <li>
                        <img src={printing} />
                        <strong>Impressos</strong>
                    </li>
                </ul>
            </div>
            <div className="bottom"></div>
        </section>
    )
}
