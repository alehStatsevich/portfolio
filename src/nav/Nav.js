import React from 'react';
import style from './Nav.module.css'

function Nav() {
    return (
        <div className={style.nav}>
            <a className={style.a} href="#">Home</a>
            <a className={style.a} href="#">Skills</a>
            <a className={style.a} href="#">Projects</a>
            <a className={style.a} href="#">Contact</a>

        </div>
    );
}

export default Nav;
