import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id: 1, 
             text : 'HII'
    }]

} 

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo : (state, action)=>{
            const todo ={
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)                 // passing this todo object to the todos i.e, initial state 
        },

        removeTodo : (state,action)=>{
            state.todos=state.todos.filter((todo)=> todo.id !== action.payload)
        },
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer