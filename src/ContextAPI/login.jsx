import React from 'react'
import { createContext } from 'react'


const context = createContext()



export default class Login extends React.Component {
    constructor(props){
        super(props)

        this.state={
            isAuth: false
        }
    }

    handleAuth = () => {
        if(this.state.isAuth === false){
            this.setState( {
                isAuth: true
            })
        }
        else{
            this.setState({
                isAuth: false
            })
        }
    }


    render(){
        var { isAuth } = this.state
        var { handleAuth} = this
        return(
            <context.Provider  value={{isAuth, handleAuth }}> {this.props.children} </context.Provider>

        )
    }
}

export {context}