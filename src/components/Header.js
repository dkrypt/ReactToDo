import React from 'react'
import Button from './Button'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExclamationCircle, faPenFancy } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
    const clearALlTodo = () => {
        console.log('Clear All ToDos');
    }
    const completedTodo = () => {
        console.log('Show Completed ToDos');
    }
    const pendingTodo = () => {
        console.log('Show Pending ToDos');
    }
    return (
        <div className="todoheader">
            <div className="titleHeader">
                <div className="titleText">ListDo</div>
            </div>
            <div className="iconLinks">
                    <div className="iconLink"><FontAwesomeIcon icon={faGithub} /></div>
                    <div className="iconLink"><FontAwesomeIcon icon={faExclamationCircle} /></div>
            </div>
            <div className="controlButtons">
                <Button text={"Clear All Todos"} type={'danger'} icon={'deleteAll'} clickCallback={()=>clearALlTodo()}/>
                <Button text={"Completed"} type={'primary'} icon={'allComplete'} clickCallback={()=>completedTodo()}/>
                <Button text={"Pending"} type={""} icon={'pending'} clickCallback={()=>pendingTodo()}/>
            </div>
        </div>
    )
}
