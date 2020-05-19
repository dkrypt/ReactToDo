import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { StoreProvider, createStore } from 'easy-peasy';
import model from './model';

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
    <div className="App">
      <div className="todoheader">
                todos
            </div>
      <TodoList />
      </div>
      </StoreProvider>
  );
}

export default App;
