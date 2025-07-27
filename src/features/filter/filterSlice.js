import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'all', // 'all', 'pending', 'completed'
    sortBy: 'date', // 'date', 'priority'
    sortOrder: 'asc' // 'asc', 'desc'
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setStatus: (state,action) => {
            state.status = action.payload;
        },

        setSortBy: (state,action) => {
            state.sortBy = action.payload;
        },

        setSortOrder: (state,action) => {
            state.sortOrder = action.payload;
        },

        resetFilters: (state) => {
            state.status = 'all';
            state.sortBy = 'date';
            state.sortOrder = 'asc';
        }
    }
})

export const { setStatus, setSortBy, setSortOrder, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;