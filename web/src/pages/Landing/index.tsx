import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
import { Link } from 'react-router-dom';
import api from '../../services/api';

type Data = {
    total: string,
}

export default function Landing(){
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect( () => {
        api.get('/connections').then(response => {
            const { total } = response.data;
            setTotalConnections(total);
        })
    },[]);

    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="logo"></img>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={landingImg} alt="" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="icone de estudo" /> 
                            Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="icone de estudo" />
                            Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    {`Total de ${totalConnections} conexões já realizadas`}
                    <img src={purpleHeartIcon} alt="icone coracao"/>
                </span>
            </div>
        </div>
    )
}