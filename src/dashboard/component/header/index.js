import { Avatar } from '@material-ui/core'
import {NotificationImportantOutlined, Settings, SettingsOutlined } from '@material-ui/icons'
import React,{useState} from 'react'
import { Flag, Icon, Input } from 'semantic-ui-react'
import myimg from './../../imgs/old.JPG'
import './header.css'
const DashboardHeader = () => {
    const [hour, sethour] = useState(new Date().getHours())
    const [minute, setminute] = useState(new Date().getMinutes())
  const [date, setdate] = useState(new Date().getDate())
  const [mnth, setmnth] = useState(new Date().getMonth())
  const [year, setyear] = useState(new Date().getFullYear())

  var addzero =""
  if(minute.length===1){
              addzero = 0
  }
  const month =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep', 'Oct', 'Nov', 'Dec']
    setInterval(() => {
        sethour(new Date().getHours());
         setminute(new Date().getMinutes());
        setdate(new Date().getDate());
        setmnth(new Date().getMonth());
        setyear(new Date().getFullYear());
    }, 1000);
    return (
        <div>
             <div className="navbar">
                        <div className="navbar_left"><Icon size='large'  name='sidebar'></Icon>
                            <Input icon  placeholder='Search...'>
                                <input  />
                                <Icon name='search' />
                            </Input>
                        </div>
                        <div style={{fontSize:'22px'}} className="navbar_mid">{date} {month[mnth]}  {year}, {hour}:{addzero}{minute} am</div>
                        <div className="navbar_right">
                        <li>
                        <Flag size name='india' />
                            </li><li>
                                <NotificationImportantOutlined />
                            </li>

                            <li>
                                <Avatar src={myimg} />
                            </li>
                            <li className="user_name">Dev inikhiya</li>
                            <li>
                                <SettingsOutlined />
                            </li></div>
                    </div>
        </div>
    )
}

export default DashboardHeader
