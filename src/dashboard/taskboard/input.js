import { Avatar } from '@material-ui/core'
import React from 'react'
import { Checkbox, Icon } from 'semantic-ui-react'
import DashboardHeader from '../component/header'
import './taskboard.css'
import myimg from './../imgs/old.JPG'
const Taskboard = () => {
    return (
        <div>
           <DashboardHeader/>
           <div className="taskboard">
               <div className="taskboard_heading">
                   Taskboard
               </div>
               <div className="taskboard_body">
                   <div className="task_container">
                   <div className="task_container_heading">
                       UPCOMING
                       <span>Your awesome text goes here.</span>
                       <div className="task_box" style={{backgroundColor:'rgba(255,169,28,.1)'}}>
                           <div className="task_boxtop">
                               <div className="task_boxtopleft">Rough in Work
                                   <span style={{backgroundColor:'#000'}}>Electric</span>
                               </div>
                               <Checkbox />
                           </div>
                           <div className="task_duedate">Due Task :<span>02 NOV, 2020</span> </div>
                           <div className="task_boxbottom">
                               <div className="assigned_user">
                                   <Avatar src={myimg}/><span> Devichand </span>
                               </div>
                               <div className="task_btns">
                               <div className="tsk_btn">
                                    <Icon name="rocketchat"></Icon>
                                   </div>
                                   <div className="tsk_btn">
                                       Details
                                   </div>
                               </div>
                           </div>
                       </div>   <div className="task_box" style={{backgroundColor:'rgba(50,200,97,.1)'}}>
                           <div className="task_boxtop">
                               <div className="task_boxtopleft">Rough in Work
                                   <span style={{backgroundColor:'#000'}}>Electric</span>
                               </div>
                               <Checkbox />
                           </div>
                           <div className="task_duedate">Due Task :<span>02 NOV, 2020</span> </div>
                           <div className="task_boxbottom">
                               <div className="assigned_user">
                                   <Avatar src={myimg}/><span> Devichand </span>
                               </div>
                               <div className="task_btns">
                               <div className="tsk_btn">
                                    <Icon name="rocketchat"></Icon>
                                   </div>
                                   <div className="tsk_btn">
                                       Details
                                   </div>
                               </div>
                           </div>
                       </div>   <div className="task_box" style={{backgroundColor:'rgba(255,169,28,.1)'}}>
                           <div className="task_boxtop">
                               <div className="task_boxtopleft">Rough in Work
                                   <span style={{backgroundColor:'#000'}}>Electric</span>
                               </div>
                               <Checkbox />
                           </div>
                           <div className="task_duedate">Due Task :<span>02 NOV, 2020</span> </div>
                           <div className="task_boxbottom">
                               <div className="assigned_user">
                                   <Avatar src={myimg}/><span> Devichand </span>
                               </div>
                               <div className="task_btns">
                               <div className="tsk_btn">
                                    <Icon name="rocketchat"></Icon>
                                   </div>
                                   <div className="tsk_btn">
                                       Details
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   </div>
                   <div className="task_container">
                   <div className="task_container_heading">
                       INPROGRESS
                       <span>Your awesome text goes here.</span>
                   </div>
                   </div>
                   <div className="task_container">
                   <div className="task_container_heading">
                       COMPLETED
                       <span>Your awesome text goes here.</span>
                   </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Taskboard
