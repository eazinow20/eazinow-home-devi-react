import { Avatar, Button, Dialog, Divider, IconButton, Popover, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Checkbox, Icon, Image, Modal } from 'semantic-ui-react'
import DashboardHeader from '../component/header'
import './taskboard.css'
import myimg from './../imgs/old.JPG'
import Adminsidebar from '../component/sidebar'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import Menu from '@material-ui/core/Menu';
import { Dropdown } from 'semantic-ui-react'
// const getItems = (count, offset = 0) =>
//   Array.from({ length: count }, (v, k) => k).map(k => ({
//     id: `item-${k + offset}-${new Date().getTime()}`,
//     content: `item ${k + offset}`
//   }));

// const reorder = (list, startIndex, endIndex) => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   return result;
// };

// /**
//  * Moves an item from one list to another list.
//  */
// const move = (source, destination, droppableSource, droppableDestination) => {
//   const sourceClone = Array.from(source);
//   const destClone = Array.from(destination);
//   const [removed] = sourceClone.splice(droppableSource.index, 1);

//   destClone.splice(droppableDestination.index, 0, removed);

//   const result = {};
//   result[droppableSource.droppableId] = sourceClone;
//   result[droppableDestination.droppableId] = destClone;

//   return result;
// };
// const grid = 8;

// const getItemStyle = (isDragging, draggableStyle) => ({
//   // some basic styles to make the items look a bit nicer
//   userSelect: "none",
//   padding: grid * 2,
//   margin: `0 0 ${grid}px 0`,

//   // change background colour if dragging


//   // styles we need to apply on draggables
//   ...draggableStyle
// });
// const getListStyle = isDraggingOver => ({

