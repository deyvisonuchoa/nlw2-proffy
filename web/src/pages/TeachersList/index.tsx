import React from 'react';

import '../../assets/styles/global.css';
import { PageHeader } from '../../components/PageHeader';
import './styles.css';

import TeachersItem from '../../components/TeacherItem/intex';
import Input from '../../components/input';
import Select from '../../components/Select';

export default function TeachersList() {

    const tituloHeader: string = 'Que incrível que você quer dar aulas';

    return (
        <>
            <div id="page-teacher-list" className="container">
                <PageHeader title={tituloHeader} >
                    <form id="search-teachers">
                    <Select 
                        name="subject" 
                        label="Matéria"
                        options={[
                            { value: 'Ar', label: 'Artes' },
                            { value: 'Bio', label: 'Biologia' },
                            { value: 'Cie', label: 'Ciências' },
                            { value: 'EF', label: 'Educação física' },
                            { value: 'Geo', label: 'Geografia' },
                            { value: 'His', label: 'História' },
                            { value: 'Mat', label: 'Matemática' },
                            { value: 'Pt', label: 'Português' },
                            { value: 'Qui', label: 'Química' },
                        ]}
                    />

                    <Select 
                        name="week_day" 
                        label="Dia da semana"
                        options={[
                            { value: '2', label: 'Segunda-feira' },
                            { value: '3', label: 'Terça-feira' },
                            { value: '4', label: 'Quarta-feira' },
                            { value: '5', label: 'Quinta-feira' },
                            { value: '6', label: 'Sextou' },
                            { value: '7', label: 'Sábado' },
                            { value: '1', label: 'Domingo' },
                        ]}
                    />

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