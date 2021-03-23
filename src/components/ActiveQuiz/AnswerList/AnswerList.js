import React from "react";
import AnswerItem from "./AnswerItem/AnswerItem";
import styles from './AnswerList.module.css'
const AnswersList = props =>{
    return(
      <ul className={styles.AnswerList}>
         {props.answers.map((answer, index) => {
            return(
             <AnswerItem 
             state={props.state? props.state[answer.id]:null}
             answer={answer} 
             key={index}
             onClickHandler={props.onClickHandler}
             /> ) 
         })}
        </ul>
   
    )
}

export default AnswersList