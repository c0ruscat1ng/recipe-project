import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchFilteredCategories} from "../../../store/getFilteredCategorySlice.js";
import MeatItem from "../MeatItem/MeatItem.jsx";

import styles from './MeatList.module.scss'
import {useNavigate, useParams} from "react-router-dom";
import NavigateButton from "../../UI/NavigateButton/NavigateButton.jsx";
import Skeleton from "../../Skeleton/Skeleton.jsx";

const MeatList = () => {
    const catName = useParams()
    const dispatch = useDispatch();
    const {status, error} = useSelector(state => state.filteredCategories)
    useEffect(() => {
        dispatch(fetchFilteredCategories(catName.name));
    }, [dispatch])
    const navigate = useNavigate();

    const filteredCategories = useSelector(state => state.filteredCategories.filteredCategories);
    return (
        <>
            <NavigateButton navigate={() => navigate(-1)}/>
            <div className={styles.meat__list}>
                {status === 'loading' && <Skeleton/>}
                {error && <h2>An error:{error}</h2>}
                {
                    filteredCategories.map((meat) => (
                        <MeatItem
                            key={meat.idMeal}
                            {...meat}
                        />
                    ))
                }
            </div>
        </>
    )
        ;
};

export default MeatList;