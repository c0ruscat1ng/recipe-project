import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../../../store/categoriesSlice.js";
import CategoryItem from "../CategoryItem/CategoryItem.jsx";


import styles from './CategoryList.module.scss'
import {Link, useNavigate} from "react-router-dom";
import NavigateButton from "../../UI/NavigateButton/NavigateButton.jsx";
import Skeleton from "../../Skeleton/Skeleton.jsx";

const CategoryList = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories);
    const {status, error} = useSelector(state => state.categories);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])

    return (
        <>
            <NavigateButton navigate={() => navigate(-1)}/>
            <div className={styles.categories}>
                {status === 'loading' && <Skeleton/>}
                {error && <h2>An error:{error}</h2>}
                {
                    categories.map((category) =>
                        (
                            <CategoryItem
                                key={category.idCategory}
                                {...category}
                            />
                        ))
                }
            </div>
        </>
    );
};

export default CategoryList;