import { Avatar } from '@material-ui/core'
import { NotificationImportant, Settings } from '@material-ui/icons'
import React from 'react'
import { Icon, Input } from 'semantic-ui-react'
import myimg from './../../imgs/old.JPG'
import './header.css'
const DashboardHeader = () => {
    return (
        <div>
             <div className="navbar">
                        <div className="navbar_left"><Icon size='large' color='#fff' name='sidebar'></Icon>
                            <Input icon placeholder='Search...'>
                                <input />
                                <Icon name='search' />
                            </Input>
                        </div>
                        <div className="navbar_right">
                            <li>
                                <NotificationImportant />
                            </li>

                            <li>
                                <Avatar src={myimg} />
                            </li>
                            <li className="user_name">Dev inikhiya</li>
                            <li>
                                <Settings />
                            </li></div>
                    </div>
        </div>
    )
}

export default DashboardHeader
