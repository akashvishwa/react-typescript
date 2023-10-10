import React, { createContext, useState } from 'react';
import './App.css';
import { InputField } from './components/InputField';
import { Todo, TodoContextType } from './Models/Todo';
import { TodoList } from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';

// author akash vishwakarma

export const TodosContext=createContext<TodoContextType|null>(null);
// we can provide context in a centralised way by using folowing architecture
//https://blog.logrocket.com/how-to-use-react-context-typescript/

const App:React.FC=()=>{
  const [todo,setTodo]=useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const value:TodoContextType={todos,setTodos};

  const handleAdd=(e:React.SyntheticEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}]);
      setTodo("");
    }
  }
  console.log(todos);

  return (
    <div className="App" style={{display:'grid',gridTemplateRows:'5% 10% 85%'}}>
      <TodosContext.Provider value={value}>
        <Header/>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      </TodosContext.Provider>
    </div>
  );
}

export default App;
