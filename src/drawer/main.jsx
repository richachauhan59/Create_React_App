import React from 'react'
import Drawer from './drawer'
import DrawerI from './drawerI'

export default class Main extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='main'>
        <Drawer className='item'>
          <DrawerI className='item' label='Inbox' icon='inbox.png' />
          <DrawerI
            className='item'
            label='Starred'
            icon='starred.png'
          />
          <DrawerI
            className='item'
            label='Send Email'
            icon='inbox.png'
          />
          <DrawerI
            className='item'
            label='Drafts'
            icon='starred.png'
          />
          <DrawerI
            className='item'
            label='Inbox'
            icon='inbox.png'
          />
        </Drawer>
      </div>
     

    )
  }
}
