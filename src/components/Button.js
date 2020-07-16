import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faTasks, faListUl } from '@fortawesome/free-solid-svg-icons'

export default function Button({ text, type, icon, clickCallback }) {
    const getIcon = () => {
        switch (icon) {
            case 'deleteAll':
                return (
                    <FontAwesomeIcon icon={faTrashAlt} />
                )
            case 'allComplete':
                return (
                    <FontAwesomeIcon icon={faTasks} />
                )
            case 'pending':
                return (
                    <FontAwesomeIcon icon={faListUl} />
                )
            default:
                break;
        }
    }
    return (
        <div className="buttonComp" align="center" onClick={clickCallback}>
            {getIcon()} {' '} {text}
        </div>
    )
}
