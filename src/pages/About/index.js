import React from 'react';
import './style.css';

import logo from '../../assets/logo.svg';
import imgMarcelo from '../../assets/about/marcelo.jpg';
import imgAryane from '../../assets/about/aryane.jpg';

export default () => {
    return (
        <section id="sobre">
            <div className="wrapper">
                <h1 className="mark-right">SOBRE A PLIM</h1>
                <div className="content">
                    <div>
                        <img src={logo} alt=""/>
                    </div>
                    <div className="grid">                                       
                        <div className="image"><img src={imgAryane} alt=""/></div>
                        <div className="info">
                            <strong>Aryane Toffetti</strong>
                            <p>
                                Designer - CEO                                
                            </p>
                        </div>
                        <div className="image"><img src={imgMarcelo} alt=""/></div>
                        <div className="info">
                            <strong>Marcelo Rossini</strong>
                            <p>
                                Desenvolvedor - Parceiro
                            </p>                            
                        </div>
                    </div>
                </div>
            </div>            
            <div className="bottom"></div>            
        </section>
    )
}
