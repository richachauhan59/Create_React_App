import React, { Component } from 'react'

export default class Input extends React.Component {
  render () {
    return (
      <div>
        <input
          type='text'
          placeholder='Enter todo'
          onChange={this.props.onChange}
        />
        <button onClick={this.props.onClick}>ADD</button>
      </div>
    )
  }
}
