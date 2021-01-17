import React from 'react';

import '../../assets/styles/global.css';
import './styles.css';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

export default function TeachersItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/56098033?s=460&u=f582c2d034f9ec9f3c7433f4f1941aaf6d1367b6&v=4"/>
                <div>
                    <strong>Deyvison uchoa</strong>
                    <span>Programacao</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de quimica avançada.
                <br /> <br />
                Apaixonado por Explodir coisas em laboratorio e por mudar a vida das pessoas atraves de experiencias.
                <br /><br /> 
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>RS 80.00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="zap" />
                    Entrar em contato
                </button>
            </footer>
        </article>    
    )
}