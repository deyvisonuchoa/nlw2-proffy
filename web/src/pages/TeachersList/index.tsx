import React, { FormEvent, useState } from 'react';

import '../../assets/styles/global.css';
import { PageHeader } from '../../components/PageHeader';
import './styles.css';

import TeachersItem, { Teacher } from '../../components/TeacherItem/intex';
import Input from '../../components/input';
import Select from '../../components/Select';
import api from '../../services/api';

export default function TeachersList() {
    const [subject, setSubect] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    const [teachers, setTeachers] = useState([]);

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        await api.get('classes', {
            params:{
                subject,
                week_day,
                time
            }
        }).then(response => {
            setTeachers(response.data);
        })
    }

    const tituloHeader: string = 'Que incrível que você quer dar aulas';

    return (
        <>
            <div id="page-teacher-list" className="container">
                <PageHeader title={tituloHeader} >
                    <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={e => setSubect(e.target.value)}
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
                        value={week_day}
                        onChange={e => setWeekDay(e.target.value)}
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

                        <Input 
                            type="time" 
                            name="time" 
                            label="Hora" 
                            value={time}
                            onChange={e => {setTime(e.target.value)}}
                        />

                        <button type="submit">
                            Buscar
                        </button>
                    </form>
                </PageHeader>   

                <main>
                    {
                        teachers.map((teacher: Teacher, index) => {
                            return (
                                <TeachersItem key={teacher.id} teacher={teacher}/>
                            )
                        })
                    }
                </main>             
            </div>
        </>    
    )
}