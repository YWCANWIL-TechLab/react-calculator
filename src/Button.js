import React from 'react';
import './Button.css';

export function Button(props) {


    return (
        <button 
            className='button'
            id={props.id}
            value={props.value}
            onClick={props.clickHandler(props.value)}
        >
            {props.value}
        </button>
    )
}

export default Button;