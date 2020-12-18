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
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import './header.css'
import { Link} from 'react-router-dom'

function Header() {

   
    const [open, setOpen] = useState(false);
    const [openmore, setOpenmore] = useState(false);
    const anchorRef =useRef(null);



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
         
    //         <li>asd</li>;
   
   
    return (
        <div className="header">
           <div className="header-left"><img src={logo} alt="logo"/></div>
           <div className="header-right">
               <ul>
                   <li>Home</li>
                   <li class="button"  ref={anchorRef}
          aria-controls={open ?
           'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle} >Inspirations <ExpandMoreIcon/>
               
                   <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'center bottom' }}
            >
              <div className="paper" >
                <ClickAwayListener onClickAway={handleClose}>
                  <ul className='popper-menu' autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <li className="popper-menuli" onClick={handleClose}>Explore Images</li>
                    <li className="popper-menuli" onClick={handleClose}>Chatting Room</li>
                   
                  </ul>
                </ClickAwayListener>
              </div>
            </Grow>
          )}
        </Popper>
                   </li>
                   <li>Articles for You</li>
                   <li>Bids</li>
                   <li>Contact</li>
                   <li>FAQ</li>
                   <li
        //             ref={anchorRef}
        //   aria-controls={open ?
        //    'menu-list-grow' : undefined}
        //   aria-haspopup="true"
        //   onClick={handlemoreToggle}
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
                    <li className="popper-menuli" onClick={handlemoreClose}>Explore Images</li>
                    <li className="popper-menuli" onClick={handlemoreClose}>Chatting Room</li>
                   
                  </ul>
                </ClickAwayListener>
              </div>
            </Grow>
          )}
        </Popper>
                   </li>
                   <li><PermIdentityIcon/> <Link to='/login'>Login</Link> </li>
                   <li><PermIdentityIcon/><Link to='/register'> Register</Link></li>
               </ul>
           </div>
        </div>
    )
}

export default Header
