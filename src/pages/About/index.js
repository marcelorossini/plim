import React from 'react';
import './style.css';

import imgMarcelo from '../../assets/about/marcelo.jpg';
import imgAryane from '../../assets/about/aryane.jpg';

export default () => {
    return (
        <section id="sobre">
            <div className="wrapper">
                <h1 className="mark-right">SOBRE A PLIM</h1>
                <p>
                    Temos a consciência de que o mercado precisa de profissionais que deem assistência, atenção e soluções aos clientes. Com isso procuramos fazer a diferença trabalhando para a obtenção de excelentes resultados. Trabalhamos com marketing digital, planejamento e estratégias. Estamos sempre atualizados para que possamos fazer um trabalho bem feito e com um resultado que supere as expectativas do cliente.
                </p>
                <div className="content">
                    <div className="grid">                                       
                        <div className="image"><img src={imgAryane} alt=""/></div>
                        <div className="info">
                            <strong>Aryane Toffetti</strong>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis ut augue id tincidunt. Curabitur dapibus molestie sapien, eu tempus ligula aliquet eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id purus tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed quis mattis mauris, sed mollis purus. Aenean consequat dolor et auctor dignissim. Etiam eget odio rutrum lacus lobortis hendrerit.
                            </p>
                        </div>
                        <div className="image"><img src={imgMarcelo} alt=""/></div>
                        <div className="info">
                            <strong>Marcelo Rossini</strong>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis ut augue id tincidunt. Curabitur dapibus molestie sapien, eu tempus ligula aliquet eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id purus tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed quis mattis mauris, sed mollis purus. Aenean consequat dolor et auctor dignissim. Etiam eget odio rutrum lacus lobortis hendrerit.
                            </p>                            
                        </div>
                    </div>
                </div>
            </div>            
            <div className="bottom"></div>            
        </section>
    )
}
