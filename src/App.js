import { useState,useRef } from "react";

import "./App.css";

import TodoItem from "./components/TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./features/TodoSlice";

function App() {
  const desc = useRef(null);
  //👇️ use state input
  const [input, setInput] = useState(""); 
  // 👇️use selector store
  const count = useSelector((state) => state.todo.count);
  const todos = useSelector((state) => state.todo.todos);
  // 👇️dispatch store
  const dispatch = useDispatch();
 // 👇️ action sur input 
  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
  // 👇️ clear all input values in the form
    desc.current.value = '';
    
  };

  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="App">
     
      <h1>TODO List </h1>
      <form className="App-form" onSubmit={handleAddTodo}>
        <input  ref={desc} type="text" onInput={(e) => setInput(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      
      <div className="Todos">
        {count > 0 &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              id={todo.id}
              onCheck={handleTodoDone}
            />
          ))}
        {count === 0 && <p>No todos</p>}
      </div>
    </div>
  );
}

export default App;
