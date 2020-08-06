import React from 'react'
import { createContext } from 'react'


const theamecontext = createContext()



export default class Theame extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            theameChange: false
        }
    }

    handleAuth = () => {
        if (this.state.theameChange === false) {
            this.setState({
                theameChange: true
            })
        }
        else {
            this.setState({
                theameChange: false
            })
        }
    }


    render() {
        var { theameChange } = this.state
        var { handleAuth } = this
        return (
            <theamecontext.Provider value={{ theameChange, handleAuth }}> {this.props.children} </theamecontext.Provider>

        )
    }
}

export { theamecontext }