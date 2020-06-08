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
            <div className="items">
                <ul>
                    <li>
                        <img src={socialMedia} />
                        <strong>Gestão de Redes Sociais</strong>
                        <p>aaaaaaaa aaa</p>
                    </li>
                    <li>
                        <img src={marketing} />
                        <strong>Marketing Digital</strong>
                        <p>aaaaaaaa aaa</p>
                    </li>
                    <li>
                        <img src={bussinessCard} />
                        <strong>Cartões de Visita</strong>
                        <p>aaaaaaaa aaa</p>
                    </li>
                    <li>
                        <img src={tablet} />
                        <strong>Criação de Identidade visual</strong>
                        <p>aaaaaaaa aaa</p>
                    </li>
                    <li>
                        <img src={code} />
                        <strong>Desenvolvimento de Sites</strong>
                        <p>aaaaaaaa aaa</p>
                    </li>
                    <li>
                        <img src={printing} />
                        <strong>Impressos</strong>
                        <p>aaaaaaaa aaa</p>
                    </li>
                </ul>
            </div>
            <div className="bottom"></div>
        </section>
    )
}
