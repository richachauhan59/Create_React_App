import React from 'react'
import logo from './logo.svg'
import './App.css'
import Input from './component/input'
import TODO from './component/todo'
import {v4 as uuid} from 'uuid' 
import { context} from './ContextAPI/login'
import { theamecontext} from './ContextAPI/theame'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      task: '',
      todo: []
    }
  }

checked= e =>{
  this.setState({

  })
}

  handleChange = e => {
    this.setState({
      task: e.target.value
    })
  }

  handleSubmit = e => {
    this.setState(prevState => ({
      todo: [...prevState.todo, {name:this.state.task, state: false, id: uuid(), editState:false, delete:false}]
    }))
  }

  handleDelete = e => {
    for(let i = 0 ; i < this.state.todo.length ; i++){
      if(this.state.todo[i].id === e.target.name ){
        var copy = Array.from(this.state.todo)
        copy[i].delete = copy[i].delete === true? false : true
        this.setState(
          (prevState) =>{
            return {
              todo:copy
            }
          }
        )
      }
    }
  }

  handleChecked = e=>{
    for (let i = 0; i < this.state.todo.length; i++) {
      if (this.state.todo[i].id === e.target.name) {
        var copy = Array.from(this.state.todo)
        copy[i].state = copy[i].state === true ? false : true
        this.setState(
          (prevState) => {
            return {
              todo: copy
            }
          }
        )
      }
    }
  }

  handleEdit = e => {
    for (let i = 0; i < this.state.todo.length; i++) {
      if (this.state.todo[i].id === e.target.name) {
        var copy = Array.from(this.state.todo)
       if (copy[i].editState=== true ){
         copy[i].name =  e.target.previousElementSibling.value
         copy[i].editState = false
       }
       else{
         copy[i].editState = true
       }
        this.setState(
          (prevState) => {
            return {
              todo: copy
            }
          }
        )
      }
    }
  }

   changeEdit = e => {
      this.setState({
        task: e.target.value
        
      })
    }

  
  render () {
    return (
      <div className='App'>
        <Input onChange={this.handleChange} onClick={this.handleSubmit} />
        <TODO value={this.state.todo} 
        checked={this.handleChecked} 
        edit={this.handleEdit} 
        delete={this.handleDelete} 
        changeEdit={this.changeEdit} />
        <context.Consumer>{(arg) => {return(<div>{(arg.isAuth) ? <p>User is logged in </p> : <p>User is logged out </p>} <button onClick={arg.handleAuth}> toggle </button> </div> )}}</context.Consumer>
        <theamecontext.Consumer>{(arg) => { return (<div>{(arg.theameChange) ? <div style={{ height: "600px", width: "100%", background: "black" }}></div> : <div style={{ height: "600px", width: "100%", background: "white" }}></div>} <button onClick={arg.handleAuth}> Theame Change </button> </div>) }}</theamecontext.Consumer>
      </div>
    )
  }
}
