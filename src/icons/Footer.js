import React from 'react';
import style from "./Footer.module.css"
import styleContainer from "../common/styles/Conteiner.module.css";
import git from "../common/img/git.png";
import Lin from "../common/img/in.png";
import mail from "../common/img/mail.png";
import telegram from "../common/img/telegram.png";





function Footer() {
    return (
        <div className={style.main}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <h2>Aleh STATSEVICH</h2>
                <div className={style.icons}>
                    <img  className={style.icons} src={git} alt="git"/>
                    <img  className={style.icons} src={Lin} alt="in"/>
                    <img  className={style.icons} src={mail} alt="mail"/>
                    <img  className={style.icons} src={telegram} alt="telegram"/>
                </div>
            </div>
        </div>
    );
}

export default  Footer;
