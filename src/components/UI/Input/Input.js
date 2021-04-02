import React from 'react';
import styles from './Input.module.css';
function isInvalid( valid, touched, shouldValidate ) {
  const b = !valid && shouldValidate && touched
  return b
 
}
const Input = (props) => {
  return (
    <React.Fragment>
      {props.label? <p>{props.label}</p> : null}
      <input
        type={props.type || 'text'}
        placeholder={props.placeholder}
        className={
          isInvalid(props.valid, props.touched, props.shouldValidate)
            ? styles.invalid 
            : styles.input
        }
        onChange={props.onChange}
      />
      {isInvalid(props.valid, props.touched, props.shouldValidate) ? 
        <div className={styles.error}>{props.errorMessage}</div> : null
     }
    </React.Fragment>
  );
};
export default Input;
