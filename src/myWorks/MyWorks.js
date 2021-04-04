import React from 'react';
import style from './MyWorks.module.css'
import styleContainer from "../common/styles/Conteiner.module.css";
import Work from "./work/Work";


function MyWorks() {
    return (
        <div className={style.myWorksBlock}>

            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <h2>MY WORKS</h2>
                <div className={style.myWork}>
                    <Work title={'SOCIAL NETWORK'} description={'надо кнопку отстилизовать'}/>
                    <Work title={'TODOLIST'} description={'такая же песня'}/>

                </div>
            </div>
        </div>
    );
}

export default MyWorks;
