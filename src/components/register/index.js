import React,{useState} from 'react'
import Checkbox from '@material-ui/core/Checkbox';

import { Link} from 'react-router-dom'
import './register.css'
const Register = () => {

    const [checked, setChecked] = useState(true);
    const [time, settime] = useState(new Date().toLocaleTimeString())
    var curtime = new Date().toLocaleTimeString();
    
    const handleChange = (event) => {
        setChecked(event.target.checked);
      };
    const setnewtime=() => {
        settime(new Date().toLocaleTimeString())
    };
    setInterval(setnewtime, 1000 )
    return (
        <div className="signup">
        <div className="login-topbtn">
           <Link to='/'> <button>Jump To Home</button></Link>
        </div>
        <div className="lgn-body">
            <div className="lgn-bodytext">
                 <div className="lgn-wish">Good Morning, Hope your day is going well!
</div>
<div className="lgn-time">
{time}
</div>
<div className="lgn-name">Register</div>

            </div>
            <div className="lgn-input">
               <div className="input-box">
                   <input placeholder="Client" type='select'  />
               </div>
               <div className="input-box">
                   <input placeholder="Full Name" type='text'  />
               </div>  <div className="input-box">
                   <input placeholder="Email" type='text'  />
               </div>  <div className="input-box">
                   <input placeholder="Mobile Number" type='text'  />
               </div>  <div className="input-box">
                   <input placeholder="Password" type='password'  />
               </div> <div className="input-box">
                   <input placeholder="Re-Enter Password" type='password'  />
               </div>
               <div className="frgt-rm">
                   <div onClick={handleChange} className='rmbr'>  <Checkbox
     checked={checked}
     onChange={handleChange}
     inputProps={{ 'aria-label': 'primary checkbox' }}
   />  I have read and accept the Terms and Privacy Policy?</div>
                   
               </div>
               <div className="input-box">
               <button className='otp' >SignUp</button>
               </div>
               Already have an account? Log In
             
            </div>
        </div>

      
     </div>
    )
}

export default Register
