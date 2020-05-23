import React from 'react'
import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function Todo(props) {
    const {todo, todoOperations } = props;
    return (
        <div className="todo" style={{
            backgroundColor: todo.done ? '#e63946' :'#a8dadc'
        }}>
            <div className="desc" style={{
                textDecoration: todo.done ? 'line-through' : 'none'
            }}>
                {todo.text}
            </div>
            <div className="controls">
                <div className="markComplete" onClick={()=>todoOperations.markDone(todo.id)}><FontAwesomeIcon icon={faCheck} /></div>
                <div className="delete" onClick={()=>todoOperations.deleteTodo(todo.id)}><FontAwesomeIcon icon={faTrashAlt} /></div>
            </div>
        </div>
    )
}
