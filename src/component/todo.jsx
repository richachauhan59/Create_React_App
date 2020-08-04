import React from 'react'

export default class ToDo extends React.Component {
  render () {
    return (
      <>
        <h1>TODO</h1>
        {this.props.value.map(x => (
          <p>
            <input type='checkbox' />
            {x}
          </p>
        ))}
      </>
    )
  }
}
