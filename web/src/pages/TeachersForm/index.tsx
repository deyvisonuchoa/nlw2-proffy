import React, { useState } from 'react';

import '../../assets/styles/global.css';
import Input from '../../components/input';
import { PageHeader } from '../../components/PageHeader';

import WarningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

export default function TeachersForm() {    
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 2, from: '', to: '' }
    ]);

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            { week_day: 2, from: '', to: '' }
        ]);
    }

    const tituloHeader:string = "Que incrivel que voce queira dar aulas";
    const description: string = "O primeiro passo é preencher esse formulário de inscrição";

    return (
        <>
            <div id="page-teacher-form" className="container">
            <PageHeader 
                title={tituloHeader}
                description={description}
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome Completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="Whatsapp"/>
                    <Textarea name="bio" label="biografia"/>
                </fieldset>

                <fieldset>
                    <legend>Informações sobre a aula</legend>

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
                    <Input name="cost" label="Custo da sua hora por aula"/>
                </fieldset>

                <fieldset>
                    <legend>Horários disponíveis <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button></legend>                    
                  
                    {scheduleItems.map( schedule => {
                        return (
                            <div key={schedule.week_day} className="schedule-item">
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

                                <Input type="time" name="from" label="Das"/>
                                <Input type="time" name="to" label="Até"/>
                            </div>
                        );
                    })}
                </fieldset>

                <footer>
                    <p>
                        <img src={WarningIcon} alt="Aviso Importante"/>
                        Importante! <br />
                        Preenche todos os dados
                    </p>
                    <button type="button">
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
            </div>
        </>
    )
}