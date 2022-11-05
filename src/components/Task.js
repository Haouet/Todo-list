
import { useDispatch } from "react-redux";
import { isDoneTodo } from "../features/TodoSlice";
const Task = ({ id, text, isDone  }) => {

    const dispatch = useDispatch();
    // const deleteTodo = (e) => {
    //         e.stopPropagation();
    //         dispatch(onCheck(id));
        
      
    // };
    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(
            isDoneTodo(
                {
                    id: id,
                    isDone: !isDone
                }
            ));
    };
    return (
        <div className="todo" >
            
            
            <label>{text}</label>
            {/* <label>Remove</label>
        <input type="radio" value={isDone} onClick={deleteTodo}></input>  */}
        <input type="checkbox"   className="mr-3"
         checked={isDone} onChange={handleClick}></input>
           
        </div> 
    );
};

export default Task;
