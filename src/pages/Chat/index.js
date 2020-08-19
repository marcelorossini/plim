import React, {useState} from 'react';
import './style.css'; 

import {ContactForm} from '../Contact';

export default () => {
    const [formShow,setFormShow] = useState(false);
    const handleChat = () => {
        const chat = document.querySelector('.chat > .wrapper');
        chat.classList.toggle("active");
    }

    return (
        <div className="chat">
            <div className="wrapper">
                <strong>E aí, pronto para mudar a cara do seu negócio?</strong>            
                <ContactForm />
            </div>
            <div className="message">
                Oii, tem alguem ai? asdasd
            </div>
            <button className="button" onClick={() => handleChat()}>
                <i class="fas fa-comment-alt"></i>
            </button>
        </div>
    )
}