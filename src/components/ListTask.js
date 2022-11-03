import { useState, useRef } from "react";


import Task from "./Task";
import AddTask from "./AddTask";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo,isDoneTodo  } from "../features/TodoSlice";

export default function ListTask() {

 

 
  // 👇️use selector store
  const count = useSelector((state) => state.todo.count);
  const todos = useSelector((state) => state.todo.todos);
  

  const [filteredList, setFilteredList] = useState(todos);
  const [filterByDone, setFilterByDone] = useState(false);
  const [filtered, setFiltered] = useState(false);
  // 👇️dispatch store
  const dispatch = useDispatch();
  // 👇️ action sur input 
  

  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
   
  }; 

  function handleFilter() { 
    
    setFiltered(!filtered)
    setFilteredList(filteredList.filter(todo => {
      return todo.isDone === filterByDone
    }))
  }
  return (
    <div className="App">

      <AddTask/>
      <div>
        <button onClick={handleFilter}>
          {filtered ? "Disable" : "Enable"} Filter
        </button>
        {filtered && (
          <div>
            <label>Filter by {filterByDone ? "Done" : "Pending"}</label>
            <input
              type="checkbox"
              value={filterByDone}
              onChange={() => setFilterByDone(!filterByDone)}
            />
          </div>
        )}
      </div>
      <div className="Todos">
        {count > 0 &&
          todos.map((todo) => (
            <Task 
            key={todo.id} {...todo}
              onCheck={handleTodoDone}
            
            />
          ))}
        {count === 0 && <p>No todos</p>}
      </div>
    </div>
  );
}


