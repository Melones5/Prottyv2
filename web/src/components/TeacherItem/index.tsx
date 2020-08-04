import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4" alt="Evan You"/>
                        <div>
                            <strong>Evan You</strong>
                            <span>JavaScript</span>
                        </div>
                    </header>
                    <p>
                        Creador de Vuejs y demas cosas que ni yo se que las cree
                        <br/> <br/>
                        Me gusta comer de vez en cuando ensalada de fruta con kiwi
                    </p>
                    <footer>
                        <p>
                            Precio por hora
                            <strong> $ 200 </strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar en contacto
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;