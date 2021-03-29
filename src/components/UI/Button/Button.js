import React from 'react';
import styles from './Button.module.css'

const Button = (props) => {

    const cls= [
        styles.Button,
        styles[props.type]
    ]


    return (
        <button 
        onClick={props.onClick}
        disabled={props.disabled}
        className={props.children === "Sign Up" || "Sign In"?
        styles.btn:cls.join(' ')}
        id = {props.id || null}

        >
    {props.children}
        </button>


    )


}

export default Button