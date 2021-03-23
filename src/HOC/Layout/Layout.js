import React, { Component } from 'react';
import Drawer from '../../components/Navigations/Drawer/Drawer';

import MenuToggle from '../../components/Navigations/MenuToggle/MenuToggle';
import s from './Layout.module.css';
class Layout extends Component {
  state = {
    menu: false,
  };
  menuToggleHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };
  onCloseHandler = () => {
    this.setState({
      menu: false,
    });
  };
  render() {
    return (
      <div className={s.Layout}>
        <Drawer isOpen={this.state.menu} onClose={this.onCloseHandler} />
        <MenuToggle isOpen={this.state.menu} onClick={this.menuToggleHandler} />
        <main>{this.props.children}</main>
      </div>
    );
  }
}
export default Layout;
