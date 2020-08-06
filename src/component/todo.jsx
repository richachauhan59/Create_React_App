import React from 'react'

export default class ToDo extends React.Component {
  constructor(props) {
    super(props)
    
  }

 render() {
  var incomplete = this.props.value.filter(item => item.state === false) //[{},{delete}]
  var del = incomplete.filter(item => item.delete === false)
  var completed = this.props.value.filter(item=> item.state === true )
  
  return (
    <>
      <h1>TODO</h1>
      {del.map(x => {
        // console.log(x)
        return (<div key={x.id}>

          <input name={x.id} type='checkbox' onChange={this.props.checked} />
          {x.editState === true? <input type="text" onChange={this.props.changeEdit} ></input> : x.name}
          <button name={x.id} onClick={this.props.edit}>edit</button>
          <button name={x.id} onClick={this.props.delete} >delete</button>
        </div>)
      })}
      {completed.map(item =>{
        return (<div style={{
          textDecoration:"line-through"
        }}> {item.name} </div>)
      })}

    </>
  )
}
}
