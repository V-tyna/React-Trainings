import React from 'react';
import './Input.css';

const isInvalid = ({valid, touched, shouldValidate}) => {
    return !valid && shouldValidate && touched
}

const Input = (props) => {
    const inputType = props.type || 'text';
    let classes = 'Input';
    const htmlFor = `${inputType}-${Math.random()}`;

    if(isInvalid(props)) {
        classes = 'Input invalid'
    }

    return ( 
        <div className={classes}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input 
                type={inputType}
                id={htmlFor}
                onChange={props.onChange}
            />

            {isInvalid(props) ? <span>{props.errorMessage || 'Enter correct value'}</span> : null}
        </div> 
    );
}
 
export default Input;