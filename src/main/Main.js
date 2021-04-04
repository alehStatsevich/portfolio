import React from 'react';
import style from './Main.module.css';
import image from './../../src/common/img/ggg.jpg'
import styleContainer from './../common/styles/Conteiner.module.css'
import TypedReactDemo from './text'


function Main() {

    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
            <div className={style.text}>
                <span>Hi There</span>
                <h1>I am Aleh STATSEVICH</h1>
                <p>
                    <TypedReactDemo
                        strings={[
                            'Frontend Developer.',
                            'React Developer.',
                            'якта так працуе',
                            'Frontend Developer.',
                            'React Developer.',
                            'якта так працуе'
                        ]}
                    />
                </p>
            </div>
            <div className={style.photo}>
                <img  className={style.photo} src={image} alt="my-img"/>
            </div>
            </div>
        </div>
    );
}

export default Main;
