import React from 'react';
import './style.css';

import foto1 from '../../assets/testemonials/1.jpg';
import foto2 from '../../assets/testemonials/2.jpg';
import foto3 from '../../assets/testemonials/3.jpg';
import foto4 from '../../assets/testemonials/4.jpg';

export default () => {
    return (
        <section id="depoimentos">
            <div className="wrapper">
                <h1 className="mark-left">DEPOIMENTOS DOS CLIENTES</h1>
                <div className="main">
                    <div className="card">
                        <div className="image"><img src={foto1} alt=""/></div>
                        <div className="bubbly">
                            <p>
                                Amei a identidade visual e os cartões, o trabalho é maravilhoso, indico para todos!
                            </p>
                            <strong>Idaiany Gonçalves - Gonçalves & Alves Pereira Advocacia</strong>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image"><img src={foto2} alt=""/></div>
                        <div className="bubbly">
                            <p>
                                Qualidade e profissionalismo ímpares!<br/>
                                Atendimento impecável e os trabalhos são muito bem feitos!!!<br/>
                                Super indico para todo mundo que necessita de um profissional qualificado na área de marketing para destacar e alavancar seu negócio.
                            </p>
                            <strong>Renata Fagian - Del Cassala Fagian Advogacia e Consultoria</strong>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image"><img src={foto3} alt=""/></div>
                        <div className="bubbly">
                            <p>
                                Amo o trabalho realizado, as artes são lindas e o atendimento é incrível, super indico e recomendo.
                            </p>
                            <strong>Ivone Rodrigues Dermopigmentadora</strong>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image"><img src={foto4} alt=""/></div>
                        <div className="bubbly">
                            <p>
                            Profissional muito atenciosa, dedicada e criativa. Tenho muitos resultados com o trabalho de marketing, as artes são muito bem feitas, nota mil!
                            </p>
                            <strong>Guilherme Segura Fisioterapia</strong>
                        </div>
                    </div>                                                                            
                </div>
            </div>
            <div className="bottom"></div>     
        </section>
    )
}
