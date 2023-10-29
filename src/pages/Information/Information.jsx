import React from 'react';

import styles from './Information.module.scss'

const Information = () => {
    return (
        <div className={styles.information__container}>
            <p className={styles.information__stack}>Стек технологий, использованных при создании сайта:</p>
            <p className={styles.information__about}>SASS(методология SCSS), React, роутинг - React Router Dom, State management - Redux ToolKit</p>
            <p className={styles.information__api}>Для работы с сервером я использовал API сервиса: https://www.themealdb.com/</p>
            <p className={styles.information__api}>В данном проекте не ставилось задачи сделать красивый дизайн, необходимо было показать мои возможности в создании сайта с ипользованием библиотеки реакт и инструментов для работы с ним</p>
        </div>
    );
};

export default Information;