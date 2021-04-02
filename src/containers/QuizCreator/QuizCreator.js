import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import styles from './QuizCreator.module.css';
import {createControl, isFormValid, isValid} from './creatorFunctions'
import Auxiliary from '../../HOC/Auxiliary/Auxiliary';
import Select from '../../components/UI/Select/Select';

function createOptionsControl(number){

  return createControl({
    label:`Вариант ${number}`,
    id:number,
    errorMessage:'Значение не может быть пустым'},
    {required:true})
}

function createFormControls (){
  return {
    question:createControl({
      label:"Введите вопрос",
      errorMessage:'Вопрос не может быть пустым'},
      {required:true}),
    option1:createOptionsControl(1),
    option2:createOptionsControl(2),
    option3:createOptionsControl(3),
    option4:createOptionsControl(4),
  }
}
class QuizCreator extends Component {
  state = {
    quiz :[],
    rightAnswer :1,
    isFormValid:false,
    formControls:createFormControls()
  }
  InputHandler(event,controlName){
   const  formControls= {...this.state.formControls}
  const control = {...formControls[controlName]}
  control.touched = true
  control.value = event.target.value
  control.valid = isValid(control.value,control.validation)

  formControls[controlName] = control
   this.setState({
    formControls,
    isFormValid:isFormValid(formControls)
  })
}

  
  selectHandler=event=>{
    this.setState({
      rightAnswer:+event.target.value
    })
   
  }
  renderInputs () {
    console.log('render')
    return Object.keys(this.state.formControls).map((controlName, index)=>{
      const control = this.state.formControls[controlName];
      return(
        <Auxiliary key = {controlName + index}>
        <Input
          valid={control.valid}
          value= {control.value}
          shouldValidate={!!control.validation}
          touched={control.touched}
          
          errorMessage = {control.errorMessage}
          id = {control.id}
          label={control.label}
          onChange={event=>this.InputHandler(event,controlName)}
        
        />
        {index === 0 ? <hr/>:null}
        </Auxiliary>
      )
    })
  }
  QuestionHandler = (event) => {
    console.log('i am in questionHandler!')
    console.log('Quiz in questionhandler', this.state.quiz)
    event.preventDefault()
    const quiz = this.state.quiz.concat()
    const index= quiz.length+1
    const {question,option1, option2,option3, option4} = this.state.formControls
    const questionItem={
    rightAnswerID:this.state.rightAnswer,
    question:question.value,
    id:index,
    answers:[
      {text:option1.value, id:option1.id,},
      {text:option2.value, id:option2.id,},
      {text:option3.value, id:option3.id,},
      {text:option4.value, id:option4.id,},
    ]
    }
    console.log('i have made answers!', questionItem)
    quiz.push(questionItem)
    console.log('Quiz look so', quiz)
    this.setState({
      quiz,
      rightAnswer :1,
      isFormValid:false,
      formControls:createFormControls()
    })

  
  
  };
  CreateHandler = (event) => {
    event.preventDefault()
  console.log('Quiz', this.state.quiz)
  };
  render() {
    return (
      <div className={styles.QuizCreator}>
        <div>
          <h1>QuizCreator</h1>
          <form onSubmit={this.submitHandler}>
            {this.renderInputs()} 
            <Select label="Выберите правильный вариант"
            value={this.state.rightAnswer}
            onChange={this.selectHandler}
            options={
              [
                {text:'1',value:1},
                {text:'2',value:2},
                {text:'3',value:3},
                {text:'4',value:4},
              ]
            }

            
            />
            <Button onClick={this.QuestionHandler} disabled={!this.state.isFormValid}>Добавить вопрос</Button>
            <Button onClick={this.CreateHandler} >Создать тест</Button>
          </form>
        </div>
      </div>
    );
  }
}
export default QuizCreator;
