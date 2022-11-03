import React from 'react'
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../features/TodoSlice";


export default function AddTask() {
     //👇️ use state input
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const desc = useRef(null);
  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    // 👇️ clear all input values in the form
    desc.current.value = '';

  };
  return (
    <div><h1>TODO List </h1>
    <form className="App-form" onSubmit={handleAddTodo}>
      <input ref={desc} type="text" onInput={(e) => setInput(e.target.value)} />
      <button type="submit">Add list</button>
    </form></div>
  )
}
