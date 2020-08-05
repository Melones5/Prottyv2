import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg'

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="Que increible que usted quiera dar clases."
            description="El primer paso es llenar este formulario de inscripción"
            />

            <main>
                <fieldset>
                    <legend>Sus datos</legend>
                    
                    <Input name="name" label="Nombre completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="WhatsApp"/>
                                                    
                </fieldset>

                <fieldset>
                    <legend>Sobre las aulas</legend>
                    
                    <Input name="subject" label="Matéria"/>
                    <Input name="cost" label="Costo de la hora por aula"/>                    
                                                    
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante!! <br/>
                        Llene todos los datos
                    </p>
                    <button type="button">
                        Guardar registro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;