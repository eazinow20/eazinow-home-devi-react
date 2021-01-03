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
                   <ul>
                        <li><Link to='/calendar'><span> <DateRangeIcon/></span> Calendar</Link></li>
                        <li><Link to='/calenderdashboard'><span> <DateRangeIcon/></span> Calendar Dashboard</Link></li>
                       
                       
                       
                        <li><Link to='/chatroom'><span><QuestionAnswerIcon/></span> Chatroom</Link></li>
                         <li><Link to='/chatdashboard'><span> <DateRangeIcon/></span> Chat Dashboard</Link></li>
                        <li><Link to='/taskboard'><span> <PlaylistAddCheckIcon/> </span>Task-Board</Link></li>
                        <li><Link to='/taskdashboard'><span> <DateRangeIcon/></span>Task Dashboard</Link></li>
                        <li><Link to="/invoicecreate"><span>Invoice Create      </span></Link>  </li>
                        <li><Link to="/invoiceclient"><span>Invoice Client       </span></Link>  </li>
                        <li><Link to="/invoicesubcontractor"><span>Invoice Subcontractor      </span></Link>  </li>
                        <li><Link to="/invoicegencontractor"><span>Invoice Gen Contractor     </span></Link>  </li>
                        <li><Link to="/invoiceclientgen"><span>Invoice Client(gen)    </span></Link>  </li>
                        <li><Link to="/invoicesubcongen"><span>Invoice Subcontractor(gen)    </span></Link>  </li>
                        <li><Link to="/filemanagergrid"><span>File Manager Grid    </span></Link>  </li>
                        <li><Link to="/filemanagerlist"><span>File Manager List   </span></Link>  </li>
                        <li><Link to="/filemanagerdashboard"><span>File Manager Dashboard   </span></Link>  </li>
                        
                   </ul>
                </div>
        </div>
    )
}

export default Adminsidebar
