import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchGetMeal} from "../../store/getMealSlice.js";
import NavigateButton from "../UI/NavigateButton/NavigateButton.jsx";

import styles from './Recipt.module.scss'

const Recipe = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchGetMeal(id));
    }, [dispatch])

    const recipe = useSelector(state => state.getMeal.getMeal);

    return (
        <>
            <NavigateButton navigate={() => navigate(-1)}/>
            <div className={styles.recipe}>
                <div className={styles.recipe__container}>
                    <div>
                        <p className={styles.recipe__article}>Recipe of {recipe.strMeal}</p>
                        <p className={styles.recipe__category}>Category: {recipe.strCategory}</p>
                        <p className={styles.recipe__area}>Area: {recipe.strArea}</p>
                        <p className={styles.recipe__instructions}>Instructions: {recipe.strInstructions}</p>
                        <a className={styles.recipe__video} href={recipe.strYoutube} target="_blank">Watch video</a>
                    </div>
                    <img className={styles.recipe__img} src={recipe.strMealThumb} alt={recipe.strMeal}/>
                </div>
            </div>
        </>
    );
};

export default Recipe;