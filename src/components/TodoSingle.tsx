import React, { useContext, useState } from 'react';
import './TodoSingle.css';
import { Todo, TodoContextType } from '../Models/Todo';
import { TodosContext } from '../App';
import { AiFillEdit, AiFillDelete, AiFillSave } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { DeleteTodoById, MarkTodoDoneByID, UpdateTodoById } from '../services/TodoService';
import { Alert } from 'react-bootstrap'

interface Props {
    todo: Todo
}

export const TodoSingle: React.FC<Props> = ({ todo }) => {
    const { todos, setTodos } = useContext(TodosContext) as TodoContextType;
    const [editing, setIsEditing] = useState<boolean>(false);
    const [currentTodoValue, setCurrentTodoValue] = useState<string>(todo.todo);

    const updateInput = (event: React.SyntheticEvent) => {
        event.preventDefault();
        setTodos(UpdateTodoById(todo.id, currentTodoValue, todos));
        setIsEditing(false);
    }

    const deleteTodo = () => {
        setTodos(DeleteTodoById(todo.id, todos));
    }

    const doneTodo = () => {
        setTodos(MarkTodoDoneByID(todo.id, todos));
    }

    return (
        <div className='single-todo-container'>
            <Alert>
                <form onSubmit={(e) => { updateInput(e) }} className='formdata' style={{ width: '100%' }}>
                    {editing ? <>
                        <input type="text" value={currentTodoValue} onChange={(e) => { setCurrentTodoValue(e.target.value) }} className="editbox" />
                    </> :
                        <span className={todo.isDone ? "text done" : "text"}>{todo.todo}</span>}

                    <div>
                        {editing ?

                            <span className="save" onClick={(e) => { updateInput(e) }}> <AiFillSave /></span> :
                            <span className="edit" onClick={() => { setIsEditing(true) }}> <AiFillEdit /></span>}
                        <span className="delete" onClick={() => { deleteTodo() }}><AiFillDelete /></span>
                        <span className="done" onClick={() => { doneTodo() }}><MdDone /></span>
                    </div>
                </form>
            </Alert>
        </div>
    )
}
