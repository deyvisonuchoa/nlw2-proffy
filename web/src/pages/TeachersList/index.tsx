import React from 'react';

import '../../assets/styles/global.css';
import { PageHeader } from '../../components/PageHeader';
import './styles.css';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';
import TeachersItem from '../../components/TeacherItem/intex';

export default function TeachersList() {

    const tituloHeader: string = 'Que incrível que você quer dar aulas';

    return (
        <>
            <div id="page-teacher-list" className="container">
                <PageHeader title={tituloHeader} >
                    <form id="search-teachers">
                        <div className="input-block">
                            <label htmlFor="subject">Matéria</label>
                            <input type="text" id="subject"/>
                        </div>
                        
                        <div className="input-block">
                            <label htmlFor="week_day">Dia da semana</label>
                            <input type="text" id="week_day"/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="time">Hora</label>
                            <input type="text" id="time"/>
                        </div>
                    </form>
                </PageHeader>   

                <main>
                    <TeachersItem />
                    <TeachersItem />
                    <TeachersItem />
                    <TeachersItem />
                </main>             
            </div>
        </>    
    )
}