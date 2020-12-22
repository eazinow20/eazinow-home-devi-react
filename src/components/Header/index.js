import React,{ useState, useRef} from 'react'
import logo from '../../img/eazinow-logo.jpeg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import 'semantic-ui-css/semantic.min.css'
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuIcon from '@material-ui/icons/Menu';
import './header.css'
import { Link} from 'react-router-dom'
import { propTypes } from 're-carousel';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Add } from '@material-ui/icons';
import { Drawer } from '@material-ui/core';


const  Header =(props)=> {

   const [opensidebar, setopensidebar] = useState(false)
    const [open, setOpen] = useState(false);
    const [openmore, setOpenmore] = useState(false);
    const anchorRef =useRef(null);


    const  handleopensidebar =()=>{
      setopensidebar(true)
    }


    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
      };
    
      const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
    
        setOpen(false);
      }
      const handlemoreToggle = () => {
        setOpenmore((prevOpen) => !prevOpen);
      };
    
      const handlemoreClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
    
        setOpen(false);
      }
      function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
        }
      }
    
      // return focus to the button when we transitioned from !open -> open
      const prevOpen = React.useRef(open);
      React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
          anchorRef.current.focus();
        }
    
        prevOpen.current = open;
      }, [open]);
    // inspiration tool tips  
    // const exploredata =

   
   
    return (
        <div className="header" style={{background:`${props.background}`, color:`${props.color}`, borderBottom:`${props.border}` }} >
           <div className="header-left">
           <div onClick={handleopensidebar} className="onlymob"><MenuIcon  /> </div>
           <Link to='/'><img src={logo} alt="logo"/></Link> </div>
           <div className="header-right">
               <ul className="onlypc">
                   <li><Link to='/'>Home</Link> </li>
                   <li><Link to="/inspiration">Inspirations </Link> 
                   </li>
                   <li><Link to='/blog'>Articles</Link> </li>
                   <li>Bids</li>
                   <li>Contact</li>
                   <li>FAQ</li>
                   <li
                    ref={anchorRef}
          aria-controls={open ?
           'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handlemoreToggle}
                   >More  <ExpandMoreIcon/>
                   <Popper open={openmore} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'center bottom' }}
            >
              <div className="paper" >
                <ClickAwayListener onClickAway={handlemoreClose}>
                  <ul className='popper-menu' autoFocusItem={openmore} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <li className="popper-menuli" onClick={handlemoreClose}>How it Works</li>
                    <li className="popper-menuli" onClick={handlemoreClose}>About Us</li>
                    <li className="popper-menuli" onClick={handlemoreClose}>Vender</li>
                    <li className="popper-menuli" onClick={handlemoreClose}>Client</li>
                   
                  </ul>
                </ClickAwayListener>
              </div>
            </Grow>
          )}
        </Popper>
                   </li>
                   <li ><PermIdentityIcon/> <Link  to='/login'>Login/Register</Link> </li>
                  {props.listing? <li className="crt_list"><Link to='/'>+ Create Listing</Link> </li>: ""}
               </ul>
               <div className="onlymob"><Link  to='/login'><PermIdentityIcon  /> </Link></div>
           </div>
           <Drawer 
           onClose={()=>setopensidebar(false)}
            open={opensidebar}
           >
            <List  className="sidebar">
              <ListSubheader>Eazinow</ListSubheader>
              <ListItem>Inspirations</ListItem>
              <ListItem>Articles</ListItem>
              <ListItem>Bids</ListItem>
              <ListItem>Contact</ListItem>
              <ListItem>FAQ</ListItem>
              <ListItem>Create Listing</ListItem>
             
            </List>
           </Drawer>
        </div>
    )
}

export default Header
