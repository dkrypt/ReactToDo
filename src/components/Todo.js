import React from 'react'
// import './Todo.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrashAlt, faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons'

export default function Todo(props) {
    const {todo, todoOperations } = props;
    return (
        <div className="todo">
            <div className="desc" style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                <div className="checkBox">
                {todo.done ? <FontAwesomeIcon icon={faCheckSquare} /> : <FontAwesomeIcon icon={faSquare} /> }
                </div>
                <div className="textArear">
                {todo.text}
                </div>
            </div>
            <div className="controls">
                <div className="markComplete" onClick={()=> todoOperations.markDone(todo.id)}><FontAwesomeIcon icon={faCheck} /></div>
                <div className="delete" onClick={()=> todoOperations.deleteTodo(todo.id)}><FontAwesomeIcon icon={faTrashAlt} /></div>
            </div>
        </div>
    )
}
