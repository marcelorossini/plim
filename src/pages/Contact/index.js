import React, { useState } from "react";
import "./style.css";

import InputMask from "react-input-mask";
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
  const [sended, setSended] = useState(false);

  const handleSubmit = (e) => {
    // Não recarrega pagina
    e.preventDefault();

    // Validação
    if (!handleValidation(e)) return;

    // Parametros
    const { name, email, phone, message } = e.target.elements;
    let param = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };

    // Marca como enviado
    setSended(true);

    // Envia email
    EmailJs.send(
      "default_service",
      process.env.REACT_APP_EMAILJS_TEMPLATE,
      param,
      process.env.REACT_APP_EMAILJS_ID
    );
  };

  const handleValidation = (e) => {
    // Form
    const { name, email, phone, message } = e.target.elements;

    // Nome
    let isValid = true;
    handleFieldError(name);
    if (name.value.length === 0) {
      isValid = false;
      handleFieldError(name, "Preencha o nome!");
    }

    // Email
    handleFieldError(email);
    if (email.value.length === 0) {
      isValid = false;
      handleFieldError(email, "Preencha o email!");
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
      isValid = false;
      handleFieldError(email, "Informe um email válido!");
    }

    // Telefone
    handleFieldError(phone);
    if (phone.value.length === 0) {
      isValid = false;
      handleFieldError(phone, "Preencha o telefone!");
    }

    // Mensagem
    handleFieldError(message);
    if (message.value.length === 0) {
      isValid = false;
      handleFieldError(message, "Preencha a mensagem!");
    }

    return isValid;
  };

  const handleFieldError = (el, message = null) => {
    // Label
    const label = document.querySelector(
      `${props.chat ? '.chat' : ''} .contactForm > form > .${el.name}Error`
    );

    // Limpa campo
    if (message === null) {
      el.classList.remove("error");
      label.innerHTML = "";
      return;
    }

    // Adiciona erro
    el.classList.add("error");
    label.innerHTML = message;
  };

  return (
    <div className="contactForm">
      {!sended ? (
        <>
          {props.chat ? (
            <strong className="title">
              E aí, pronto para mudar a cara do seu negócio?
            </strong>
          ) : null}
          <form onSubmit={handleSubmit}>
            <label>Nome</label>
            <InputMask
              mask={"a".repeat(100)}
              maskPlaceholder=" "
              name="name"
              type="text"
            />
            <p className="nameError"></p>
            <label>Email</label>
            <input name="email" type="text" />
            <p className="emailError"></p>
            <label>Telefone/Celular</label>
            <InputMask
              mask="(99) 999999999"
              maskPlaceholder=" "
              name="phone"
              type="text"
            />
            <p className="phoneError"></p>
            <label>Mensagem</label>
            <textarea name="message" rows="6" />
            <p className="messageError"></p>
            <button type="submit">ENVIAR</button>
          </form>
        </>
      ) : (
        <div className="confirmation">
          <strong>
            Obrigado por escolher a Plim, logo entraremos em contato com você!
          </strong>
        </div>
      )}
    </div>
  );
};
