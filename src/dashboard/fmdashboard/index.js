import { Layers } from '@material-ui/icons'
import React from 'react'
import './fmdashboard.css'
import { Label, Progress, Table } from 'semantic-ui-react'
import DashboardHeader from '../component/header'
import Adminsidebar from '../component/sidebar'
import jpgicon from './../imgs/jpg.svg'
import pdficon from './../imgs/pdf.svg'
const FileManagerDashboard = () => {
    return (
        <div>
            <div className="admin_dashboard">
                <Adminsidebar/>
                <div className="admin_right">
                    <DashboardHeader />
                    <div className="fmdb">
                         RECENT FILES
                            <ul>
                            <li>
                                    <img src={jpgicon} alt=""></img>
                                    <div className="fm_fileinfo">
                                        className.jpg
                                        <div className="fm_filesize">34kb</div>
                                        <span>  last Accessed : 15 minutes ago</span>
                                      
                                    </div>
                                </li>  <li>
                                    <img src={pdficon} alt=""></img>
                                    <div className="fm_fileinfo">
                                        className.pdf
                                        <div className="fm_filesize">34kb</div>
                                        <span>  last Accessed : 15 minutes ago</span>
                                      
                                    </div>
                                </li>  <li>
                                    <img src={jpgicon} alt=""></img>
                                    <div className="fm_fileinfo">
                                        className.jpg
                                        <div className="fm_filesize">34kb</div>
                                        <span>  last Accessed : 15 minutes ago</span>
                                      
                                    </div>
                                </li>
                                <li>
                                    <img src={pdficon} alt=""></img>
                                    <div className="fm_fileinfo">
                                        className.pdf
                                        <div className="fm_filesize">34kb</div>
                                        <span>  last Accessed : 15 minutes ago</span>
                                      
                                    </div>
                                </li>
                            </ul>
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
                                    <Table.HeaderCell>File Manager Access</Table.HeaderCell>
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
                                <Layers/>
                                   5</Table.Cell>
                                <Table.Cell><Progress percent={11} /></Table.Cell>
                                <Table.Cell>01/02/2021</Table.Cell>
                                <Table.Cell>
                                <div className="table_btn"> FileManager</div>
                                
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
                                <Layers/>
                                   5</Table.Cell>
                                <Table.Cell><Progress percent={11} /></Table.Cell>
                                <Table.Cell>01/02/2021</Table.Cell>
                                <Table.Cell>
                                <div className="table_btn"> FileManager</div>
                                
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
                                <Layers/>
                                   5</Table.Cell>
                                <Table.Cell><Progress percent={11} /></Table.Cell>
                                <Table.Cell>01/02/2021</Table.Cell>
                                <Table.Cell>
                                <div className="table_btn"> FileManager</div>
                                
                                </Table.Cell>
                            </Table.Body>
                           
                        
                        
                        </Table>
                    </div>
                    </div>
                    </div>
        </div>
    )
}

export default FileManagerDashboard
