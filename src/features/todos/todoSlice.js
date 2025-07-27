import {createSlice, nanoid} from '@reduxjs/toolkit';
import {getAutoPriority} from '../../utils/getAutoPriority';

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text,
                completed: false,
                priority: getAutoPriority(action.payload.dueDate),
                dueDate: action.payload.dueDate,
                createdAt: new Date().toISOString()
            }
            state.todos.push(todo);
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        editTodo: (state, action) => {
            const {id, text, dueDate, priority} = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo){
                if (text !== undefined && text.trim() !== "") {
                    todo.text = text;
                }

                if (dueDate !== undefined) {
                    const dateObj = new Date(dueDate);
                    if (!isNaN(dateObj.getTime())) {
                        todo.dueDate = dateObj.toISOString();
                        todo.priority = getAutoPriority(todo.dueDate);
                    }
                }

                if (priority !== undefined) {
                    todo.priority = priority;
                }
            }
        },

        toggleTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            if (todo){
                todo.completed = !todo.completed;
            }
        },

        clearCompletedTodos: (state) => {
            state.todos = state.todos.filter((todo) => !todo.completed);
        } 
    }
})

export const {addTodo, deleteTodo, editTodo, toggleTodo, clearCompletedTodos} = todoSlice.actions;
export default todoSlice.reducer;