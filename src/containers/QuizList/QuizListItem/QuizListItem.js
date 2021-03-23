import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './QuizListItem.module.css';

import { withRouter } from 'react-router-dom';
const QuizListItem = (props) => {
  // console.log('props', props);
  return (
    <li key={props.index}>
      <div className={styles.name}>
        <div className={styles.face + ' ' + styles.face10}>
          <div className={styles.content}>
            <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
            <h3>Design</h3>
          </div>
        </div>
        <div className={styles.face + ' ' + styles.face2}>
          <div className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
              cumque minus iste veritatis provident at.
            </p>
            <NavLink to={'/quiz/' + props.quiz}>Go to test</NavLink>
          </div>
        </div>
      </div>
    </li>
  );
};
export default withRouter(QuizListItem);