//   padding: grid,
//   width: 250
// });
const Taskboard = () => {
    const [openmodel, setopenmodel] = useState(false)
    // const [state, setState] = useState([getItems(4), getItems(2,2),getItems(2,2)]);

    // function onDragEnd(result) {
    //   const { source, destination } = result;

    //   // dropped outside the list
    //   if (!destination) {
    //     return;
    //   }
    //   const sInd = +source.droppableId;
    //   const dInd = +destination.droppableId;

    //   if (sInd === dInd) {
    //     const items = reorder(state[sInd], source.index, destination.index);
    //     const newState = [...state];
    //     newState[sInd] = items;
    //     setState(newState);
    //   } else {
    //     const result = move(state[sInd], state[dInd], source, destination);
    //     const newState = [...state];
    //     newState[sInd] = result[sInd];
    //     newState[dInd] = result[dInd];

    //     setState(newState.filter(group => group.length));
    //   }
    // }
    return (
        <div>
            <div className="admin_dashboard">
                <Adminsidebar />
                <div className="admin_right">

                    <DashboardHeader />
                    <div className="taskboard">
                        <div className="taskboard_heading">
                            Taskboard
               </div>
                        <div className="taskboard_body">
                            <div className="task_container">
                                <div className="task_container_heading">
                                    UPCOMING
                       <span>Your awesome text goes here.</span>
                                    <div className="task_box" style={{ backgroundColor: 'rgba(255,169,28,.1)' }}>
                                        <div className="task_boxtop">
                                            <div className="task_boxtopleft">Rough in Work
                                   <span style={{ backgroundColor: '#000' }}>Electric</span>
                                            </div>
                                            <Checkbox />
                                        </div>
                                        <div className="task_duedate">Due Task :<span>02 NOV, 2020</span> </div>
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
                            </div>   <div className="task_container">
                                <div className="task_container_heading">
                                    UPCOMING
                       <span>Your awesome text goes here.</span>
                                    <div className="task_box" style={{ backgroundColor: 'rgba(255,169,28,.1)' }}>
                                        <div className="task_boxtop">
                                            <div className="task_boxtopleft">Rough in Work
                                   <span style={{ backgroundColor: '#000' }}>Electric</span>
                                            </div>
                                            <Checkbox />
                                        </div>
                                        <div className="task_duedate">Due Task :<span>02 NOV, 2020</span> </div>
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
                            </div>   <div className="task_container">
                                <div className="task_container_heading">
                                    UPCOMING
                       <span>Your awesome text goes here.</span>
                                    <div className="task_box" style={{ backgroundColor: 'rgba(255,169,28,.1)' }}>
                                        <div className="task_boxtop">
                                            <div className="task_boxtopleft">Rough in Work
                                   <span style={{ backgroundColor: '#000' }}>Electric</span>
                                            </div>
                                            <Checkbox />
                                        </div>
                                        <div className="task_duedate">Due Task :<span>02 NOV, 2020</span> </div>
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
                                   <span style={{ backgroundColor: '#000' }}>Electric</span>
                                            </div>
                                            <Checkbox />
                                        </div>
                                        <div className="task_duedate">Due Task :<span>02 NOV, 2020</span> </div>
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
                                   <span style={{ backgroundColor: '#000' }}>Electric</span>
                                            </div>
                                            <Checkbox />
                                        </div>
                                        <div className="task_duedate">Due Task :<span>02 NOV, 2020</span> </div>
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
                                   <span style={{ backgroundColor: '#000' }}>Electric</span>
                                            </div>
                                            <Checkbox />
                                        </div>
                                        <div className="task_duedate">Due Task :<span>02 NOV, 2020</span> </div>
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
                                   <span style={{ backgroundColor: '#000' }}>Electric</span>
                                            </div>
                                            <Checkbox />
                                        </div>
                                        <div className="task_duedate">Due Task :<span>02 NOV, 2020</span> </div>
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
                                   <span style={{ backgroundColor: '#000' }}>Electric</span>
                                            </div>
                                            <Checkbox />
                                        </div>
                                        <div className="task_duedate">Due Task :<span>02 NOV, 2020</span> </div>
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


                            {/* <div  style={{display:'flex'}}  >
                   
        <DragDropContext onDragEnd={onDragEnd}>
          {state.map((el, ind) => (
            <Droppable key={ind} droppableId={`${ind}`}>
              {(provided) => (
                  
                <div
                  ref={provided.innerRef}
                 className="task_srtb"
                  {...provided.droppableProps}
                >
                 <div className="task_container">
                   <div className="task_container_heading">
                       COMPLETED
                       <span>Your awesome text goes here.</span>
                  {el.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
    
                      {(provided, snapshot) => (
                          
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}

                        >
                    
                         
                             <div 
                             ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                              className="task_box" style={{backgroundColor:'rgba(255,169,28,.1)'}}>
                              
                           <div className="task_boxtop">
                               <div className="task_boxtopleft">Rough in Work
                                   <span style={{backgroundColor:'#000'}}>Electric</span>
                               </div>
                               <Checkbox />
                           </div>
                           <div className="task_duedate">Due Task : <span>02 NOV, 2020</span> </div>
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
                    
                      )}
                    </Draggable>
                  ))}
                  </div>
                   </div> 
                </div>
              )}
            </Droppable>
          ))}
          
        </DragDropContext>
      </div> */}




                        </div>

                    </div>
                </div>
            </div>
            <Dialog className='task_dailog'
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                open={openmodel}>
<div className="task_modeltop">
    
                    <div className="tsk_mdltop"  >
                        <Avatar src={myimg} />
                        <div className="task_modeluser">
    
                            <Dropdown text='Devichand'>
                                <Dropdown.Menu>
    
                                    <Dropdown.Item text='Ram' />
                                    <Dropdown.Item text='Mohan' />
                                    <Dropdown.Item text='Sohan' />
    
    
    
                                </Dropdown.Menu>
                            </Dropdown>
                            <span>Assigned</span></div>
                    </div>
                    <div className="task_modelinfo">
                        Rough in Work
                      <div className="task_modelcat">
                           <Dropdown text='Electric'>
                                <Dropdown.Menu>
    
                                    <Dropdown.Item text='Painting' />
                                    <Dropdown.Item text='Kitchen' />
                                    <Dropdown.Item text='Others' />
    
    
    
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <p contentEditable >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, illo, iste itaque voluptas corrupti ratione reprehenderit magni similique? Tempore, quos delectus asperiores libero voluptas quod perferendis! Voluptate, quod illo rerum? Lorem ipsum dolor sit amet.
                      </p>
                    <div className="task_modeldates">
                        <div className="task_modeldate">
                            Start Date  <TextField
                         
                           disabled
                         type="datetime-local"
                         defaultValue="2020-01-01T10:30"
                       
                         InputLabelProps={{
                             shrink: true,
                         }}
                     />
                        </div>
                        <div className="task_modeldate">
                            Due Date <div>
                            <div className="task_modeldate">
                          <TextField
                         
                           
                              type="datetime-local"
                              defaultValue="2020-01-01T10:30"
                            
                              InputLabelProps={{
                                  shrink: true,
                              }}
                          /></div>
                            </div>
                        </div>
                    </div>
                    <div className="task_modelteam">
                        Team Members
                           <div className="task_modelmember">
                            <Avatar src={myimg}></Avatar>
    
                            <Avatar src={myimg} />
                            <Avatar src={myimg} />
                            <IconButton > <AddCircleIcon /></IconButton>
    
                        </div>
                    </div>
                    <div className="task_attechedfile">
                        Attached File
                      <div className="task_files">
                            <Image size='mini' src={myimg} />
                            <Image size='mini' src={myimg} />
                            <Image size='mini' src={myimg} />
                        </div>
                    </div>
    
    
    
    
    
</div>
                <Divider />
                <div className="task_model_btns">
                    <button style={{ backgroundColor: "#6c757d" }} onClick={() => setopenmodel(false)} >Close</button>
                    <button   >Save</button>
                </div>


            </Dialog>
        </div>
    )
}

export default Taskboard
