import React from 'react';
import PageHeader from '../../components/PageHeader';

import './style.css'
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estos son los profesores disponibles">
                <form id="search-teachers">
                    <Input name="subject" label="Matéria"/>
                    <Input name="week_day" label="Dia de la semana"/>
                    <Input type="time" name="time" label="Hora"/>                
                </form>
            </PageHeader>    

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;