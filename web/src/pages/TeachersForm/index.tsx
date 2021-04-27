import React, { FormEvent, useState } from 'react';

import '../../assets/styles/global.css';
import Input from '../../components/input';
import { PageHeader } from '../../components/PageHeader';

import WarningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';
import { useHistory } from 'react-router';

export default function TeachersForm() { 
    const history = useHistory();

    const [name,setName] = useState('');
    const [avatar,setAvatar] = useState('');
    const [whatsapp,setWhatsapp] = useState('');
    const [bio,setBio] = useState('');
    
    const [subject,setSubject] = useState('');
    const [cost,setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 2, from: '', to: '' }
    ]);

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            { week_day: 2, from: '', to: '' }
        ]);
    }

    function addScheduleItemValue(position: number, field: string, value: string){
        const updatedSchedule = scheduleItems.map( (item, index) => {
            if(index === position){
                return { ...item , [field]: value};
            }

            return item;
        })

        setScheduleItems(updatedSchedule);
    }

    function handleCreateClass(evt: FormEvent){
        evt.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!');

            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro!');
        })
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
                    <form onSubmit={handleCreateClass}>
                        <fieldset>
                            <legend>Seus dados</legend>

                            <Input
                            name="name" 
                            label="Nome Completo" 
                            value={name}
                            onChange={(e) => {setName(e.target.value)}}
                            />

                            <Input 
                            name="avatar" 
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => {setAvatar(e.target.value)}}
                            />

                            <Input 
                            name="whatsapp" 
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={(e) => {setWhatsapp(e.target.value)}}
                            />

                            <Textarea 
                            name="bio" 
                            label="biografia"
                            value={bio}
                            onChange={(e) => {setBio(e.target.value)}}
                            />
                        </fieldset>

                        <fieldset>
                            <legend>Informações sobre a aula</legend>

                            <Select 
                                name="subject" 
                                label="Matéria"
                                value={subject}
                                onChange={(e) => { setSubject(e.target.value) } }
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
                            <Input 
                            name="cost" 
                            label="Custo da sua hora por aula"
                            value={cost}
                            onChange={ (e) => { setCost(e.target.value) }}
                            />
                        </fieldset>

                        <fieldset>
                            <legend>Horários disponíveis <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button></legend>                    
                        
                            {scheduleItems.map( (schedule, index) => {
                                return (
                                    <div key={schedule.week_day} className="schedule-item">
                                        <Select 
                                            name="week_day" 
                                            label="Dia da semana"
                                            value={schedule.week_day}
                                            onChange={ e => addScheduleItemValue(index, 'week_day', e.target.value)}
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
                                            name="from"
                                            label="Das" 
                                            value={schedule.from}
                                            onChange={e => { addScheduleItemValue(index, 'from', e.target.value) }}
                                        />
                                        <Input 
                                            type="time" 
                                            name="to" 
                                            label="Até"
                                            value={schedule.to}
                                            onChange={e => { addScheduleItemValue(index, 'to', e.target.value) }}
                                        />
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
                            <button type="submit">
                                Salvar Cadastro
                            </button>
                        </footer>
                    </form>                
                </main>
            </div>
        </>
    )
}