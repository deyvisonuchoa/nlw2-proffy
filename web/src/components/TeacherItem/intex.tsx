import React from 'react';

import '../../assets/styles/global.css';
import './styles.css';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string
};

interface TeaherItemProps {
    teacher: Teacher
}

export default function TeachersItem({ teacher }: TeaherItemProps) {
    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar}/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
                {teacher.bio}
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>RS {teacher.cost}</strong>
                </p>
                <a href={`https://wa.me/${teacher.whatsapp}?text=Olá, gostaria e ver a sua aula`}>
                    <img src={whatsAppIcon} alt="zap" />
                    Entrar em contato
                </a>
            </footer>
        </article>    
    )
}