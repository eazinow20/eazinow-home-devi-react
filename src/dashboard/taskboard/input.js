import { Avatar, Button, Divider } from '@material-ui/core'
import React, {useState} from 'react'
import { Checkbox, Icon, Image, Modal } from 'semantic-ui-react'
import DashboardHeader from '../component/header'
import './taskboard.css'
import myimg from './../imgs/old.JPG'
import Adminsidebar from '../component/sidebar'
const Taskboard = () => {
    const [openmodel, setopenmodel] = useState(false)
    return (
        <div>
        <div className="admin_dashboard">
               <Adminsidebar/>
                <div className="admin_right">
               
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
                                    <Icon size='large' name="rocketchat"></Icon>
                                   </div>
                                   <div onClick={()=>{setopenmodel(true)}} className="tsk_btn">
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
                       </div>  
                   </div>
                   </div>
                   <div className="task_container">
                   <div className="task_container_heading">
                       COMPLETED
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
                       </div>  
                   </div>
                   </div>
               </div>
              {openmodel? <div className="task_model">
                  <div className="task_modeltop">
                 <Avatar src={myimg}/><div className="task_modeluser">
                 
                 Devichand
                 <span>Assigned</span></div>
                  </div>
                  <div className="task_modelinfo">
                  Rough in Work
                  <div className="task_modelcat">
                      <span contentEditable style={{backgroundColor:'#000'}}> Electric</span> <Icon name="pencil"/>
                  </div>
                  </div>
                  <p contentEditable >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, illo, iste itaque voluptas corrupti ratione reprehenderit magni similique? Tempore, quos delectus asperiores libero voluptas quod perferendis! Voluptate, quod illo rerum? Lorem ipsum dolor sit amet.
                  </p>
                  <div  className="task_modeldates">
                  <div className="task_modeldate">
                  Start Date <span>22 March, 2020</span>
                  </div>
                   <div className="task_modeldate">
                  Due Date <div>
                      <span contentEditable >22 March, 2020</span><Icon name="pencil"/>
                  </div>
                  </div>
                  </div>
                  <div className="task_modelteam">
                       Team Members
                       <div className="task_modelmember">
                           <Avatar src={myimg}></Avatar>
                           <Avatar  src={myimg}/>
                           <Avatar  src={myimg}/>
                       </div>
                  </div>
                  <div className="task_attechedfile">
                  Atteched File
                  <div className="task_files">
                      <Image size='tiny' src={myimg}  />
                      <Image size='tiny' src={myimg}  />
                      <Image size='tiny' src={myimg}  />
                  </div>
                  </div>
                  <Divider/>
                  <div className="task_model_btns">
                  <button>Save Changes </button>
                  <button onClick={()=> setopenmodel(false)}>Cencal </button>
                  </div>
               </div>:""}
           </div>
        </div>
        </div>
        </div>
    )
}

export default Taskboard
