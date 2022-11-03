

const TodoItem = (props) => {
 
 
  const deleteTodo = () => {
    props.onCheck(props.id);
  };
 
  return (
    <div className="todo" >
      <label>{props.text}</label>
      <input type="radio" value={props.isDone} onClick={deleteTodo}></input> 
       
      <input type="checkbox" value={props.isDone}></input>
      
    </div>
  );
};

export default TodoItem;
