import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_URL} from "../../config.js";


export const fetchFilteredCategories = createAsyncThunk(
    'filteredCategories/fetchFilteredCategories',
    async function (catName, { rejectWithValue }) {
        try {
            const response = await fetch(API_URL + "filter.php?c=" + catName);
            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();
            return data.meals;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const filteredCategoriesSlice = createSlice({
    name: 'filteredCategories',
    initialState: {
        filteredCategories: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchFilteredCategories.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchFilteredCategories.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.filteredCategories = action.payload;
        },
        [fetchFilteredCategories.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
})

export default filteredCategoriesSlice.reducer;