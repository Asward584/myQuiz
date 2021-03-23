import React, { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import styles from './Quiz.module.css';
class Quiz extends Component {
  state = {
    isFinished: false,
    activeQuestion: 0,
    results :{},
    questionState: {},
    quiz: [
      {

        question: 'Какого цвета небо?',
        id: 1,
        rightAnswer: 1,
        answers: [
          { text: 'Синее', id: 1 },
          { text: 'Фиолетовое', id: 2 },
          { text: 'Розовое', id: 3 },
          { text: 'Зеленое', id: 4 },
        ],
      },
      {
        question: 'Какого цвета трава?',
        id: 2,
        rightAnswer: 4,
        answers: [
          { text: 'Голубая', id: 1 },
          { text: 'Сиреневая', id: 2 },
          { text: 'Красная', id: 3 },
          { text: 'Зеленая', id: 4 },
        ],
      },
    ],
  };
  onClickHandler = (id) => {
    console.log(id)
    if (this.state.questionState) {

      const key = Object.keys(this.state.questionState)
      if (this.state.questionState[key] === 'succed') {
        return;
      }
      }
      const question = this.state.quiz[this.state.activeQuestion];
      const results = this.state.results

      if (question.rightAnswer === id) {
        //succed
        if(!results[question.id]){
          results[question.id] = "succed"
        }

        this.setState({
          questionState: { [id]: 'succed' },
          results
        });
        const timeout = window.setTimeout(() => {
          if (this.quizFinished()) {
            this.setState({
              isFinished:true
            })
          } else
            this.setState({
              activeQuestion: this.state.activeQuestion + 1,
              questionState: null,
            });
          window.clearInterval(timeout);
        }, 1000);
      } else {
        results[question.id] = "error"
        this.setState({
          questionState: { [id]: 'error' },
          results
        });
      }
      console.log(results);
    }
  retryHandler=()=>{
    this.setState({
      isFinished: false,
      activeQuestion: 0,
      results :{},
      questionState: {},})
    
  }

  quizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }
  render() {
    return (
      <div className={styles.Quiz}>
        <div className={styles.QuizWrapper}>
          <h1>Quiz</h1>
         { 
         this.state.isFinished ?

          <FinishedQuiz quiz={this.state.quiz} results={this.state.results} onRetry={this.retryHandler}/>:
          
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            rightAnswer={this.state.quiz[this.state.activeQuestion].rightAnswer}
            onClickHandler={this.onClickHandler}
            quizLength={this.state.quiz.length}
            activeQuestion={this.state.activeQuestion + 1}
            state={this.state.questionState}
          />
  }
        </div>
      </div>
    );
  }
}
export default Quiz;
