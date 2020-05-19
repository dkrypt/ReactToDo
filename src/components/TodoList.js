import React from 'react'
import './TodoList.css'
import Todo from './Todo'
import { useStoreState, useStoreActions } from 'easy-peasy';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    const todos = useStoreState(state => state.todos);
    const addTodoToStore = useStoreActions(action => action.addTodo);
    const addTodo = ((e) => {
        if (e.which == 13) {
            const todo = {
                id: uuidv4(),
                text: e.target.value,
                done: false
            }
            addTodoToStore(todo);
            e.target.value = ''
        }
    });
    
    return (
        <div className="todolist">
            <div className="inputTodo">
                <input type="text" placeholder="What needs to be done?" onKeyDown={addTodo}></input>
            </div>
            <div className="list">
                {todos.map(item => <Todo key={item.id} todo={item}/>)}
            </div>
        </div>
    )
}
