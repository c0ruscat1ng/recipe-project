import React from 'react';
import styles from './MeatItem.module.scss'
import {NavLink} from "react-router-dom";

const MeatItem = ({strMeal, strMealThumb, idMeal}) => {
    return (
        <div className={styles.meat__item}>
            <img src={strMealThumb} alt="" className={styles.meat__img}/>
            <p className={styles.meat__name}>{strMeal}</p>
            <NavLink to={`meal/${idMeal}`} className={styles.meat__link}>Смотреть рецепт</NavLink>
        </div>
    );
};

export default MeatItem;