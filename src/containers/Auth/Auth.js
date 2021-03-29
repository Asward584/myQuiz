import React, { Component } from 'react';
import styles from './Auth.module.css';
import Form from '../../components/UI/Form/Form';
import Input from '../../components/UI/Input/Input';
import is from "is_js"
import Button from '../../components/UI/Button/Button';

class Auth extends Component {
  state = {
    formControl: {
      email: {
        value: '',
        type: 'email',
        placeholder: 'Email',
        errorMessage: 'Введите корректный email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        },
      },
      password: {
        value: '',
        type: 'password',
        placeholder: 'Password',
        errorMessage: 'Введите корректный пароль',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        },
      },
      userName: {
        value: '',
        type: 'text',
        placeholder: 'User',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 3,
        },
      },
    },
  };
  controlValidator=(value, validation)=>{
   
    if (!validation)return true
    let isValid = true
    if(validation.required){
      isValid = isValid && value.trim() !==""
    }
    if(validation.minLength){
      isValid = isValid && value.length>=validation.minLength
    }
    if(validation.email){
      isValid = isValid && is.email(value)
    } 
    return isValid
  }
  
  signUpButton = () => {
    this.divRef.classList.add(styles['right-panel-active']);
  };
  signInButton = () => {
    this.divRef.classList.remove(styles['right-panel-active']);
  };
  onChangeHandler = (event, controlName) => {
    const formControl = {...this.state.formControl};
    const control = {...this.state.formControl[controlName]};
    const value = event.target.value;
    control.touched = true;
    control.valid = this.controlValidator(value, control.validation)
    formControl[controlName] = control;
    this.setState({ 
      formControl,
    })


  };
  render() {
    return (
      <section className={styles.mainDiv}>
        <div
          className={styles.container + ' ' + styles['right-panel-active']}
          ref={(divRef) => (this.divRef = divRef)}
        >
          <div
            className={
              styles['container__form'] + ' ' + styles['container--signup']
            }
          >
            <Form
              id="form1"
              onClick={this.signUpButton}
              state={this.state}
              onChange={this.onChangeHandler}
            />
          </div>

          <div
            className={
              styles['container__form'] + ' ' + styles['container--signin']
            }
          >
            <Form
              id="form2"
              onClick={this.signInButton}
              state={this.state}
              onChange={this.onChangeHandler}
            />
          </div>

          <div className={styles['container__overlay']}>
            <div className={styles.overlay}>
              <div
                className={
                  styles['overlay__panel'] + ' ' + styles['overlay--left']
                }
              >
                <Button onClick={this.signInButton} id="signIn">
                  Sign In
                </Button>
              </div>
              <div
                className={
                  styles['overlay__panel'] + ' ' + styles['overlay--right']
                }
              >
                <Button onClick={this.signUpButton} id="signUp">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Auth;
