import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';

import './style.css';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';


function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekday] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent){
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });        
        setTeachers(response.data);
    }


    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estos son los profesores disponibles">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange = {(e) => {setSubject(e.target.value)}}
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
                    <Select 
                    name="week_day" 
                    label="Dia de la semana"
                    value={week_day}
                    onChange = {(e) => {setWeekday(e.target.value)}}
                    options={[
                        { value: '0', label: 'Domingo'},
                        { value: '1', label: 'Lunes'},
                        { value: '2', label: 'Martes'},
                        { value: '3', label: 'Miercoles'},
                        { value: '4', label: 'Jueves'},
                        { value: '5', label: 'Viernes'},
                        { value: '6', label: 'Sábado'},                        
                    ]}
                    />

                    <Input 
                    type="time" 
                    name="time" 
                    label="Hora" 
                    value={time}
                    onChange = {e => {setTime(e.target.value)}}
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher}/>
                })}                
            </main>
        </div>
    )
}

export default TeacherList;