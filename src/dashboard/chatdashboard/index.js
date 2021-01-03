import React from 'react'
import './chatdashboard.css'
import DashboardHeader from '../component/header'
import Adminsidebar from '../component/sidebar'
import { Avatar, Divider, IconButton } from '@material-ui/core'
import { Checkbox, Dropdown, Icon, Image, Progress } from 'semantic-ui-react'
import myimg from './../imgs/old.JPG'
import { Label, Menu, Table } from 'semantic-ui-react'
import { AddCircle, Cancel } from '@material-ui/icons'
import LayersIcon from '@material-ui/icons/Layers';
const ChatDashboard = () => {
    return (
        <div>
          <div className="admin_dashboard">
                <Adminsidebar />
                <div className="admin_right">
                    <DashboardHeader />
                    <div className="taskboard">
                        <div className="taskboard_dbheading">
                            Chat Dashboard
                        </div>
                        <div className="taskboard_body">
                        <div className="chat_dbbox">
                       <div>
                            <Label ribbon>ProjectID</Label>
                       </div>
                        <ul>
                        <li><div className='chat_dbboxleft'>
                                   <Icon size='big'  name='users'></Icon> </div>
                                    <div className="chat_dbboxmid">
                                        <div className="grp_name">
                                            Rough group name 
                                            <div style={{ backgroundColor: 'purple' }} className="grp_tag">
                                            electric
                                </div>
                                </div>
                                       <div className="grp_lastmessage">hello my name is devi last mes...</div>
                                    </div>
                                    <div className="chat_dbboxright">
                                        Reply
                                    </div></li>
                                    <li><div className='chat_dbboxleft'>
                                   <Icon size='big'  name='users'></Icon> </div>
                                    <div className="chat_dbboxmid">
                                        <div className="grp_name">
                                            Rough group name 
                                            <div style={{ backgroundColor: 'purple' }} className="grp_tag">
                                            electric
                                </div>
                                </div>
                                       <div className="grp_lastmessage">hello my name is devi last mes...</div>
                                    </div>
                                    <div className="chat_dbboxright">
                                        Reply
                                    </div></li>
                        <li>
                      
                                <div className='chat_dbboxleft'>
                                   <Icon size='big'  name='users'></Icon> </div>
                                    <div className="chat_dbboxmid">
                                        <div className="grp_name">
                                            Rough group name 
                                            <div style={{ backgroundColor: 'purple' }} className="grp_tag">
                                            electric
                                </div>
                                </div>
                                       <div className="grp_lastmessage">hello my name is devi last mes...</div>
                                    </div>
                                    <div className="chat_dbboxright">
                                        Reply
                                    </div>
                               
                                    
                            
                        </li>
                        <li><div className='chat_dbboxleft'>
                                   <Icon size='big'  name='users'></Icon> </div>
                                    <div className="chat_dbboxmid">
                                        <div className="grp_name">
                                            Rough group name 
                                            <div style={{ backgroundColor: 'purple' }} className="grp_tag">
                                            electric
                                </div>
                                </div>
                                       <div className="grp_lastmessage">hello my name is devi last mes...</div>
                                    </div>
                                    <div className="chat_dbboxright">
                                        Reply
                                    </div></li>
                        <li><div className='chat_dbboxleft'>
                                   <Icon size='big'  name='users'></Icon> </div>
                                    <div className="chat_dbboxmid">
                                        <div className="grp_name">
                                            Rough group name 
                                            <div style={{ backgroundColor: 'purple' }} className="grp_tag">
                                            electric
                                </div>
                                </div>
                                       <div className="grp_lastmessage">hello my name is devi last mes...</div>
                                    </div>
                                    <div className="chat_dbboxright">
                                        Reply
                                    </div></li>
                        </ul>
                        </div> 
                        <div className="chat_dbbox">
                        <div>
                            <Label ribbon>ProjectID</Label>
                       </div>
                       <ul>
                       <li><div className='chat_dbboxleft'>
                                   <Icon size='big'  name='users'></Icon> </div>
                                    <div className="chat_dbboxmid">
                                        <div className="grp_name">
                                            Rough group name 
                                            <div style={{ backgroundColor: 'purple' }} className="grp_tag">
                                            electric
                                </div>
                                </div>
                                       <div className="grp_lastmessage">hello my name is devi last mes...</div>
                                    </div>
                                    <div className="chat_dbboxright">
                                        Reply
                                    </div></li>
                                    <li><div className='chat_dbboxleft'>
                                   <Icon size='big'  name='users'></Icon> </div>
                                    <div className="chat_dbboxmid">
                                        <div className="grp_name">
                                            Rough group name 
                                            <div style={{ backgroundColor: 'purple' }} className="grp_tag">
                                            electric
                                </div>
                                </div>
                                       <div className="grp_lastmessage">hello my name is devi last mes...</div>
                                    </div>
                                    <div className="chat_dbboxright">
                                        Reply
                                    </div></li>
                        <li>
                      
                                <div className='chat_dbboxleft'>
                                   <Icon size='big'  name='users'></Icon> </div>
                                    <div className="chat_dbboxmid">
                                        <div className="grp_name">
                                            Rough group name 
                                            <div style={{ backgroundColor: 'purple' }} className="grp_tag">
                                            electric
                                </div>
                                </div>
                                       <div className="grp_lastmessage">hello my name is devi last mes...</div>
                                    </div>
                                    <div className="chat_dbboxright">
                                        Reply
                                    </div>
                               
                                    
                            
                        </li>
                        <li><div className='chat_dbboxleft'>
                                   <Icon size='big'  name='users'></Icon> </div>
                                    <div className="chat_dbboxmid">
                                        <div className="grp_name">
                                            Rough group name 
                                            <div style={{ backgroundColor: 'purple' }} className="grp_tag">
                                            electric
                                </div>
                                </div>
                                       <div className="grp_lastmessage">hello my name is devi last mes...</div>
                                    </div>
                                    <div className="chat_dbboxright">
                                        Reply
                                    </div></li>
                        <li><div className='chat_dbboxleft'>
                                   <Icon size='big'  name='users'></Icon> </div>
                                    <div className="chat_dbboxmid">
                                        <div className="grp_name">
                                            Rough group name 
                                            <div style={{ backgroundColor: 'purple' }} className="grp_tag">
                                            electric
                                </div>
                                </div>
                                       <div className="grp_lastmessage">hello my name is devi last mes...</div>
                                    </div>
                                    <div className="chat_dbboxright">
                                        Reply
                                    </div></li>
                        </ul>
                        </div> 
                        <div className="chat_dbbox">
                        <div>
                            <Label ribbon>ProjectID</Label>
                       </div>
                       <ul>
                        <li>
                      
                                <div className='chat_dbboxleft'>
                                   <Icon size='big'  name='users'></Icon> </div>
                                    <div className="chat_dbboxmid">
                                        <div className="grp_name">
                                            Rough group name 
                                            <div style={{ backgroundColor: 'purple' }} className="grp_tag">
                                            electric
                                </div>
                                </div>
                                       <div className="grp_lastmessage">hello my name is devi last mes...</div>
                                    </div>
                                    <div className="chat_dbboxright">
                                        Reply
                                    </div>
                               
                                    
                            
                        </li>
                        <li><div className='chat_dbboxleft'>
                                   <Icon size='big'  name='users'></Icon> </div>
                                    <div className="chat_dbboxmid">
                                        <div className="grp_name">
                                            Rough group name 
                                            <div style={{ backgroundColor: 'purple' }} className="grp_tag">
                                            electric
                                </div>
                                </div>
                                       <div className="grp_lastmessage">hello my name is devi last mes...</div>
                                    </div>
                                    <div className="chat_dbboxright">
                                        Reply
                                    </div></li>
                        <li><div className='chat_dbboxleft'>
                                   <Icon size='big'  name='users'></Icon> </div>
                                    <div className="chat_dbboxmid">
                                        <div className="grp_name">
                                            Rough group name 
                                            <div style={{ backgroundColor: 'purple' }} className="grp_tag">
                                            electric
                                </div>
                                </div>
                                       <div className="grp_lastmessage">hello my name is devi last mes...</div>
                                    </div>
                                    <div className="chat_dbboxright">
                                        Reply
                                    </div></li>
                                    <li><div className='chat_dbboxleft'>
                                   <Icon size='big'  name='users'></Icon> </div>
                                    <div className="chat_dbboxmid">
                                        <div className="grp_name">
                                            Rough group name 
                                            <div style={{ backgroundColor: 'purple' }} className="grp_tag">
                                            electric
                                </div>
                                </div>
                                       <div className="grp_lastmessage">hello my name is devi last mes...</div>
                                    </div>
                                    <div className="chat_dbboxright">
                                        Reply
                                    </div></li>
                                    <li><div className='chat_dbboxleft'>
                                   <Icon size='big'  name='users'></Icon> </div>
                                    <div className="chat_dbboxmid">
                                        <div className="grp_name">
                                            Rough group name 
                                            <div style={{ backgroundColor: 'purple' }} className="grp_tag">
                                            electric
                                </div>
                                </div>
                                       <div className="grp_lastmessage">hello my name is devi last mes...</div>
                                    </div>
                                    <div className="chat_dbboxright">
                                        Reply
                                    </div></li>
                        </ul>
                        </div>
                        
                      </div>
                      </div>
                  
                    <div className="tskdb_table">
                        <Table celled>
                        
                            <Table.Header>
                        
                                <Table.Cell>
                                    <Label ribbon>Project Status</Label>
                                </Table.Cell>
                                <Table.Row>
                                    <Table.HeaderCell>Project ID</Table.HeaderCell>
                                    <Table.HeaderCell>Project Name</Table.HeaderCell>
                                    <Table.HeaderCell>Company Name</Table.HeaderCell>
                                    <Table.HeaderCell>Project Location</Table.HeaderCell>
                                    <Table.HeaderCell>Start Date</Table.HeaderCell>
                                    <Table.HeaderCell>Budget (INR)</Table.HeaderCell>
                                    <Table.HeaderCell>Task Left</Table.HeaderCell>
                                    <Table.HeaderCell>Status</Table.HeaderCell>
                                    <Table.HeaderCell>End Date</Table.HeaderCell>
                                    <Table.HeaderCell>Taskboard Access</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                        
                            <Table.Body>
                        
                        
                                <Table.Cell>
                                    <div className="table_projectid">
                                        <span></span>#ABSHD
                                    </div>
                                </Table.Cell>
                                <Table.Cell>Adminox Admin</Table.Cell>
                                <Table.Cell>Atmosis Studio</Table.Cell>
                                <Table.Cell>Delhi</Table.Cell>
                                <Table.Cell>11/12/2020</Table.Cell>
                                <Table.Cell>5 Cr.</Table.Cell>
                                <Table.Cell>
                                <LayersIcon style={{fontSize:'14px'}}/>
                                   5</Table.Cell>
                                <Table.Cell><Progress percent={11} /></Table.Cell>
                                <Table.Cell>01/02/2021</Table.Cell>
                                <Table.Cell>
                                <div className="table_btn"> Chat</div>
                                
                                </Table.Cell>
                            </Table.Body>
                            <Table.Body>
                        
                        
                                <Table.Cell>
                                    <div className="table_projectid">
                                        <span></span>#ABSHD
                                    </div>
                                </Table.Cell>
                                <Table.Cell>Adminox Admin</Table.Cell>
                                <Table.Cell>Atmosis Studio</Table.Cell>
                                <Table.Cell>Delhi</Table.Cell>
                                <Table.Cell>11/12/2020</Table.Cell>
                                <Table.Cell>5 Cr.</Table.Cell>
                                <Table.Cell>
                                <LayersIcon style={{fontSize:'14px'}}/>
                                   5</Table.Cell>
                                <Table.Cell><Progress percent={11} /></Table.Cell>
                                <Table.Cell>01/02/2021</Table.Cell>
                                <Table.Cell>
                                <div className="table_btn"> Chat</div>
                                
                                </Table.Cell>
                            </Table.Body>
                            <Table.Body>
                        
                        
                                <Table.Cell>
                                    <div className="table_projectid">
                                        <span></span>#ABSHD
                                    </div>
                                </Table.Cell>
                                <Table.Cell>Adminox Admin</Table.Cell>
                                <Table.Cell>Atmosis Studio</Table.Cell>
                                <Table.Cell>Delhi</Table.Cell>
                                <Table.Cell>11/12/2020</Table.Cell>
                                <Table.Cell>5 Cr.</Table.Cell>
                                <Table.Cell>
                                <LayersIcon style={{fontSize:'14px'}}/>
                                   5</Table.Cell>
                                <Table.Cell><Progress percent={11} /></Table.Cell>
                                <Table.Cell>01/02/2021</Table.Cell>
                                <Table.Cell>
                                <div className="table_btn"> Chat</div>
                                
                                </Table.Cell>
                            </Table.Body>
                           
                        
                        
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatDashboard
