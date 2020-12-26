import { Divider, Icon } from '@material-ui/core'
import React from 'react'
import DateRangeIcon from '@material-ui/icons/DateRange';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import './adminsidebar.css'
import { Link } from 'react-router-dom';
const Adminsidebar = () => {
    return (
        <div>
             <div className='admin_sidebar'>
             <div className="admin_sbheader">
                 Eazinow
             </div>
                   <ui>
                        <li><Link to='/calendar'><span> <DateRangeIcon/></span> Calendar</Link></li>
                       
                        <li><Link to='/chatroom'><span><QuestionAnswerIcon/></span> Chatroom</Link></li>
                        <li><Link to='/taskboard'><span> <PlaylistAddCheckIcon/> </span>Task-Board</Link></li>
                   </ui>
                </div>
        </div>
    )
}

export default Adminsidebar
