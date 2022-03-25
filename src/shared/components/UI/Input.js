import React from 'react';
import classes from './Input.module.css'

/*
 * Pass each key & value as props to input by Spread Operator
 * @param {input.id,label} props 
 * @returns 
*/


const Input = ( props ) => {
    return (
        <div className={ classes.input }>
            <label htmlFor={ props.input.id }>{ props.label }</label>
            <input type="text" { ...props.input } />
        </div>
    );
};

export default Input;