
import React from 'react'
import ToolBar from './toolbar'
import DrawerItem from './drawerItem'
import SiteName from './sitename'

export default class Toolbar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='main'>
                <ToolBar>
                    <SiteName>
                        <DrawerItem label="SITENAME" />
                    </SiteName>
                    <DrawerItem label="About us" />
                    <DrawerItem label="Prices" />
                    <DrawerItem label="Other" />
                </ToolBar>
            </div>
        )
    }
}



