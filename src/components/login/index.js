import React,{useState} from 'react'
import './login.css'
import { Link, useHistory} from 'react-router-dom'

import Checkbox from '@material-ui/core/Checkbox';
const Login = () => {
    const [checked, setChecked] = useState(true);
    const [time, settime] = useState(new Date().toLocaleTimeString())
    var curtime = new Date().toLocaleTimeString();
    const history = useHistory();
    const handleChange = (event) => {
        setChecked(event.target.checked);
      };
    const setnewtime=() => {
        settime(new Date().toLocaleTimeString())
    };
    setInterval(setnewtime, 1000 )


    const submituser=(e)=>{
          history.push('/profile')    
    }
    return (
        <div className="login">
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
<div className="lgn-name">Login to your account</div>
<div className="lgn-tag"><Link to='/register'>Don't have an account? Sign Up!</Link> </div>
               </div>
               <div className="lgn-input">
                  <div className="input-box">
                      <input placeholder="Email Address" type={Text}  />
                  </div>
                  <div className="input-box">
                      <input placeholder="Password" type='Password'  />
                  </div>
                  <div className="frgt-rm">
                      <div onClick={handleChange} className='rmbr'>  <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />   Remember me</div>
                      <div className='frgt'>  Forgot Password?</div>
                  </div>
                  <div className="input-box">
                  <input onClick={submituser} placeholder="Submit" type='Submit'  />
                  </div>
                  or
                  <div className="input-box">
                      <button className='otp' >Login via OTP</button>
                  </div>
               </div>
           </div>

         
        </div>
    )
}

export default Login
