import React from 'react'

function Axhusen(props) {
    return (
        <li onClick={props.handleClick} className={props.class}>
            {props.peep.name} - {props.peep.age} years old
        </li>
    )
}

export default Axhusen