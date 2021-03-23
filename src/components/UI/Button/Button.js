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
        className={cls.join(' ')}
        >
    {props.children}
        </button>


    )


}

export default Button