import React from 'react';
import './style.css';
import contact from '../../assets/contact.svg';

export default () => {
  return (
    <div className="contact">
      <h1>Contato</h1>
      <form>
        <label>Nome</label>
        <input name="name" type="text"/>
        <label>Email</label>
        <input name="email" type="text"/>
        <label>Telefone/Celular</label>
        <input name="phone" type="text"/>
        <label>Mensagem</label>
        <textarea name="message" rows="4"/>
      </form>
      <button>ENVIAR</button>
      <img className="image" src={contact} />
    </div>
  );
}
