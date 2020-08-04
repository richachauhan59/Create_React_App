import React from 'react'

export default class Sitename extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <span >{this.props.children}</span>
        
    }
}
