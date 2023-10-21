import React from 'react';


import styles from './NavigateButton.module.scss'

const NavigateButton = ({navigate}) => {
    return (
        <a onClick={navigate} className={styles.navigate__btn}>Назад</a>
    );
};

export default NavigateButton;