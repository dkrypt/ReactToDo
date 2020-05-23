import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import useStickyState from './StickyStateHook.js'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useStickyState([], "localState");
  const todoOperations = {
    addTodo: ((e) => {
      if (e.which === 13) {
        const newTodo = {
          id: uuidv4(),
          text: e.target.value,
          done: false
        }
        setTodos([...todos, newTodo]);
        // addTodoToStore(todo);
        e.target.value = ''
      }
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
      <div className="todoheader">
                todos
            </div>
      <TodoList todoOperations={todoOperations} todos={todos}/>
      </div>
  );
}

export default App;
