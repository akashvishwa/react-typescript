export interface Todo{
    id:Number;
    todo:string;
    isDone:boolean;
}

export interface TodoContextType{
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
  }