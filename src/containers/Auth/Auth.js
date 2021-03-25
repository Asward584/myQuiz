import React, { Component } from 'react';
import styles from './Auth.module.css';

class Auth extends Component {
  render() {
    return (
      <div className={styles.Auth}>
        <div>
        <h1>Авторизация</h1>
        <form>
          <label for="Email">Email</label>
          <input type="text" id="Email"></input>
          <label for="Пароль">Пароль</label>
          <input type="text" id="Пароль"></input>
          <button>Войти</button>
          <button>Зарегестрироваться</button>
        </form>
      </div>
      </div>
    );
  }
}
export default Auth;
