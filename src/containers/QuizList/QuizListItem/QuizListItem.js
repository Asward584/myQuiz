import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './QuizListItem.module.css';

import { withRouter } from 'react-router-dom';
const QuizListItem = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.face + ' ' + styles.face1}>
        <div className={styles.content}>
          <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
          <h3>{"Тест "+(props.index+1)}</h3>
        </div>
      </div>
      <div className={styles.face + ' ' + styles.face2}>
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
            cumque minus iste veritatis provident at.
          </p>
          <NavLink to={"/quiz/"+(props.index+1)}>Go to test</NavLink>
        </div>
      </div>
    </div>
  );
};
export default withRouter(QuizListItem);
