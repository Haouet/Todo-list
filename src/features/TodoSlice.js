import { createSlice } from "@reduxjs/toolkit";


const initialState = 
{
  count: 0,
  todos: 
  [
 
]
  
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random() * 100,
        text: action.payload,
        isDone: false,
      };
      state.todos.push(todo);
      state.count += 1;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.count -= 1;
    },
    isDoneTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id,
      );
      console.log(index);
      state.todos[index].isDone = action.payload.isDone;
      // state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      // state.isDone = state.isDone.map((todo) => todo.isDone === action.payload);
      
      
     
     
     
    },
 
 
  },
});

export const { addTodo, removeTodo, isDoneTodo } = todoSlice.actions;

export default todoSlice.reducer;
