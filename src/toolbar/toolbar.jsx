import React from 'react'

export default class Toolbar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return <div className="toolbar">  {this.props.children}</div>
    }
}
