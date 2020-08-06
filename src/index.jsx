import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Main from './drawer/main'
import ToolBar from './toolbar/toolbarMain'
import Login from './ContextAPI/login'
import Theame from './ContextAPI/theame'

ReactDOM.render(
  <React.StrictMode>
<Theame>
    <Login>
      <App />
      <Main />
      <ToolBar />
    </Login>
</Theame>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change

// unregister() to register() below. Note this comes with some pitfalls.

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
