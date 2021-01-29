import React from 'react';

import '../../assets/styles/global.css';
import Input from '../../components/input';
import { PageHeader } from '../../components/PageHeader';
import './styles.css';

export default function TeachersForm() {

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
                </fieldset>

                <fieldset>
                    <legend>Informações sobre a aula</legend>

                    <Input name="subject" label="Matéria"/>
                    <Input name="cost" label="Custo da sua hora por aula"/>
                </fieldset>
            </main>
            </div>
        </>
    )
}