import React from 'react';

import styles from './About.module.scss'

const About = () => {
    return (
        <div className={styles.about__container}>
            <p className={styles.about__article}>Рецепты</p>
            <p className={styles.about__inf}>Данный сайт разработан с использованием библиотеки React. Это полнеценный проект, который разработан по SPA-принципу.</p>
            <p className={styles.about__desc}>Тут можно найти рецепты блюд из разных стран мира, инструкцию по их приготовлению и видео. Более подробную информацию о технологиях, которые использовались при создании сайта можно найти во вкладке INFORMATION.</p>
        </div>
    );
};

export default About;