import { Avatar, Divider } from '@material-ui/core'
import { NotificationImportant, Settings } from '@material-ui/icons'
import React,{useState} from 'react'
import { Icon, Input } from 'semantic-ui-react'
import myimg from './../imgs/old.JPG'
import './chatroom.css'
import chatdata from './../../dami-data/chat'
import DashboardHeader from '../component/header'

const Chatroom = () => {

    const [chatmessages, setchatmessages] = useState(chatdata)
const [typemessage, settypemessage] = useState("")

const addmessage=(e)=>{
    e.preventDefault()
        setchatmessages(
       [
            ...chatmessages, {message:typemessage,   user:'sendmessage'}
        ]);
        settypemessage("");
}
const date = new Date().toLocaleTimeString();

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
                   <DashboardHeader/>
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
                                
                                <div className="chatbox_main">
                                    <div className="chatbox_chatbody">
                                    {chatmessages.map((chat)=>{
                                        return <div className={`chat_messagebox ${chat.user}`}>
                                        <Avatar src={myimg}/>
                                        <div className="chat_message">
                                        <span class="chat_username">User Name  <span className="chat_time"> {date}</span></span>
                                          <div className="message_text">  {chat.message}</div>

                                            </div>
                                    </div>
                                    })}
                                   
                                      
                                    </div>
                                    <div className="chatbox_member">
                                        <li className='list_head'>Group member</li>
                                        <li>
                                        <li>
                                            <div className="member_top">
                                                <Avatar src={myimg}/>
                                               <div className="chatmember_info">
                                                    <div className="grp_membername">
                                                       User name here
                                                    </div><div className="last_message">my last last_message</div>
                                               </div>
                                            </div>
                                            
                                        </li>     <li>
                                            <div className="member_top">
                                                <Avatar src={myimg}/>
                                               <div className="chatmember_info">
                                                    <div className="grp_membername">
                                                       User name here
                                                    </div><div className="last_message">my last last_message</div>
                                               </div>
                                            </div>
                                            
                                        </li>     <li>
                                            <div className="member_top">
                                                <Avatar src={myimg}/>
                                               <div className="chatmember_info">
                                                    <div className="grp_membername">
                                                       User name here
                                                    </div><div className="last_message">my last last_message</div>
                                               </div>
                                            </div>
                                            
                                        </li>     <li>
                                            <div className="member_top">
                                                <Avatar src={myimg}/>
                                               <div className="chatmember_info">
                                                    <div className="grp_membername">
                                                       User name here
                                                    </div><div className="last_message">my last last_message</div>
                                               </div>
                                            </div>
                                            
                                        </li>     <li>
                                            <div className="member_top">
                                                <Avatar src={myimg}/>
                                               <div className="chatmember_info">
                                                    <div className="grp_membername">
                                                       User name here
                                                    </div><div className="last_message">my last last_message</div>
                                               </div>
                                            </div>
                                            
                                        </li>     <li>
                                            <div className="member_top">
                                                <Avatar src={myimg}/>
                                               <div className="chatmember_info">
                                                    <div className="grp_membername">
                                                       User name here
                                                    </div><div className="last_message">my last last_message</div>
                                               </div>
                                            </div>
                                            
                                        </li>     <li>
                                            <div className="member_top">
                                                <Avatar src={myimg}/>
                                               <div className="chatmember_info">
                                                    <div className="grp_membername">
                                                       User name here
                                                    </div><div className="last_message">my last last_message</div>
                                               </div>
                                            </div>
                                            
                                        </li>     <li>
                                            <div className="member_top">
                                                <Avatar src={myimg}/>
                                               <div className="chatmember_info">
                                                    <div className="grp_membername">
                                                       User name here
                                                    </div><div className="last_message">my last last_message</div>
                                               </div>
                                            </div>
                                            
                                        </li>     <li>
                                            <div className="member_top">
                                                <Avatar src={myimg}/>
                                               <div className="chatmember_info">
                                                    <div className="grp_membername">
                                                       User name here
                                                    </div><div className="last_message">my last last_message</div>
                                               </div>
                                            </div>
                                            
                                        </li>

                                        </li>
                                    </div>
                                </div>
                               <div className="chatbox_input">
                                   <div className="chatbox_inputaddfile">
                                     <Icon size="large" name="add"></Icon>
                                   </div>
                                  <div className="chat_inputbox">
                                  <form onSubmit={addmessage}>
                                      <input  onChange={(e)=>settypemessage(e.target.value)} value={typemessage}  type='text' placeholder='Type Message...' />     </form>
                                  </div>
                                   <div className="chatinput_right">
                                     <Icon name="image"></Icon>
                                     <Icon name="gift"></Icon>
                                     <Icon name="smile outline"></Icon>
                                   </div>
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
