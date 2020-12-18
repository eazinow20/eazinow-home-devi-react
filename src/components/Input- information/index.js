import React, { useState } from 'react'
import './input-info.css'
import { Button, Dropdown, Grid,Input } from 'semantic-ui-react'
// import Select from '@material-ui/core/Select';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
const InputSection = () => {
     const [proptypevalue, setproptypevalue] = useState(" ")
     const [constypevalue, setconstypevalue] = useState(" ")
     
     
     const [homeowner, sethomeowner] = useState(true)
     const [activehm, setactivehm] = useState("active")
     const [activevender, setactivevender] = useState(" ")
     const [openadvance, setopenadvance] = useState(false)
      const proptypeoptions = [
        { key: 1, text: 'Apartment', value: 1 },
        { key: 2, text: 'Villa', value: 2 },
        { key: 3, text: 'Builder Floor', value: 3 },
        { key: 4, text: 'Plot', value: 4 },
      ]

      const roomsoptions = [
        { key: 1, text: '1', value: 1 },
        { key: 2, text: '2', value: 2 },
        { key: 3, text: '3', value: 3 },
        { key: 4, text: '4', value: 4 },
        { key: 5, text: '5', value: 5 }, 
        { key: 6, text: '6', value: 6 },
        { key: 7, text: '7', value: 7 },
        { key: 8, text: '8', value: 8 },
      ]
      const iamoptions = [
        { key: 1, text: 'Architect', value: 1 },
        { key: 2, text: 'Carpenter', value: 2 },
        { key: 3, text: 'Civil Contractor', value: 3 },
        { key: 4, text: 'Door Contrator', value: 4 },
        { key: 5, text: 'Door Manufadctor', value: 5 }, 
        { key: 6, text: 'Electricain', value: 6 },
        { key: 7, text: 'Furniture Manufactor', value: 7 },
        { key: 8, text: 'HVAC Service Provider', value: 8 }, 
        { key: 9, text: 'Interior Desingner', value: 9 },
        { key: 10, text: 'Mason', value: 10 },
        { key: 11, text: 'Plumber', value: 11 },
        { key: 12, text: 'UPVC Window Manufacture', value: 12 },
      ]
      const constypeoptions = [
        { key: 1, text: 'Home Renovation', value: 1 },
        { key: 2, text: 'Home Renovation with Civil work', value: 2 },
        { key: 3, text: 'Complete new Construction', value: 3 },
       
      ]
      const serviceoptions = [
        { key: 1, text: 'Service Provided', value: 1 },
        { key: 2, text: 'Architectural Design Consultant', value: 2 },
        { key: 3, text: 'Structural Consultant', value: 3 },
       
      ]
    const handleChangeprop = (event) => {
        setproptypevalue(event.target.value)
    };
    const handleChangecons = (event) => {
      setconstypevalue(event.target.value)
  };
const handlepopper=(e)=>{
  setopenadvance(true);
 

}
const hideadvance=(e)=>{
  setopenadvance(false);
 

}
const homeowneron=()=>{
  sethomeowner(true)
  setactivehm("active");
  setactivevender("");
}
const vender=()=>{
  sethomeowner(false)
  setactivehm("");
  setactivevender("active");
};
   
    return (
      <div className="main"> 

         <div className="head">
         <ul>
           <div className="brand">Eazinow</div>
           <div className='tag'>EXPLORE YOUR DREAM HOME HERE.</div>
           <div className='btns'>
        <div className="btn-box">  <button onClick={homeowneron} class={`btn ${activehm}`} >Homeowner</button> {homeowner? <ExpandMoreIcon/> : ""}</div> 
        <div className="btn-box">    <button onClick={vender} class={`btn ${activevender}`}>Vender</button> {homeowner?  "" : <ExpandMoreIcon/> }</div>
           </div></ul>
           
         </div>
         {homeowner ? 
        <div className='input-info'>

          <ul>
               
       
        <Grid columns={6}>
        <li>
          <Dropdown
            onChange={handleChangeprop}
            openOnFocus
            options={proptypeoptions}
            placeholder='Property Type'
            selection
            value={proptypevalue}
          />
        </li>
        <li>
          <Dropdown
            onChange={handleChangecons}
            options={constypeoptions}
            placeholder='Construction Type'
            selection
            value={constypevalue}
          />
        </li>
        <li>
        <Input size="large" type="text" placeholder='Area(sqft)' /><div className="area" >ft<span>2</span></div>
        </li>
        <li>
        <Input size="large" type="text" placeholder='Pincode' />
        </li>
        <li>
        <div onClick={handlepopper} className='advance'>Advance
        <MoreVertIcon/>
        </div>   
        </li>
        <li>
        <Link to='/login'><button class='btn'>Submit</button></Link> 
        </li>
        </Grid>
   
          </ul>
       

        </div>  : 
        <div className='input-info'>
            {/* <Select className="select" size='x-large' placeholder='Select your country' options={countryOptions} /> */}
          <ul>
               
       
        <Grid columns={6}>
        <li> I am
          <Dropdown
            onChange={handleChangeprop}
            openOnFocus
            options={iamoptions}
            placeholder='Nothing Selected'
            selection
            value={proptypevalue}
          />
        </li>
        <li>
          <Dropdown
            onChange={handleChangecons}
            options={serviceoptions}
            placeholder='Nothing Selected'
            selection
            value={constypevalue}
          />
        </li>
        <li>
        <Input size="large" type="text" placeholder='Office/Factory(Pincode)' />
        </li>
        <li>
        <Input size="large" type="text" placeholder='Value of Project' />
        </li>
        <li>
        <div onClick={handlepopper} className='advance'>Advance
        <MoreVertIcon/>
        </div>   
        </li>
        <li>
         <Link to='/login'><button class='btn'>Submit</button></Link> 
        </li>
        </Grid>
   
          </ul>
       

        </div>
        }
        {
          openadvance? 
          homeowner?
       
        <div className="popper">
         <div className="popper-body">
         <ul>
         <li><Dropdown
            onChange={handleChangeprop}
            openOnFocus
            options={roomsoptions}
            placeholder='Living Rooms'
            selection
            value={proptypevalue}
          /></li>
          <li><Dropdown
            onChange={handleChangeprop}
            openOnFocus
            options={roomsoptions}
            placeholder='Bad Rooms'
            selection
            value={proptypevalue}
          /></li>
          <li><Dropdown
            onChange={handleChangeprop}
            openOnFocus
            options={roomsoptions}
            placeholder='Kitchen'
            selection
            value={proptypevalue}
          /></li>
            <li><Dropdown
            onChange={handleChangeprop}
            openOnFocus
            options={roomsoptions}
            placeholder='Dining Rooms'
            selection
            value={proptypevalue}
          /></li>
          <li onClick={hideadvance} >Hide</li>
          </ul><ul>
         <li><Dropdown
            onChange={handleChangeprop}
            openOnFocus
            options={roomsoptions}
            placeholder='Bathrooms'
            selection
            value={proptypevalue}
          /></li>
          <li><Dropdown
            onChange={handleChangeprop}
            openOnFocus
            options={roomsoptions}
            placeholder='Toilets'
            selection
            value={proptypevalue}
          /></li>
          <li><Dropdown
            onChange={handleChangeprop}
            openOnFocus
            options={roomsoptions}
            placeholder='Study Rooms'
            selection
            value={proptypevalue}
          /></li>
            <li><Dropdown
            onChange={handleChangeprop}
            openOnFocus
            options={roomsoptions}
            placeholder='Puja Ghars'
            selection
            value={proptypevalue}
          /></li></ul>
        
        
         </div>
        </div> :
        <div className="popper">
         <div className="popper-body">
         <ul>
         <li>        <Input size="large" type="text" placeholder='Company Address line1' /></li>
          <li>        <Input size="large" type="text" placeholder='Company Address line2' /></li>
          <li>        <Input size="large" type="text" placeholder='Website' /></li>
            <li>        <Input size="large" type="text" placeholder='Phone No.' /></li>
          <li onClick={hideadvance} >Hide</li>
          </ul>
        
        
         </div>
        </div> 
         : ""}

        </div>
    )
}

export default InputSection
