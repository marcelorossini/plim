import React from 'react';
import './style.css';

import logo from '../../assets/logo.svg';

export default () => {
    return (
        <div className="wrapper">
            <div className="content">
                <div>
                    <img src={logo} alt=""/>
                </div>
                <strong>EM MANUTENÇÃO</strong>                         
            </div>
        </div>
    )
}
