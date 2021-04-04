import React from 'react';
import style from './Contact.module.css'
import styleContainer from "../common/styles/Conteiner.module.css";





function Contact() {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2>CONTACT</h2>
                <form className={style.block}>

                    <input type="text" name="name" className={style.name} placeholder="Name"/>
                    <input type="text" name="subject" className={style.subject} placeholder="Subject"/>
                        <input type="email" name="email" className={style.email} placeholder="Email"/>
                            <textarea name="text" className={style.message} placeholder="Message"></textarea>
<button className={style.send}>SEND MESSAGE</button>

                </form>
            </div>
        </div>
    );
}

export default Contact;
