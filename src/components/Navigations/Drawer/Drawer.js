import React, { Component } from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './Drawer.module.css';
import { NavLink } from 'react-router-dom';
const links = [
  { to: '/', label: 'Список тестов', exact: true },
  { to: '/auth', label: 'Авторизация', exact: true },
  { to: '/quiz-creator', label: 'Создать тест', exact: true },
];
class Drawer extends Component {
  renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink to={link.to} onClick={this.props.onClose}>
            {link.label}
          </NavLink>
        </li>
      );
    });
  };

  render() {
    const cls = [styles.Drawer];
    if (!this.props.isOpen) {
      cls.push(styles.close);
    }
    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </React.Fragment>
    );
  }
}

export default Drawer;
