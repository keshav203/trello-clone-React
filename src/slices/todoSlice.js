import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo: (state,action) => {
      state.todo =  [...state.todo,action.payload]
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((item) => item !== action.payload);
    },
    
   
  },
});

export const { addTodo,deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
