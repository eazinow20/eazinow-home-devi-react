import React from 'react'
import './invoicegenco.css'
import DashboardHeader from '../component/header'
import Adminsidebar from '../component/sidebar'
import SyncIcon from '@material-ui/icons/Sync';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import LayersIcon from '@material-ui/icons/Layers';
import {  Icon, Label,Table } from 'semantic-ui-react'
import {  Progress } from 'semantic-ui-react'
import LocalPrintshopRoundedIcon from '@material-ui/icons/LocalPrintshopRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Dropdown } from 'semantic-ui-react';
export const InvoiceGenCon = () => {
  

    const options = [
        { key: 1, text: 'Choice 1', value: 1 },
        { key: 2, text: 'Choice 2', value: 2 },
        { key: 3, text: 'Choice 3', value: 3 },
      ]
    return (
        <div>
             <div className="admin_dashboard">
                <Adminsidebar />
                <div className="admin_right">
                    <DashboardHeader />
                    <div className="taskboard">
                        <div className="taskboard_dbheading">
                            Invoice General Contractor
                        </div>
                        <div className="ic_body">
                        <div className="ic_topbox">
                        <li>
                            <CircularProgressbar
                             styles={buildStyles({
                                pathColor: `#00A2ff`,
    textColor: '#00A2ff',
    trailColor: '#f3f3f3',
    textSize: '16px',
     
    backgroundColor: '#00A2ff',
                             })}
                             value={30} 
                             text={`30`} />
                            <center>Total Invoice</center>
                            <center style={{color:'#00A2ff',fontSize:"24px",fontweight:'800'}}>$31456</center>
                       </li>  <li>
                            <CircularProgressbar
                             styles={buildStyles({
                                pathColor: `#ff5722`,
    textColor: '#ff5722',
    trailColor: '#f3f3f3',
    textSize: '16px',
     
    backgroundColor: '#ff5722',
                             })}
                             value={80} 
                             text={`80`} />
                            <center>Overdue</center>
                            <center style={{color:'#ff5722',fontSize:"24px",fontweight:'800'}}>$31456</center>
                       </li> 
                       <li>
                            <CircularProgressbar
                             styles={buildStyles({
                                pathColor: `#ffc107f`,
    textColor: '#ffc107f',
    trailColor: '#f3f3f3',
    textSize: '16px',
     
    backgroundColor: '#ffc107f',
                             })}
                             value={10} 
                             text={`10`} />
                            <center>Paid</center>
                            <center style={{color:'#ffc107f',fontSize:"24px",fontweight:'800'}}>$31456</center>
                       </li> 
                       <li>
                            <CircularProgressbar
                             styles={buildStyles({
                                pathColor: `#4caf50`,
    textColor: '#4caf50',
    trailColor: '#f3f3f3',
    textSize: '16px',
     
    backgroundColor: '#4caf50',
                             })}
                             value={50} 
                             text={`50`} />
                            <center>Unpaid</center>
                            <center style={{color:'#4caf50',fontSize:"24px",fontweight:'800'}}>$31456</center>
                       </li> 
                        </div>
                        <div className='ic_body' >
                       
                       
                        <div className="igc_table">
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
                            <div className="table_btn"> Invoice</div>
                            
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
                            <div className="table_btn"> Invoice</div>
                            
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
                            <div className="table_btn"> Invoice</div>
                            
                            </Table.Cell>
                        </Table.Body>
                       
                    
                    
                    </Table>
                    
                        </div>
                        
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
        </div>
    )
}
