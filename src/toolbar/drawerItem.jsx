import React from 'react'

export default class DrawerItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
            return <span >{this.props.label}</span>
    }
}
