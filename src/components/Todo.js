import React from 'react'
import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useStoreState, useStoreActions } from 'easy-peasy';

export default function Todo(props) {
    const todo = props.todo;
    const removeTodo = useStoreActions(action => action.removeTodo);
    const markComplete = useStoreActions(action => action.markComplete);
    const deleteTodo = id => removeTodo(id);
    const markDone = id => markComplete(id);
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
                <div className="markComplete" onClick={()=>markDone(todo.id)}><FontAwesomeIcon icon={faCheck} /></div>
                <div className="delete" onClick={()=>deleteTodo(todo.id)}><FontAwesomeIcon icon={faTrashAlt} /></div>
            </div>
        </div>
    )
}
