import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select'
import api from '../../services/api';

function TeacherForm() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            {
                week_day: 0,
                from: '',
                to: ''
            }

        ]);
    }

    // imaginemos que esta funciones hace esto:
    // setScheduleItemValue(0, 'week_day', '2')

    function setScheduleItemValue(position: number, field: string, value: string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) =>{
            if(index === position) {
                return { ...scheduleItem, [field]: value };
            }
            return scheduleItem;
        });        
        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent){
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() =>{
            alert('Registro realizado con éxito!!')
            history.push('/');
            
        }).catch(() =>{
            alert('Error en el registo!!')
        })        
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que increible que usted quiera dar clases."
                description="El primer paso es llenar este formulario de inscripción"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Sus datos</legend>

                    <Input
                        name="name"
                        label="Nombre completo"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />

                    <Input
                        name="avatar"
                        label="Avatar"
                        value={avatar}
                        onChange={(e) => { setAvatar(e.target.value) }} />

                    <Input
                        name="whatsapp"
                        label="WhatsApp"
                        value={whatsapp}
                        onChange={(e) => { setWhatsapp(e.target.value) }} />

                    <Textarea
                        name="bio"
                        label="Biografía"
                        value={bio}
                        onChange={(e) => { setBio(e.target.value) }}
                    />
                </fieldset>

                <fieldset>
                    <legend>Sobre las aulas</legend>

                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciencias', label: 'Ciencias' },
                            { value: 'Educación Física', label: 'Educación Física' },
                            { value: 'Geografía', label: 'Geografía' },
                            { value: 'Historia', label: 'Historia' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Portugués', label: 'Portugués' },
                            { value: 'Química', label: 'Química' },

                        ]}
                    />
                    <Input
                        name="cost"
                        label="Costo de la hora por aula"
                        value={cost}
                        onChange={(e) => { setCost(e.target.value) }}
                    />

                </fieldset>

                <fieldset>
                    <legend>Horarios disponibles
                        <button type="button" onClick={addNewScheduleItem}>
                            + Nuevo horario
                        </button>
                    </legend>

                    {scheduleItems.map((scheduleItem, index) => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select
                                    name="week_day"
                                    label="Dia de la semana"
                                    value={scheduleItem.week_day}
                                    onChange = {e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                    options={[
                                        { value: '0', label: 'Domingo' },
                                        { value: '1', label: 'Lunes' },
                                        { value: '2', label: 'Martes' },
                                        { value: '3', label: 'Miercoles' },
                                        { value: '4', label: 'Jueves' },
                                        { value: '5', label: 'Viernes' },
                                        { value: '6', label: 'Sábado' },
                                    ]}
                                />
                                <Input 
                                    name="from" 
                                    label="De" 
                                    type="time" 
                                    value={scheduleItem.from}
                                    onChange = {e => setScheduleItemValue(index, 'from', e.target.value)}
                                />

                                <Input 
                                    name="to" 
                                    label="Hasta" 
                                    type="time" 
                                    value={scheduleItem.to}
                                    onChange = {e => setScheduleItemValue(index, 'to', e.target.value)}
                                />
                            </div>
                        )
                    })}

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante!! <br />
                        Llene todos los datos
                    </p>
                    <button type="submit">
                        Guardar registro
                    </button>
                </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;