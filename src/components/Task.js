import { useState } from "react";

const Task = (props) => {
   
   const [ByDone, setByDone] = useState(false);
    
    const deleteTodo = () => {
      props.onCheck(props.id);
    };
    function isDone () { 
    console.log(ByDone);
        setByDone(!ByDone);
      
       
      };   
    return (
      <div className="todo" >
        <label>{props.text} | </label>  
        <label>Remove</label>
        <input type="radio" value={props.isDone} onClick={deleteTodo}></input> 
       <label>Is Done</label> 
        <input type="checkbox" value={ByDone} onClick={isDone}></input>
        
      </div>
    );
  };
  
  export default Task;
  