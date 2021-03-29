import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Form.module.css';
function renderInputs(props, id) {
  const state = props.state;
  return Object.keys(state.formControl).map((controlName, index) => {
    const control = state.formControl[controlName];
    if (id === 'form2' && controlName === 'userName') {
      return null;
    } else {
      return (
        <Input
          key={controlName + index}
          type={control.type}
          placeholder={control.placeholder}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          errorMessage={control.errorMessage}
          shouldValidate={true}
          onChange={(event) => props.onChange(event, controlName)}
        />
      );
    }
  });
}
const Form = (props) => {
  const text = props.id === 'form1' ? 'Sign Up' : 'Sign In';
  return (
    <form action="#" className={styles.form} id={props.id}>
      <h2 className={styles['form__title']}>{text}</h2>
      {renderInputs(props, props.id)}
      <Button onClick={props.onClick}>{text}</Button>
    </form>
  );
};

export default Form;
