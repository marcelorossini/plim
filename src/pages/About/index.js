import React from 'react';
import './style.css';

import imgMarcelo from '../../assets/about/marcelo.jpg';
import imgAryane from '../../assets/about/aryane.jpg';

export default () => {
    return (
        <section id="sobre">
            <div className="wrapper">
                <h1 className="mark-right">QUEM SOMOS</h1>
                <div className="grid">                                       
                    <div className="image"><img src={imgAryane} alt=""/></div>
                    <div className="image"><img src={imgMarcelo} alt=""/></div>
                    <div className="info">
                        <strong>Aryane Toffetti</strong>
                    </div>
                    <div className="info">
                        <strong>Marcelo Rossini</strong>
                    </div>
                </div>
            </div>            
            <div className="bottom"></div>            
        </section>
    )
}
