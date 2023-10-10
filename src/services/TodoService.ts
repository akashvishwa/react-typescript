import { Todo } from "../Models/Todo"

export const UpdateTodoById=(Id:Number,todo:string,todos:Todo[])=>{
    let tempTodos:Todo[]=todos;
    let element=tempTodos.filter(x=>x.id===Id)[0];
    element.todo=todo;
    return tempTodos;
}


export const DeleteTodoById=(Id:Number,todos:Todo[])=>{
    return todos.filter(x=>x.id!==Id);    
}

export const MarkTodoDoneByID=(Id:Number,todos:Todo[])=>{
    let tempTodos:Todo[]=todos;
    let element= tempTodos.filter(x=>x.id===Id)[0];
    element.isDone=!element.isDone;
    return [...tempTodos];
}
