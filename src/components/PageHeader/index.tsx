import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/styles/global.css';
import './styles.css';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

interface PageHeaderProps {
    title: string;
}

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="icone voltar"/>
                    </Link>
                    <img src={logoImg} alt="icone voltar"/>
                </div>
                <div className="header-content">
                    <strong>{props.title}</strong>

                {props.children}
                </div>
            </header>
    )
}