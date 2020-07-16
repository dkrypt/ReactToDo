import React, { useState } from 'react';
import './components/style/themes/Hoomans.css';
// import './components/style/themes/SoftwareEngineer.css';
import TodoList from './components/TodoList';
import useStickyState from './StickyStateHook.js'
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';

function App() {
  const [todos, setTodos] = useStickyState([], "localState");
  const [localTodo, setLocalTodos] = useState([]);

  const todoOperations = {
    addTodo: ((todoText) => {
      const newTodo = {
        id: uuidv4(),
        text: todoText,
        done: false
      }
      setTodos([...todos, newTodo]);
    }),
    deleteTodo : id => {
      const newTodoList = [...todos];
      const todoToDel = newTodoList.find(todo => todo.id === id);
      const index = newTodoList.indexOf(todoToDel);
      newTodoList.splice(index, 1);
      setTodos(newTodoList);
    },
    markDone: id => {
      const newTodoList = [...todos];
      const el = newTodoList.find(todo => todo.id == id);
      const index = newTodoList.indexOf(el);
      newTodoList[index].done = !newTodoList[index].done;
      setTodos(newTodoList);
    }
  };
  return (
    <div className="App">
      <Header />
      <TodoList todoOperations={todoOperations} todos={todos}/>
      </div>
  );
}

export default App;
