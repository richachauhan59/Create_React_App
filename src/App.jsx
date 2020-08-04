import React from 'react'
import logo from './logo.svg'
import './App.css'
import Input from './component/input'
import TODO from './component/todo'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      task: '',
      todo: []
    }
  }

  handleChange = e => {
    this.setState({
      task: e.target.value
    })
  }

  handleSubmit = e => {
    this.setState(prevState => ({
      todo: [...prevState.todo, this.state.task]
    }))
  }

  handleChecked = e => {}

  render () {
    return (
      <div className='App'>
        <Input onChange={this.handleChange} onClick={this.handleSubmit} />
        <TODO value={this.state.todo} />
      </div>
    )
  }
}
