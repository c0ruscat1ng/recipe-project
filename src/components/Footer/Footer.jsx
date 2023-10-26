import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div>© {new Date().getFullYear()} Copyright Text</div>
            <div>Домашние рецепты</div>
        </div>
    );
};

export default Footer;