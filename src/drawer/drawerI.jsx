import React from 'react'

export default class DrawerI extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="draw">
                <span style={{paddingTop:"20px"}}><img
                    style={{
                        width: '50px',
                        height:'50px'
                    }}
                    src={this.props.icon}
                /></span>
               {this.props.label}
            </div>
        )
    }
}
