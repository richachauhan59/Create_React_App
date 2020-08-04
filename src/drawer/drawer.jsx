import React from 'react'

export default class Drawer extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return <div>{this.props.children}</div>
  }
}



// return <div>  {this.props.children}</div> // tooal bar
// return <span > {this.props.children} </span> // sitename
// return <span >{this.props.label}</span> // drawitem



