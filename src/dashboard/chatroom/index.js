import { Avatar, Divider, Tooltip } from '@material-ui/core'
import { NotificationImportant, Settings } from '@material-ui/icons'
import React from 'react'
import { Icon, Input } from 'semantic-ui-react'
import myimg from './../imgs/old.JPG'
import './chatroom.css'

const Chatroom = () => {
    return (
        <>
            <div className="admin_dashboard">
                <div className='admin_sidebar'>
                    <li>Calendar</li>
                    <Divider />
                    <li>Chatroom</li>
                    <li>Task-Board</li>
                </div>
                <div className="admin_right">
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
                    <div className='chatroom'>
                        <div className="chat_left">
                            <div className="chat_lefthead">
                                Group Name <Icon name='angle down'></Icon>
                            </div>
                            <div className='group_list'>
                                <li className='list_head'>Direct Message</li>
                                <li><div className='grp_top'>
                                    <div className="grp_dp"><Icon size='big' color='teal' name='users'></Icon></div>
                                    <div className="grp_info">
                                        <div className="grp_name">
                                            Rough group name
                                </div>
                                        <div style={{ backgroundColor: 'purple' }} className="grp_tag">
                                            electric
                                </div>
                                    </div>
                                </div>
                                    <div className="grp_lastmessage">hello my name is devi last message...</div>
                                </li> <li><div className='grp_top'>
                                    <div className="grp_dp"><Icon size='big' color='teal' name='users'></Icon></div>
                                    <div className="grp_info">
                                        <div className="grp_name">
                                            Rough group name
                                </div>
                                        <div style={{ backgroundColor: 'teal' }} className="grp_tag">
                                            electric
                                </div>
                                    </div>
                                </div>
                                    <div className="grp_lastmessage">hello my name is devi last message...</div>
                                </li> <li><div className='grp_top'>
                                    <div className="grp_dp"><Icon size='big' color='teal' name='users'></Icon></div>
                                    <div className="grp_info">
                                        <div className="grp_name">
                                            Rough group name
                                </div>
                                        <div style={{ backgroundColor: 'red' }} className="grp_tag">
                                            electric
                                </div>
                                    </div>
                                </div>
                                    <div className="grp_lastmessage">hello my name is devi last message...</div>
                                </li>
                                <li><div className='grp_top'>
                                    <div className="grp_dp"><Icon size='big' color='teal' name='users'></Icon></div>
                                    <div className="grp_info">
                                        <div className="grp_name">
                                            Rough group name
                                </div>
                                        <div style={{ backgroundColor: '#484848' }} className="grp_tag">
                                            electric
                                </div>
                                    </div>
                                </div>
                                    <div className="grp_lastmessage">hello my name is devi last message...</div>
                                </li>  <li><div className='grp_top'>
                                    <div className="grp_dp"><Icon size='big' color='teal' name='users'></Icon></div>
                                    <div className="grp_info">
                                        <div className="grp_name">
                                            Rough group name
                                </div>
                                        <div style={{ backgroundColor: '#484848' }} className="grp_tag">
                                            electric
                                </div>
                                    </div>
                                </div>
                                    <div className="grp_lastmessage">hello my name is devi last message...</div>
                                </li>  <li><div className='grp_top'>
                                    <div className="grp_dp"><Icon size='big' color='teal' name='users'></Icon></div>
                                    <div className="grp_info">
                                        <div className="grp_name">
                                            Rough group name
                                </div>
                                        <div style={{ backgroundColor: '#484848' }} className="grp_tag">
                                            electric
                                </div>
                                    </div>
                                </div>
                                    <div className="grp_lastmessage">hello my name is devi last message...</div>
                                </li>  <li><div className='grp_top'>
                                    <div className="grp_dp"><Icon size='big' color='teal' name='users'></Icon></div>
                                    <div className="grp_info">
                                        <div className="grp_name">
                                            Rough group name
                                </div>
                                        <div style={{ backgroundColor: '#484848' }} className="grp_tag">
                                            electric
                                </div>
                                    </div>
                                </div>
                                    <div className="grp_lastmessage">hello my name is devi last message...</div>
                                </li>

                            </div>
                            <div className="chat_leftbottom">
                                <li><div className='grp_top'>
                                    <div className="grp_dp"><Icon size='big' color='teal' name='users'></Icon></div>
                                    <div className="grp_info">
                                        <div className="grp_name">
                                            Rough group name
                                </div>
                                        <div style={{ backgroundColor: '#484848' }} className="grp_tag">
                                            electric
                                </div>
                                    </div>
                                </div>

                                </li>
                                <li className="grp_icon"><Settings /></li>

                            </div>
                        </div>
                        <div className="chat_right">

                            <div className="chat_righthead">
                                Rough  Group Name
                        <div className="chatbox_headright">
                                    <li className="chat_headicon">
                                        <Icon size='large' color='teal' name='add user'></Icon>
                                    </li>
                                    <li className="chat_headicon">
                                        <Icon size='large' color='teal' name='users'></Icon>23
                           </li>
                                    <li>
                                        <Input size='mini' action={{ icon: 'search' }} placeholder='Search...' />
                                    </li>
                                    <li className="chat_headicon">
                                        <Icon size='large' color='teal' name='ellipsis vertical'></Icon>
                                    </li>
                                </div>
                            </div>
                            <div className="chatbox_bodycontainer">
                                
                                  <div className='chatbodytop'>
                                        <div className='chatbox_body'>
                                        dcdvdvdxfvdfv
                                        </div>
                                        <div className='grp_member'>
                                            <li className='list_head'>Group Members</li>
                                            <li><div className='grp_top'>
                                                <Avatar src={myimg} />
                                                <div className="grp_info">
                                                    <div className="grp_name">
                                                        Sohan
                                                    
                                                      </div>
                                              <div className="grp_lastmessage">hello my name is devi last message...</div>
                                                </div>
                                            </div>
                                                
                                            </li> 
                                        </div>
                                  </div>
                               
                                <div className="chat_inputbox">
                                    dfddgvr
                                </div>
                            </div>
                     </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Chatroom
