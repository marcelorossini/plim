import React from 'react';
import './style.css';

import contact from '../../assets/contact.svg';

export default () => {
    const handleSend = () => {
        alert();
    };

    return (
        <section id="contato">
            <h1 className="mark-left">CONTATO</h1>
            <p>
                E aí, pronto para mudar a cara do seu negócio? <br/>
                <br/>
                Vamos conversar melhor para que você possa esclarecer todas as suas dúvidas e conhecer um pouco mais sobre o nosso trabalho, é só preencher direitinho os campos abaixo!
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
                    <button onClick={handleSend}>ENVIAR</button>
                </div>
                <div className="image">
                    <img src={contact} alt=""/>
                </div>
            </div>
        </section>
    )
}
