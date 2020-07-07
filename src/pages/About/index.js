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
                    <div className="plim">
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <p>
                            Atuando no ramo desde o ano de 2016, a Plim se consolidou no mercado digital por seu modelo jovial e ousado, trazendo como pilares fundamentais a qualidade, agilidade e criatividade.
                            O segredo do reconhecimento e do prestígio profissional está na responsabilidade e transparência, além de muito carinho pelo ofício, fato que torna cada trabalho único e especial.
                        </p>
                        <div className="people">
                            <div className="image"><img src={imgAryane} alt="" /></div>
                            <div className="info">
                                <strong>Aryane Toffetti</strong>
                                <p>
                                    Designer - CEO
                                </p>
                            </div>
                            <div className="image"><img src={imgMarcelo} alt="" /></div>
                            <div className="info">
                                <strong>Marcelo Rossini</strong>
                                <p>
                                    Desenvolvedor - Parceiro
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom"></div>
        </section>
    )
}

/*
                        <div className="people">
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
*/