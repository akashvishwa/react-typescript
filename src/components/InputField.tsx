import React from 'react'
import './InputField.css';

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.SyntheticEvent)=>void;
}

export const InputField:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
  return (
    <div className='container-input'>
        <form>
            <input className="todo-input" type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}} />
            <button className='add-btn' onClick={(e)=>handleAdd(e)}>Add</button>
        </form>
    </div>
  )
}
