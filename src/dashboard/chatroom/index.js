import { Avatar, Tooltip } from '@material-ui/core'
import { Add, NotificationImportant, PeopleAltOutlined, PersonAddOutlined, Settings } from '@material-ui/icons'
import React,{useState} from 'react'
import { Divider, Icon, Input } from 'semantic-ui-react'
import myimg from './../imgs/old.JPG'
import './chatroom.css'
import chatdata from './../../dami-data/chat'
import DashboardHeader from '../component/header'
import Adminsidebar from '../component/sidebar'

const Chatroom = () => {

    const [chatmessages, setchatmessages] = useState(chatdata)
    const [chat_docs, setchat_docs] = useState(undefined)
const [typemessage, settypemessage] = useState("")

const addmessage=(e)=>{
    e.preventDefault()
        setchatmessages(
       [
            ...chatmessages, {message:typemessage,docs:chat_docs}
        ]);
        settypemessage("");
        setchat_docs(undefined)
}
const date = new Date().toLocaleTimeString();

    return (
        <>
            <div className="admin_dashboard">
               <Adminsidebar/>
                <div className="admin_right">
                   <DashboardHeader/>
                    <div className='chatroom'>
                        <div className="chat_left">
                            <div className="chat_lefthead">
                                Task Name <Icon name='angle down'></Icon>
                            </div>
                            <div className='group_list'>
                                <li className='list_head'>Direct Message</li>
                                <li><div className='grp_top'>
                                    <div className="grp_dp"><Icon size='large' color='teal' name='users'></Icon></div>
                                    <div className="grp_info">
                                        <div className="grp_name">
                                            Rough group name
                                </div>
                                        <div style={{ backgroundColor: 'purple' }} className="grp_tag">
                                            electric
                                </div>
                                    </div>
                                </div>
                                    <div className="grp_lastmessage">hello my name is devi last mes...</div>
                                </li> <li><div className='grp_top'>
                                    <div className="grp_dp"><Icon size='large' color='teal' name='users'></Icon></div>
                                    <div className="grp_info">
                                        <div className="grp_name">
                                            Rough group name
                                </div>
                                        <div style={{ backgroundColor: 'teal' }} className="grp_tag">
                                            electric
                                </div>
                                    </div>
                                </div>
                                    <div className="grp_lastmessage">hello my name is devi last mes...</div>
                                </li> <li><div className='grp_top'>
                                    <div className="grp_dp"><Icon size='large' color='teal' name='users'></Icon></div>
                                    <div className="grp_info">
                                        <div className="grp_name">
                                            Rough group name
                                </div>
                                        <div style={{ backgroundColor: 'red' }} className="grp_tag">
                                            electric
                                </div>
                                    </div>
                                </div>
                                    <div className="grp_lastmessage">hello my name is devi last mes...</div>
                                </li>
                                <li><div className='grp_top'>
                                    <div className="grp_dp"><Icon size='large' color='teal' name='users'></Icon></div>
                                    <div className="grp_info">
                                        <div className="grp_name">
                                            Rough group name
                                </div>
                                        <div style={{ backgroundColor: '#484848' }} className="grp_tag">
                                            electric
                                </div>
                                    </div>
                                </div>
                                    <div className="grp_lastmessage">hello my name is devi last mes...</div>
                                </li>  <li><div className='grp_top'>
                                    <div className="grp_dp"><Icon size='large' color='teal' name='users'></Icon></div>
                                    <div className="grp_info">
                                        <div className="grp_name">
                                            Rough group name
                                </div>
                                        <div style={{ backgroundColor: '#484848' }} className="grp_tag">
                                            electric
                                </div>
                                    </div>
                                </div>
                                    <div className="grp_lastmessage">hello my name is devi last mes...</div>
                                </li>  
                            </div>
                            <div className="chat_leftbottom">
                                <li><div className='grp_top'>
                                    <div className="grp_dp"><Icon size='large' color='teal' name='users'></Icon></div>
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
                                      <PersonAddOutlined style={{color:'teal'}} />
                                    </li>
                                    <li style={{color:'teal'}} className="chat_headicon">
                                        <PeopleAltOutlined />23
                           </li>
                                    <li>
                                        <Input size='mini' action={{ icon: 'search' }} placeholder='Search...' />
                                    </li>
                                    <li className="chat_headicon">
                                        <Icon color='teal' name='ellipsis vertical'></Icon>
                                    </li>
                                </div>
                            </div>
                            <div className="chatbox_bodycontainer">
                                
                                <div className="chatbox_main">
                                    <div className="chatbox_chatbody">
                                    <Divider style={{fontSize:'10px'}} horizontal>{new Date().toLocaleDateString()}</Divider>
                                    {chatmessages.map((chat)=>{
                                        return <div className={`chat_messagebox ${chat.user}`}>
                                       
                                        <Avatar src={myimg}/>
                                        <div className="chat_message">
                                        <span class="chat_username">User Name at {date}</span>
                                          <div className="message_text">  {chat.message}</div>
                                         {chat.docs? <div className="chat_document"><a href={chat.docs} > Document<Icon name='file outline'></Icon> </a></div> :""}
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
                                   <div onClick={()=>setchat_docs(true)} className="chatbox_inputaddfile">
                                   
                                   <label for='filelab' ><Add/>  </label>
                                   <input id='filelab' className="file_input" type='file' ></input> 
                                   </div>
                                  <div className="chat_inputbox">
                                  <form onSubmit={addmessage}>
                                      <input  onChange={(e)=>settypemessage(e.target.value)} value={chat_docs? 'Document': typemessage}  type='text' placeholder='Message...' />     </form>
                                  </div>
                                   <div className="chatinput_right">
                                     <Icon size="large" name="image"></Icon>
                                   
                                     <Icon size="large" name="smile outline"></Icon>
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
