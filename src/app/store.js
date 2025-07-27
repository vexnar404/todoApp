import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todos/todoSlice';
import themeReducer from '../features/theme/themeSlice';
import filterReducer from '../features/filter/filterSlice';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('todo-app-state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Could not load state", err);
        return undefined;
    }
}

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('todo-app-state', serializedState);
    } catch (err) {
        console.error("Could not save state", err);
    }
}

const persistedState = loadState();

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        theme: themeReducer,
        filters: filterReducer,
    },
    preloadedState: persistedState,
})

store.subscribe(() => {
    saveState({
        todos: store.getState().todos,
        theme: store.getState().theme,
        filters: store.getState().filters,
    });
});