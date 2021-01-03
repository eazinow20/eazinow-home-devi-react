import React,{useState} from 'react'
import DashboardHeader from '../component/header'
import Adminsidebar from '../component/sidebar'
import SyncIcon from '@material-ui/icons/Sync';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import { Icon, Label, Table } from 'semantic-ui-react'
import LocalPrintshopRoundedIcon from '@material-ui/icons/LocalPrintshopRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Dropdown } from 'semantic-ui-react';
const InvoiceSubcontractor = () => {
        const [aditable, setaditable] = useState(false)


  const options = [
    { key: 1, text: 'Draft', value: 1 },
    { key: 2, text: 'Overdue', value: 2 },
    { key: 3, text: 'Paid', value: 3 },
    { key: 4, text: 'UnPaid', value: 4 },
  ]
  const  optionassign =[
    { key: 1, text: 'Accept', value: 1 },
    { key: 2, text: 'Reject', value: 2 },
  
  ]
  return (
    <div>
      <div className="admin_dashboard">
        <Adminsidebar />
        <div className="admin_right">
          <DashboardHeader />
          <div className="taskboard">
            <div className="taskboard_dbheading">
              Invoice Subcontractor
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
                  <center style={{ color: '#00A2ff', fontSize: "24px", fontweight: '800' }}>$31456</center>
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
                  <center style={{ color: '#ff5722', fontSize: "24px", fontweight: '800' }}>$31456</center>
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
                  <center style={{ color: '#ffc107f', fontSize: "24px", fontweight: '800' }}>$31456</center>
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
                  <center style={{ color: '#4caf50', fontSize: "24px", fontweight: '800' }}>$31456</center>
                </li>
              </div>
              <div className='ic_body' >
                <div className="ic_bodytop" >
                  Invoice list
                        </div>
                <div className="ic_bodybtn">
                  <ul>
                    <li><SyncIcon />  </li>
                    <li><GetAppRoundedIcon /></li>
                    <li><LocalPrintshopRoundedIcon />  </li>
                    <li><DeleteIcon /> </li>
                  </ul>
                  <ul>
                    <li>
                      <Dropdown text='All Invoice' options={options} simple item />
                    </li>
                    <li>
                      <Dropdown text='All Invoice' options={options} simple item />
                    </li>
                    <li
                      style={{
                        backgroundColor: '#64C5B1',
                        color: "white"
                      }}
                    >
                      <AddOutlinedIcon />
                    </li>
                  </ul>
                </div>
                <div className="ic_table">
                  <Table celled>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>NO</Table.HeaderCell>
                        <Table.HeaderCell>Date Created</Table.HeaderCell>
                        <Table.HeaderCell>Due Date</Table.HeaderCell>
                        <Table.HeaderCell>Bill To</Table.HeaderCell>
                        <Table.HeaderCell>Category</Table.HeaderCell>
                     
                        <Table.HeaderCell>Total(INR)</Table.HeaderCell>
                        <Table.HeaderCell>View/Download</Table.HeaderCell>
                        <Table.HeaderCell>Assign</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Pay</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      <Table.Row>
                        <Table.Cell ><div contentEditable={aditable} >asf1234</div> </Table.Cell>
                        <Table.Cell><div contentEditable={aditable} >Tue May 11 2020</div></Table.Cell>
                        <Table.Cell><div contentEditable={aditable} >Tue May 11 2020</div></Table.Cell>
                        <Table.Cell><div contentEditable={aditable} >ACCPVTASDFFGHJJJ</div></Table.Cell>
                        <Table.Cell><div contentEditable={aditable} >Electric</div></Table.Cell>
                        <Table.Cell><div  contentEditable={aditable}>1790756765767686</div></Table.Cell>
                        <Table.Cell><div  contentEditable={aditable}><GetAppRoundedIcon /></div></Table.Cell>
                        <Table.Cell><div  contentEditable={aditable}>GFJHFHFHG</div></Table.Cell>
                        <Table.Cell><div  contentEditable={aditable}>Pending</div></Table.Cell>
                        <Table.Cell> <div className="table_btn"> Pay</div></Table.Cell>
                      </Table.Row>
                   
                    </Table.Body>
                  </Table>
                  <div className="ic_tableadd">
                    Add
                                            </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoiceSubcontractor
