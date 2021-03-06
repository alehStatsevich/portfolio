import React from 'react';
import style from './Work.module.css'



function Work (props) {
    return (
        <div className={style.work}>
            <div className={style.icon}>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
            <button className={style.button}>LOOK</button>
        </div>
    );
}

export default Work;
