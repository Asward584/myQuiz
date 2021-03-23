import React from 'react';
import styles from './ActiveQuiz.module.css';
import AnswersList from './AnswerList/AnswerList';
const ActiveQuiz = (props) => {
  return (
    <div className={styles.ActiveQuiz}>
      <p className={styles.Question}>
        <span>
          <strong>{ props.activeQuestion}</strong>&nbsp; {props.question}
        </span>
        <small>{props.activeQuestion} из {props.quizLength }</small>
      </p>

      <AnswersList answers={props.answers} 
      onClickHandler={props.onClickHandler}
      state={props.state} />
    </div>
  );
};
export default ActiveQuiz;
