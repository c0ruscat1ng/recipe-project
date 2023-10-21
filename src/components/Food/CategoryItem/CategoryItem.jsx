import React from 'react';
import styles from './CategoryItem.module.scss'
import {NavLink} from "react-router-dom";

const CategoryItem = ({strCategory,strCategoryDescription,strCategoryThumb}) => {
    return (
        <div className={styles.item}>
            <img src={strCategoryThumb} alt="" className={styles.item__img}/>
            <p className={styles.item__name}>{strCategory}</p>
            <p className={styles.item__desc}>{strCategoryDescription}</p>
            <NavLink to={`/category/${strCategory}`} className={styles.item__link}>Посмотреть</NavLink>
        </div>
    );
};

export default CategoryItem;