import {configureStore} from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice.js";
import getFilteredCategorySlice from "./getFilteredCategorySlice.js";
import getMealSlice from "./getMealSlice.js";


export default configureStore({
    reducer:{
        categories: categoriesSlice,
        filteredCategories:getFilteredCategorySlice,
        getMeal:getMealSlice,
    }
})
