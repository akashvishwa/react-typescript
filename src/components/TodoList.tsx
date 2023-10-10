import React from 'react';
import './TodoList.css';
import { Todo } from '../Models/Todo';
import { TodoSingle } from './TodoSingle';


interface Props{
todos:Todo[],
setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoList:React.FC<Props> = ({todos,setTodos}) => {

  return (
    <div className='todo-list-container'>
        {todos.map((todo,index)=>
            <TodoSingle todo={todo} key={index}/>
        )}
    </div>
  )
}
