import { Delete } from '@material-ui/icons'
import React,{useState} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { Icon, Input, Table } from 'semantic-ui-react'
import DashboardHeader from '../component/header'
import Adminsidebar from '../component/sidebar'
import './invoicecreate.css'
const InvoiceCreate = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <div className="admin_dashboard">
                <Adminsidebar />
                <div className="admin_right">
                    <DashboardHeader />
                    <div className="taskboard">
                        <div className="taskboard_heading">
                            Invoice Create
                        </div>
                        <div className="iccreate_body">
                            <div className="iccreate_top">
                                Eazinow
                        </div>
                            <div className="iccreate_details">
                                <div className="iccreate_left">
                                    <div  className="iccreate_lefttop">
                                        Hello, John Stanely
                                    <p contentEditable>
                                            Thanks a lot because you keep purchasing our products. Our company promises to provide high quality products for you as well as outstanding customer service for every transaction.
                                    </p>
                                    </div>
                                    <div className="iccreate_leftmid">
                                        <div className="iccaddress">
                                            Billing Address
                                    <span>
                                                <span contentEditable >Stanley Jones</span>
                                                <span  contentEditable >795 Folsom Ave, Suite 600</span>
                                                <span  contentEditable >San Francisco, CA 94107</span>
                                                <span  contentEditable >P: (123) 456-7890</span>
                                            </span>
                                        </div> <div className="iccaddress">
                                            Shipping Address <div className="icc_checkbox"> <input type='checkbox'></input> same as Billing Address</div> 
                                    <span>
                                    <span contentEditable >Stanley Jones</span>
                                                <span  contentEditable >795 Folsom Ave, Suite 600</span>
                                                <span  contentEditable >San Francisco, CA 94107</span>
                                                <span  contentEditable >P: (123) 456-7890</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="iccreate_right">
                                    <div className="icc_righttop">
                                        Invoice

                              </div>
                                    {/* <div className="icc_dates">
                                        <div className="icc_date"> Start Date : 22 Jun 2020</div>
                                        <div className="icc_date"> End Date : 31 Jun 2020</div>
                                    </div> */}
                                    <div className="icc_pymt">
                                        <div className="icc_pymttop"> Payment Details</div>
                                        <ul>
                                            <li> Total Due :<span contentEditable>  Jun 08, 2018</span></li>
                                            <li> Bank Name :   <span contentEditable> Bank of the West</span></li>
                                            <li> Country : <span contentEditable> United States Kingdom</span></li>
                                            <li> City :<span contentEditable > California CA 45F</span></li>
                                            <li> Address : <span contentEditable >  1802 Main Street Bellevue</span></li>
                                            <li> IBAN :<span contentEditable> KGD183497264870546</span></li>
                                            <li>Swift Code : <span contentEditable>  DGVDFVDF</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="icc_input">
                                <div className="icc_inputbox">
                                    <li>
                                        Invoice No.
                                    <Input placeholder='Enter invoice num...' />
                                    </li>
                                    <li>
                                        Customer Name
                                    <Input placeholder='Enter customer name...' />
                                    </li>
                                </div> <div className="icc_inputbox">

                                    <li>
                                        Project ID.
                                    <Input placeholder='Enter project id...' />
                                    </li>
                                    <li>
                                        Invoice Date
                                  
                                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                                    </li>

                                </div> <div className="icc_inputbox">
                                    <li>
                                        Project location
                                    <Input placeholder='Enter project location...' />
                                    </li>

                                    <li>
                                        Due Date
                                        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                                    </li>
                                </div>

                            </div>
                            <div className="ic_table">
                                <Table celled>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>No</Table.HeaderCell>
                                            <Table.HeaderCell>Items</Table.HeaderCell>
                                            <Table.HeaderCell>Description</Table.HeaderCell>
                                            <Table.HeaderCell>Quantity</Table.HeaderCell>
                                            <Table.HeaderCell>Unit Cost</Table.HeaderCell>
                                            <Table.HeaderCell>Total</Table.HeaderCell>
                                            <Table.HeaderCell>


                                            </Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>1</Table.Cell>
                                            <Table.Cell>Laptop</Table.Cell>
                                            <Table.Cell>Brand Model VGN-TXN27N/B 11.1" Notebook PC</Table.Cell>
                                            <Table.Cell>1</Table.Cell>
                                            <Table.Cell>$18</Table.Cell>
                                            <Table.Cell>1790</Table.Cell>
                                            <Table.Cell>
                                                <Icon color="teal" name="pencil"></Icon>
                                                <Delete />
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>  </Table>
                                <div className="ic_tableadd">
                                    Add
                                            </div>




                            </div>
                            <div className="icc_bottom">
                                <div className="icc_btmleft">
                                    Note:
                           <span>All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.</span>
                         
                           <label for="choosefile" >Choose file</label>
                           <input type='file' id='choosefile'></input>
                          
                                </div>
                                <div className="icc_btmright"><li>
                                    Sub-total: <span>$4120.00</span>
                                </li><li>
                                    Sub-total: <span>$4120.00</span>
                                </li>
                                <div className="icc_subtotal">$4120.00</div>
                                <div className="icc_stbtns">
                                    <div className="icc_btnprint"><Icon  name="print"></Icon>Print</div>
                                    <div className="icc_btnsbmt">  Submit</div>
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

export default InvoiceCreate
