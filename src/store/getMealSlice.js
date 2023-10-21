import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_URL} from "../../config.js";


export const fetchGetMeal = createAsyncThunk(
    'getMeal/fetchGetMeal',
    async function (mealId, { rejectWithValue }) {
        try {
            const response = await fetch(API_URL + "lookup.php?i=" + mealId);
            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();
            return data.meals[0];
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const getMealSlice = createSlice({
    name: 'getMeal',
    initialState: {
        getMeal: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchGetMeal.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchGetMeal.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.getMeal = action.payload;
        },
        [fetchGetMeal.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
})

export default getMealSlice.reducer;