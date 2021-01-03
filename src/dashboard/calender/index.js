import React, { useState } from 'react'
import DashboardHeader from '../component/header'
import './calender.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Avatar, Dialog, DialogContent, DialogTitle, Divider, TextField } from '@material-ui/core'
import myimg from './../imgs/old.JPG'
import timeGridPlugin from '@fullcalendar/timegrid';
import { Dropdown, Input } from 'semantic-ui-react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Quill from 'quill'
import Adminsidebar from '../component/sidebar'
import taskcategorydata from './../../dami-data/taskcategory'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { Cancel } from '@material-ui/icons'
import { Modal } from 'bootstrap'
const Calender = () => {
    const [newtaskname, setnewtaskname] = useState(undefined);
    const [newtasklocation, setnewtasklocation] = useState(" ");
    const [newtaskdescription, setnewtaskdescription] = useState(" ");
    const [newtaskassign, setnewtaskassign] = useState(" ");
    const [newtaskcategory, setnewtaskcategory] = useState(" ");
    const [newtaskfstdate, setnewtaskfstdate] = useState(" ");

    const calenderevents = [
        { title: 'event 1', date: '2020-12-10' },
        { title: 'event 1', date: '2020-12-25' },
        { title: 'event 2', start:'2020-12-08', end:'2020-12-17' }
    ]
    const [tasks, settasks] = useState(calenderevents)
    const [opencreatetaskmodel, setopencreatetaskmodel] = useState(false)
    const [quilltext, setquilltext] = useState('')
    const handlequillChange = (e) => {
        setquilltext(e);
        setnewtaskdescription(e);

    }

    const options = [
        { key: 1, text: 'Rakesh', value: 1 },
        { key: 2, text: 'Mohan', value: 2 },
        { key: 3, text: 'SOhan', value: 3 },
    ]
    const handlecreatetask = () => {
        settasks(
            [
                ...tasks, { title: newtaskname, date: newtaskfstdate }
            ]);
        setopencreatetaskmodel(false)


    }
    const renderEventContent = (eventInfo) => {
        return (
            <>
                <div className="task_calview">

                    <Avatar src={myimg} />
                    <span>{eventInfo.event.title}</span>
                </div>
            </>
        )
    }


    return (
        <>
            <div>
                <div className="admin_dashboard">
                    <Adminsidebar />
                    <div className="admin_right">
                        <DashboardHeader />
                        <div className="calender_dash">
                            <div className="taskboard_heading">
                                Calender
               </div>
                            <div className="calender_body">
                                <div className="calender_left">
                                    <div onClick={() => setopencreatetaskmodel(true)} className="create_task">
                                        + Create New
                    </div>
                                    <div className="exist_task">
                                        <div className="exist_tasktop">
                                            <span> Drag and drop your event or click in the calendar</span>
                                        </div>
                                        <div className="exist_taskbody">
                                            <ul>

                                                {taskcategorydata.map((task) => (<li style={{ backgroundColor: `${task.backgroundColor}`, color: `${task.color}` }}>
                                                    <div style={{ backgroundColor: `${task.color}` }} className="task_dot">

                                                    </div>
                                                    <div className="task_info">
                                                        {task.name}
                                                        <span style={{color:`${task.color}`}}>{task.tasks} Task</span>
                                                    </div>
                                                </li>))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="calender_right">
                                    <FullCalendar
                                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrapPlugin]}
                                        dateClick={() => setopencreatetaskmodel(true)}
                                        eventContent={renderEventContent}

                                        droppable={false}
                                        height={550}
                                        themeSystem='bootstrap'
                                        eventBackgroundColor="#fff"
                                        eventBorderColor="#fff"
                                        className="fullcalender"
                                        headerToolbar={{
                                            left: 'prev,next',
                                            center: 'title',
                                            right: 'dayGridMonth,dayGridWeek,timeGridDay'
                                        }}
                                        bootstrapFontAwesome={true}
                                        initialView="dayGridMonth"

                                        selectable={true}
                                       
                                        selectMirror={true}
                                        dayMaxEvents={false}

                                        events={tasks}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
                <Dialog  className='cal_dailog' 
                 aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
                open={opencreatetaskmodel}>
    
     
               
          
         
        
              <div className="task_modeltop">
                  <span>Task Name</span>
                  <Input fluid onChange={(e) => setnewtaskname(e.target.value)} placeholder='Search...' />
                  <span>Location</span>
                  <Input fluid onChange={(e) => setnewtasklocation(e.target.value)} placeholder='Search...' />
                  <span>Event Time Range</span>
                  <div className="task_modeldates">
                      <div className="task_modeldate">
                          <TextField
                              id="datetime-local"
                              label="From"
                              type="datetime-local"
                              defaultValue="2020-01-01T10:30"
                              onChange={(e) => setnewtaskfstdate(e.target.value)}
                             
                            
                              InputLabelProps={{
                                  shrink: true,
                              }}
                          />
                      </div>
                      <div className="task_modeldate">
                          <TextField
                         
                              label="To"
                              type="datetime-local"
                              defaultValue="2020-01-01T10:30"
                            
                              InputLabelProps={{
                                  shrink: true,
                              }}
                          /></div></div>

                  <span>Description</span>
                  <ReactQuill
                      value={quilltext}
                      height={200}
                      className="quill"
                      onChange={handlequillChange}
                  />


                  <span>Assign Someone</span>
                  <Dropdown
                      fluid
                      options={options}
                      placeholder='Choose an option'
                      selection
                      onChange={(e) => setnewtaskassign(e.target.value)}

                  />
                  <span>Choose a category</span>
                  <div className="task_modeltag">
                      <li 
                      style={{  backgroundColor:'#c6ebc9'}}
                      onClick={() => setnewtaskcategory('cat1')}>cat1</li>
                      <li
                      style={{   backgroundColor:'#efd9d1'}}
                       onClick={() => setnewtaskcategory('cat2')}>cat2</li>
                      <li
                      style={{   backgroundColor:'#999b84'}}
                       onClick={() => setnewtaskcategory('cat3')}>cat3</li>
                      <li
                      style={{   backgroundColor:'#f1f5c4'}}
                       onClick={() => setnewtaskcategory('cat4')}>cat4</li>
                      <li
                      style={{  backgroundColor:'#c6ebc9'}}
                       onClick={() => setnewtaskcategory('cat5')}>cat5</li>
                  </div>
              </div>
              <Divider />
              <div className="task_model_btns">
                  <button  style={{backgroundColor:"#6c757d"}} onClick={() => setopencreatetaskmodel(false)} >Close</button>
                  <button   onClick={handlecreatetask}>Save</button>
              </div>
     
        
    </Dialog>
        </>
    )
}

export default Calender
