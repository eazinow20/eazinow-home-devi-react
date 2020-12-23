import React, { useState } from 'react'
import { Dropdown, Input } from 'semantic-ui-react'
import img from '../../img/slide2.jpg'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {  Share } from '@material-ui/icons'
import { Modal } from 'semantic-ui-react'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import {  IconButton} from '@material-ui/core'

const InspImage = (props) => {
    const [currentvalue, setcurrentvalue] = useState("Select Board")
    const [openmodel, setopenmodel] = useState(false)
    const [opencreatemodel, setopencreatemodel] = useState(false)
 


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    const handleopenmodel = (img) => {
        setopenmodel(true)


    }
    const handleclosemodel = () => {
        setopenmodel(false)
    }
    const handleselectchange = (e) => {
        setcurrentvalue(e.target.value)
    }
    const Createnewboard = (e) => {
         setopencreatemodel(true)
       
    }
    const closecreatemodel = (e) => {
        setopencreatemodel(false)
      
   }
    return (
        <div>
            <div  className="img_box">
                <img onClick={handleopenmodel} src={props.img} alt="Avatar" class="image" style={{ width: '100%' }} /><center></center>
                <div className="img_overlay">
     
                    <div  onClick={handleClick} className="overlay">Save</div>
          
          
        
                    <Dropdown 
                    closeOnChange={false}
                    closeOnEscape={false}
                    closeOnBlur={false}
                    fluid text={currentvalue}>
    <Dropdown.Menu>
  
      <Dropdown.Item onClick={()=>setcurrentvalue('Batharoom')} text='Bathroom' description='ctrl + o' />
      <Dropdown.Item onClick={()=>setcurrentvalue('Kitchen')} text='Kitchen' description='ctrl + s' />
      <Dropdown.Item onClick={()=>setcurrentvalue('Office')} text='Office' description='ctrl + r' />
   
     
      <Dropdown.Divider />
      <Dropdown.Item   onClick={Createnewboard}  icon='add' text='Create New board...' />
      
    </Dropdown.Menu>
  </Dropdown>

                


                </div>
                <div className="img_overlay2">
                    <div  className="img_overlayshare"><Share /></div>
                    <div className="img_overlaylike"> <FavoriteBorderIcon /></div>


                </div>
            </div>

            <Modal
                dimmer='blurring'
                className="model"
                open={openmodel}
                size='small'
                onClose={handleclosemodel}
            >
                <div className="model_btn">
                    <div>
                        <IconButton><SwapHorizIcon /></IconButton>
                        <IconButton>    <FavoriteBorderIcon /></IconButton>

                        <IconButton> <Share /></IconButton>
                    </div>
                    <div className='model_savebtn'>
                    <Dropdown 
                    closeOnChange={false}
                    closeOnEscape={false}
                    closeOnBlur={false}
                    fluid text={currentvalue}>
    <Dropdown.Menu>
  
      <Dropdown.Item onClick={()=>setcurrentvalue('Batharoom')} text='Bathroom' description='ctrl + o' />
      <Dropdown.Item onClick={()=>setcurrentvalue('Kitchen')} text='Kitchen' description='ctrl + s' />
      <Dropdown.Item onClick={()=>setcurrentvalue('Office')} text='Office' description='ctrl + r' />
   
     
      <Dropdown.Divider />
      <Dropdown.Item   onClick={Createnewboard}  icon='add' text='Create New board...' />
      
    </Dropdown.Menu>
  </Dropdown>
                        <div onClick={handleclosemodel} className="overlay">Save</div>
                    </div>
                </div>
                <img src={props.img} alt="" />

            </Modal>
            <Modal
                dimmer='blurring'
                className="model"
                open={opencreatemodel}
                size='small'
                onClose={closecreatemodel}
            >
                <div className="model_btn">
                    <div>
                        <Input placeholder="New Board"></Input>
                    </div>
                    <div className='model_savebtn'>
                            <button onClick={closecreatemodel}>Save</button>
                            <button onClick={closecreatemodel}>Cancel</button>
                    </div>
                </div>
                <img src={props.img} alt="" />

            </Modal>
           
        </div>
    )
}

export default InspImage
