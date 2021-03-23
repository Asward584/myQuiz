import React, { Component } from 'react';
import styles from './QuizList.module.css';
import QuizListItem from './QuizListItem/QuizListItem';

class QuizList extends Component {
  renderQuiz(){
    return [1,2,3].map((quiz,index)=>{
        return <QuizListItem quiz={quiz}  index={index}/>
    })

  }
  render() {
    console.log(this.props)
    // return (
    //   <div className={styles.QuizList}>
    //     <div>
    //     <h1>Cписок тестов</h1>
    //     {this.renderQuiz()}
    //     </div>
    //   </div>
    // );
    return(
      <div className={styles.body}>
    <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.face +' '+ styles.face1}>
                <div className={styles.content}>
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"/>
                    <h3>Design</h3>
                </div>
            </div>
            <div className={styles.face +' '+ styles.face2}>
                <div className={styles.content}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Go to test</a>
                </div>
            </div>
        </div>
       

        <div className={styles.card}>
            <div className={styles.face +' '+ styles.face1}>
                <div className={styles.content}>
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"/>
                    <h3>Code</h3>
                </div>
            </div>
            <div className={styles.face +' '+ styles.face2}>
                <div className={styles.content}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Go to test</a>
                </div>
            </div>
        </div>
      

        <div className={styles.card}>
            <div className={styles.face +' '+ styles.face1}>
                <div className={styles.content}>
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"/>
                    <h3>Launch</h3>
                </div>
            </div>
            <div className={styles.face +' '+ styles.face2}>
                <div className={styles.content}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Go to test</a>
                </div>
            </div>
        </div>
       
</div>
</div>

   

    )
  }
}
export default QuizList;
