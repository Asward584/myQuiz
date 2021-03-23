import React from 'react';
import Button from '../UI/Button/Button';
import styles from './FinishedQuiz.module.css'



const FinishedQuiz = (props)=>{
    const results =  Object.keys(props.results).reduce((total,key)=>{
            if(props.results[key] === 'succed'){
                total++
            }
            return total
        },0)

    
    
    return (
        <div className={styles.FinishedQuiz}>
            <ul>

                {props.quiz.map((quizItem, index)=>{
                    const cls =[
                        'fa',
                        props.results[quizItem.id] === 'succed'? "fa-check" : "fa-times",
                        styles[props.results[quizItem.id]]

                
                
                    ]
                    return (
                        <li 
                        key={index}>
                            <strong>{index + 1}</strong>&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}/>

                        </li>
                    )
                })}

                {/* <li >
                <strong>1</strong>&nbsp;
                   Hi!
                    <i className={'fa fa-times ' + styles.error}/>
                </li>
                <li >
                <strong>2</strong>&nbsp;
                   Hi 2!
                    <i className={'fa fa-check ' + styles.succed }/>
                </li> */}
            </ul>
            <p>Правильно {results} из {props.quiz.length}</p>
<div>
           <Button onClick={props.onRetry} type="primary">
               Повторить
           </Button>
            </div>
        </div>


    )
    }
export default FinishedQuiz