import React from 'react'
// import './TodoList.css'
import Todo from './Todo'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TodoList(props) {
    let textRef = React.createRef();
    const { todoOperations, todos } = props;
    const addTodoFromEnterKey = (e) => {
        if (e.which === 13) {
            todoOperations.addTodo(e.target.value);
            e.target.value = '';
        }
    }
    const addFromButton = () => {
        todoOperations.addTodo(textRef.current.value);
        textRef.current.value = '';
    }
    const clearPlaceholder = (e) => {
        e.target.placeholder = '';
        // console.log('Input Clicked!');
    }
    const whatOnFocus = (e) => {
        // console.log(e.target);
        e.target.placeholder = '';
    }
    const onBlur = (e) => {
        // console.log(e.target);
        e.target.placeholder = 'What needs to be done?';
    }
    return (
        <div className="todolist">
            <div className="inputTodo">
                <input ref={textRef} type="text" placeholder ="What needs to be done?" onBlur={onBlur} onFocus={whatOnFocus} onKeyDown={addTodoFromEnterKey} onClick={clearPlaceholder}></input>
                <div className="addTodoButton" onClick={addFromButton}>
                <FontAwesomeIcon icon={faPlus} /> Add
                </div>
            </div>
            <div className="list">
                {todos.map(item => {
                    return <Todo key={item.id} todo={item} todoOperations={todoOperations} />
                })}
            </div>
        </div>
    )
}
