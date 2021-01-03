import React from 'react'
import DashboardHeader from '../component/header'
import Adminsidebar from '../component/sidebar'
import { Avatar, Divider, IconButton } from '@material-ui/core'
import { Checkbox, Dropdown, Icon, Image, Progress } from 'semantic-ui-react'
import myimg from './../imgs/old.JPG'
import { Label, Menu, Table } from 'semantic-ui-react'
import './calendardashboard.css'
import {HorizontalBar } from 'react-chartjs-2';
import LayersIcon from '@material-ui/icons/Layers';
// import "chartist/dist/scss/chartist.css";

const CalendarDashboard = () => {
    const data = {
        labels: ['Project Name', 'Project Name'],
        datasets: [
          {
            
            data: [ 6,7],
            backgroundColor: [
              '#fff',
              '#fff', 
              '#fff',
              '#fff',
             
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
          
          }, {
            
            data: [6, 5, 4,5,6,7],
            backgroundColor: [
              '#fff',
              '#fff', 
              '#fff',
              '#fff',
             
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
          
          }
      
        ],
      }
      
      const options = {
        legend: {
            display: false
        },

        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        maintainAspectRatio: false
      }
    return (
        <div>
        <div className="admin_dashboard">
            <Adminsidebar />
            <div className="admin_right">
                <DashboardHeader />
                <div className="taskboard">
                    <div className="taskboard_dbheading">
                        Calendar Dashboard
                    </div>
                    <div className="caldb_body">
                    <div  className="cal_dbbox">
                    
                    <HorizontalBar
                   
                     data={data}
                      height={'250px'}
                      width={'100px'}
                 
                      options={options} />
              
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
                            <div className="table_btn"> Taskboard</div>
                            
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
                            <div className="table_btn"> Taskboard</div>
                            
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
                            <div className="table_btn"> Taskboard</div>
                            
                            </Table.Cell>
                        </Table.Body>
                       
                    
                    
                    </Table>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default CalendarDashboard
