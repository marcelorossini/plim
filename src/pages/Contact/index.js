import React from 'react';
import './style.css';

import contact from '../../assets/contact.svg';

export default () => {
    return (
        <section id="contact">
            <h1 className="mark-left">CONTATO</h1>
            <p>
                E ai parça, belezinha?<br/>
                <br/>
                É o seguinte, tá com dúvida sobre algum coisa? Tá com algum problema com nossos trabalhos? Quer conhecer mais sobre a plim? Chama aê que a gente te ajuda
            </p>
            <div>
                <div className="form">
                    <form>
                        <label>Nome</label>
                        <input name="name" type="text" />
                        <label>Email</label>
                        <input name="email" type="text" />
                        <label>Telefone/Celular</label>
                        <input name="phone" type="text" />
                        <label>Mensagem</label>
                        <textarea name="message" rows="6" />
                    </form>
                    <button>ENVIAR</button>
                </div>
                <div className="image">
                    <img src={contact} alt=""/>
                </div>
            </div>
        </section>
    )
}
