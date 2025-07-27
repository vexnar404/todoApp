import {createSlice} from '@reduxjs/toolkit';

const getInitialTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === "dark" ? "dark" : "light";
}

const initialState = {
    theme: getInitialTheme()
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
        }
    }
})

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;