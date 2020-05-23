import React from 'react'
import './TodoList.css'
import Todo from './Todo'

export default function TodoList(props) {
    const { todoOperations, todos } = props;

    return (
        <div className="todolist">
            <div className="inputTodo">
                <input type="text" placeholder="What needs to be done?" onKeyDown={todoOperations.addTodo}></input>
            </div>
            <div className="list">
                {todos.map(item => <Todo key={item.id} todo={item} todoOperations={todoOperations}/>)}
            </div>
        </div>
    )
}
