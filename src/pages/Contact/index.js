import React from "react";
import "./style.css";
import EmailJs from "emailjs-com";

import contact from "../../assets/contact/bg.svg";

export default () => {
  return (
    <section id="contato">
      <h1 className="mark-left">CONTATO</h1>
      <p>
        E aí, pronto para mudar a cara do seu negócio? <br />
        <br />
        Vamos conversar melhor para que você possa esclarecer todas as suas
        dúvidas e conhecer um pouco mais sobre o nosso trabalho, é só preencher
        direitinho os campos abaixo!
      </p>
      <div>
        <ContactForm />
        <div className="image">
          <img src={contact} alt="" />
        </div>
      </div>
    </section>
  );
};

export const ContactForm = (props) => {
  const handleSubmit = (e) => {
    // Esconde titulo
    [].forEach.call(
      document.querySelectorAll(".contactForm > .title"),
      (title) => {
        title.classList.add("hidden");
      }
    );

    // Esconde formulário
    [].forEach.call(
      document.querySelectorAll(".contactForm > form"),
      (form) => {
        form.classList.add("hidden");
      }
    );

    // Exibe confirmação
    [].forEach.call(
      document.querySelectorAll(".contactForm > .confirmation"),
      (confirmation) => {
        confirmation.classList.remove("hidden");
      }
    );

    // Parametros
    let param = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      phone: e.target.elements.phone.value,
      message: e.target.elements.message.value,
    };

    // Envia email
    EmailJs.send(
      "default_service",
      process.env.REACT_APP_EMAILJS_TEMPLATE,
      param,
      process.env.REACT_APP_EMAILJS_ID
    );

    // Não recarrega pagina
    e.preventDefault();
  };

  return (
    <div className="contactForm">
      {props.showTitle ? (
        <strong className="title">
          E aí, pronto para mudar a cara do seu negócio?
        </strong>
      ) : null}

      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input name="name" type="text" />
        <label>Email</label>
        <input name="email" type="text" />
        <label>Telefone/Celular</label>
        <input name="phone" type="text" />
        <label>Mensagem</label>
        <textarea name="message" rows="6" />
        <button type="submit">ENVIAR</button>
      </form>
      <div className="confirmation hidden">
        <strong>
          Obrigado por escolher a Plim, Logo entraremos em contato com você!
        </strong>
      </div>
    </div>
  );
};
