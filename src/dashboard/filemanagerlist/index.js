import React from 'react'
import './filemanagerlist.css'
import DashboardHeader from '../component/header'
import Adminsidebar from '../component/sidebar'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import DevicesIcon from '@material-ui/icons/Devices';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import jpgicon from './../imgs/jpg.svg'
import pdficon from './../imgs/pdf.svg'
import { Icon, Input, Progress, Table } from 'semantic-ui-react';
const FileManagerList = () => {
    return (
        <div>
             <div>
            <div className="admin_dashboard">
                <Adminsidebar/>
                <div className="admin_right">
                    <DashboardHeader />
                    <div className="flmngr">
                         <div className='fm_left'>
                            <div className="fm_lefttop">Upload file</div>
                            <ul>
                         <div className="fm_lsthd">MY DRIVE</div>   
                                <li><FolderOpenOutlinedIcon/> All Files</li>
                                <li><AccessTimeIcon/> Recents</li>
                                <li><DevicesIcon/> Devices</li>
                                <li><StarBorderIcon/> Important</li>
                                <li><DeleteOutlinedIcon/>  Deleted</li>
                            </ul> 
                            <ul>
                         <div className="fm_lsthd">LABELS</div>   
                                <li><div style={{backgroundColor: '#64C5B1'}} className="dot"></div> Work</li>
                                <li><div style={{backgroundColor: 'RED'}} className="dot"></div>Personal</li>
                                <li><div style={{backgroundColor: 'yellow'}} className="dot"></div>Family</li>
                                <li><div  style={{backgroundColor: 'pink'}} className="dot"></div>Friends</li>
                                <li><div style={{backgroundColor: 'blue'}} className="dot"></div>Others</li>
                            </ul>
                            <ul>
                            <div className="fm_lsthd">STORAGE USED</div> 
                           <li>125.6 GB used of 500GB</li> 
                           {/* <li> <Progress percent={33} /></li> */}
                            </ul>
                         </div>
                         <div className="fm_right">
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
                                </li>  <li>
                                    <img src={pdficon} alt=""></img>
                                    <div className="fm_fileinfo">
                                        className.pdf
                                        <div className="fm_filesize">34kb</div>
                                        <span>  last Accessed : 15 minutes ago</span>
                                      
                                    </div>
                                </li>
                            </ul>
                          
                           <div className="fm_search">
                                <Input size='small' placeholder='Search...' />
                           </div>
                           <div className="fm_table">
                           <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Created</Table.HeaderCell>
        <Table.HeaderCell>Modified</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Size</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    <Table.Row>
        <Table.Cell><Icon name='folder' /> React</Table.Cell>
        <Table.Cell>24/12/2020 (devi)</Table.Cell>
        <Table.Cell >25/12/2020 (devi)</Table.Cell>
        <Table.Cell >Pdf</Table.Cell>
        <Table.Cell >456MB</Table.Cell>
        <Table.Cell ><Icon name='delete' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><Icon name='file outline' /> index.json</Table.Cell>
        <Table.Cell>24/12/2020 (devi)</Table.Cell>
        <Table.Cell >25/12/2020 (devi)</Table.Cell>
        <Table.Cell >Json</Table.Cell>
        <Table.Cell >456MB</Table.Cell>
        <Table.Cell ><Icon name='delete' /></Table.Cell>
      </Table.Row> 
      <Table.Row>
        <Table.Cell><Icon name='file outline' /> index.json</Table.Cell>
        <Table.Cell>24/12/2020 (devi)</Table.Cell>
        <Table.Cell >25/12/2020 (devi)</Table.Cell>
        <Table.Cell >Json</Table.Cell>
        <Table.Cell >456MB</Table.Cell>
        <Table.Cell ><Icon name='delete' /></Table.Cell>
      </Table.Row>
     
    </Table.Body>
  </Table>
                         </div>
                         </div>


                    </div>
                    </div>

</div>        </div>
</div>
    )
}

export default FileManagerList;
