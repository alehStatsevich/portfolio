import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../common/styles/Conteiner.module.css'
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>SKILLS</h2>
                <div className={style.skills}>
                    <Skill title={'HTML'} description={'да будет свет в конце тунеля'}/>
                    <Skill title={'CSS'} description={'да будет свет в конце тунеля'}/>
                    <Skill title={'JS'} description={'да будет свет в конце тунеля'}/>
                    <Skill title={'REACT'} description={'да будет свет в конце тунеля'}/>
                    <Skill title={'REDUX'} description={'да будет свет в конце тунеля'}/>
                    <Skill title={'GIT'} description={'да будет свет в конце тунеля'}/>
                </div>
            </div>

        </div>
    );
}

export default Skills;
