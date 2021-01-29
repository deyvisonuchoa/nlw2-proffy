import React from 'react';

import '../../assets/styles/global.css';
import { PageHeader } from '../../components/PageHeader';
import './styles.css';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';
import TeachersItem from '../../components/TeacherItem/intex';
import Input from '../../components/input';

export default function TeachersList() {

    const tituloHeader: string = 'Que incrível que você quer dar aulas';

    return (
        <>
            <div id="page-teacher-list" className="container">
                <PageHeader title={tituloHeader} >
                    <form id="search-teachers">
                        <Input name="subject" label="Matéria"/>

                        <Input name="week_day" label="Dia da semana"/>

                        <Input type="time" name="time" label="Hora"/>
                    </form>
                </PageHeader>   

                <main>
                    <TeachersItem />
                </main>             
            </div>
        </>    
    )
}