import React from 'react';
import styles from './Home.module.scss'
import {NavLink} from "react-router-dom";
import Skeleton from "../../components/Skeleton/Skeleton.jsx";

const Home = () => {
    return (
        <div className={styles.main}>
            <div className={styles.main__article}>Домашние рецепты</div>
            <div className={styles.main__description}>Проверенные пошаговые рецепты с фото, кулинарное видео, статьи о еде и кулинарии, всё на этом сайте</div>
            <NavLink to='/categories' className={styles.main__btn}>К рецептам!</NavLink>
        </div>
    );
};

export default Home;