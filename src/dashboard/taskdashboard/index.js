import React, { useState } from 'react'
import DashboardHeader from '../component/header'
import Adminsidebar from '../component/sidebar'
import { Avatar, Divider, IconButton } from '@material-ui/core'
import { Checkbox, Dropdown, Icon, Image, Progress } from 'semantic-ui-react'
import myimg from './../imgs/old.JPG'
import { Label, Menu, Table } from 'semantic-ui-react'
import { AddCircle, Cancel } from '@material-ui/icons'
import LayersIcon from '@material-ui/icons/Layers';
import './taskdashboard.css'
const TaskDashboard = () => {
    const [openmodel, setopenmodel] = useState(false)

    return (
        <div>
            <div className="admin_dashboard">
                <Adminsidebar />
                <div className="admin_right">
                    <DashboardHeader />
                    <div className="taskboard">
                        <div className="taskboard_dbheading">
                            Taskboard Dashboard
                        </div>
                        <div className="taskboard_body">
                            <div className="task_container tskdb_container">
                                <div className="task_container_heading">
                                    UPCOMING
                                <span>Your awesome text goes here.</span>
                                <div className="task_box" style={{ backgroundColor: 'rgba(255,169,28,.1)' }}>
                                        <div className="task_boxtop">
                                            <div className="task_boxtopleft">Rough in Work
                                          <div style={{display:'flex',paddingTop:'2px'}}>
                                                <span style={{ backgroundColor: '#000',color:'#fff' }}>Electric</span>
                                                <span className="tsk_dbtag">P.ID : #ASDFGH</span>
                                          </div>
                                            </div>
                                            <Checkbox />
                                        </div>
                                        <div className="task_duedate">Due Task : <span>02 NOV, 2020</span> </div>
                                        <div className="task_boxbottom">
                                            <div className="assigned_user">
                                                <Avatar src={myimg} /><span> Devichand </span>
                                            </div>
                                            <div className="task_btns">
                                                <div className="tsk_btn">
                                                    <Icon size='large' name="rocketchat"></Icon>
                                                </div>
                                                <div onClick={() => { setopenmodel(true) }} className="tsk_btn">
                                                    Details
                                         </div>
                                            </div>
                                        </div>
                                    </div>    
                                    <div className="task_box" style={{ backgroundColor: 'rgba(255,169,28,.1)' }}>
                                        <div className="task_boxtop">
                                            <div className="task_boxtopleft">Rough in Work
                                          <div style={{display:'flex',paddingTop:'2px'}}>
                                                <span style={{ backgroundColor: '#000',color:'#fff' }}>Electric</span>
                                                <span className="tsk_dbtag">P.ID : #ASDFGH</span>
                                          </div>
                                            </div>
                                            <Checkbox />
                                        </div>
                                        <div className="task_duedate">Due Task : <span>02 NOV, 2020</span> </div>
                                        <div className="task_boxbottom">
                                            <div className="assigned_user">
                                                <Avatar src={myimg} /><span> Devichand </span>
                                            </div>
                                            <div className="task_btns">
                                                <div className="tsk_btn">
                                                    <Icon size='large' name="rocketchat"></Icon>
                                                </div>
                                                <div onClick={() => { setopenmodel(true) }} className="tsk_btn">
                                                    Details
                                         </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="task_container tskdb_container">
                                <div className="task_container_heading">
                                    IN PROGRESS
                       <span>Your awesome text goes here.</span>
                       <div className="task_box" style={{ backgroundColor: 'rgba(255,169,28,.1)' }}>
                                        <div className="task_boxtop">
                                            <div className="task_boxtopleft">Rough in Work
                                          <div style={{display:'flex',paddingTop:'2px'}}>
                                                <span style={{ backgroundColor: '#000',color:'#fff' }}>Electric</span>
                                                <span className="tsk_dbtag">P.ID : #ASDFGH</span>
                                          </div>
                                            </div>
                                            <Checkbox />
                                        </div>
                                        <div className="task_duedate">Due Task : <span>02 NOV, 2020</span> </div>
                                        <div className="task_boxbottom">
                                            <div className="assigned_user">
                                                <Avatar src={myimg} /><span> Devichand </span>
                                            </div>
                                            <div className="task_btns">
                                                <div className="tsk_btn">
                                                    <Icon size='large' name="rocketchat"></Icon>
                                                </div>
                                                <div onClick={() => { setopenmodel(true) }} className="tsk_btn">
                                                    Details
                                         </div>
                                            </div>
                                        </div>
                                    </div>    <div className="task_box" style={{ backgroundColor: 'rgba(255,169,28,.1)' }}>
                                        <div className="task_boxtop">
                                            <div className="task_boxtopleft">Rough in Work
                                          <div style={{display:'flex',paddingTop:'2px'}}>
                                                <span style={{ backgroundColor: '#000',color:'#fff' }}>Electric</span>
                                                <span className="tsk_dbtag">P.ID : #ASDFGH</span>
                                          </div>
                                            </div>
                                            <Checkbox />
                                        </div>
                                        <div className="task_duedate">Due Task : <span>02 NOV, 2020</span> </div>
                                        <div className="task_boxbottom">
                                            <div className="assigned_user">
                                                <Avatar src={myimg} /><span> Devichand </span>
                                            </div>
                                            <div className="task_btns">
                                                <div className="tsk_btn">
                                                    <Icon size='large' name="rocketchat"></Icon>
                                                </div>
                                                <div onClick={() => { setopenmodel(true) }} className="tsk_btn">
                                                    Details
                                         </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>   <div className="task_container tskdb_container">
                                <div className="task_container_heading">
                                    COMPLETED
                       <span>Your awesome text goes here.</span>
                       <div className="task_box" style={{ backgroundColor: 'rgba(255,169,28,.1)' }}>
                                        <div className="task_boxtop">
                                            <div className="task_boxtopleft">Rough in Work
                                          <div style={{display:'flex',paddingTop:'2px'}}>
                                                <span style={{ backgroundColor: '#000',color:'#fff' }}>Electric</span>
                                                <span className="tsk_dbtag">P.ID : #ASDFGH</span>
                                          </div>
                                            </div>
                                            <Checkbox />
                                        </div>
                                        <div className="task_duedate">Due Task : <span>02 NOV, 2020</span> </div>
                                        <div className="task_boxbottom">
                                            <div className="assigned_user">
                                                <Avatar src={myimg} /><span> Devichand </span>
                                            </div>
                                            <div className="task_btns">
                                                <div className="tsk_btn">
                                                    <Icon size='large' name="rocketchat"></Icon>
                                                </div>
                                                <div onClick={() => { setopenmodel(true) }} className="tsk_btn">
                                                    Details
                                         </div>
                                            </div>
                                        </div>
                                    </div>    <div className="task_box" style={{ backgroundColor: 'rgba(255,169,28,.1)' }}>
                                        <div className="task_boxtop">
                                            <div className="task_boxtopleft">Rough in Work
                                          <div style={{display:'flex',paddingTop:'2px'}}>
                                                <span style={{ backgroundColor: '#000',color:'#fff' }}>Electric</span>
                                                <span className="tsk_dbtag">P.ID : #ASDFGH</span>
                                          </div>
                                            </div>
                                            <Checkbox />
                                        </div>
                                        <div className="task_duedate">Due Task : <span>02 NOV, 2020</span> </div>
                                        <div className="task_boxbottom">
                                            <div className="assigned_user">
                                                <Avatar src={myimg} /><span> Devichand </span>
                                            </div>
                                            <div className="task_btns">
                                                <div className="tsk_btn">
                                                    <Icon size='large' name="rocketchat"></Icon>
                                                </div>
                                                <div onClick={() => { setopenmodel(true) }} className="tsk_btn">
                                                    Details
                                         </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                <LayersIcon/>
                                   5</Table.Cell>
                                <Table.Cell><Progress percent={11} /></Table.Cell>
                                <Table.Cell>01/02/2021</Table.Cell>
                                <Table.Cell>
                                <div className="table_btn"> Taskboard</div>
                                
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
                                <LayersIcon/>
                                   5</Table.Cell>
                                <Table.Cell><Progress percent={11} /></Table.Cell>
                                <Table.Cell>01/02/2021</Table.Cell>
                                <Table.Cell>
                                <div className="table_btn"> Taskboard</div>
                                
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
                                <LayersIcon/>
                                   5</Table.Cell>
                                <Table.Cell><Progress percent={11} /></Table.Cell>
                                <Table.Cell>01/02/2021</Table.Cell>
                                <Table.Cell>
                                <div className="table_btn"> Taskboard</div>
                                
                                </Table.Cell>
                            </Table.Body>
                           
                        
                        
                        </Table>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default TaskDashboard
