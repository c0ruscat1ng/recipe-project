import React from 'react';
import {NavLink} from "react-router-dom";

import styles from './Header.module.scss'

const Header = () => {
    return (
        <header>
            <NavLink to={'/'} className={styles.header__logo}>
                <div className={styles.header__name}>React Food</div>
            </NavLink>
            <nav>
                <ul className={styles.header__navbar}>
                    <li className={styles.header__link}><NavLink to={'/about'}>about</NavLink></li>
                    <li className={styles.header__link}><NavLink to={'/information'}>information</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;