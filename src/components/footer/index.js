import React from 'react'
import './footer.css'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LanguageIcon from '@material-ui/icons/Language';
import Tooltip from '@material-ui/core/Tooltip';
import ftpl1 from '../../img/ft-pl1.png';
import Input from '@material-ui/core/Input';
 const Footer = () => {
    return (
        <> 
        <div className="footer-top">
            <div className="ft-left">
            <img src={ftpl1} alt="" />
            </div>
            <div className="ft-mid">
                Newsletter
                <Input placeholder="Your Email Address..." inputProps={{ 'aria-label': 'description' }} />
            </div>
            <div className="ft-right">
            <div className="ft-rightbody">
                Follow
            </div>
            </div>
        </div>
        <div className="jump">
            <div className="jump-tag">
                <div className="jump-name">Are you a Professional? Jump on board.</div>
                <div className="jump-tagdtls">Improve your visibility and receive quote requests from millions of users.</div>
            </div>
            <div className="jump-btn">
                <button>Learn More</button>
            </div>
        </div>
        <div className ="footer">
            <div className ="about-site">
            <div className ="head">About Site</div>
                <p>
                    We're reimagining how you buy, sell and rent.
                    it's now easier to get into a place you love. So 
                    let's do this , together.
                </p>
            </div>
            <div className ="quick-links">
            <div className ="head">Quick Links</div>
                <ul>
                <li><a href="#" >About Us</a> </li>
                    <li><a href="#" >Terms & Conditions</a> </li>
                    <li><a href="#" >Help And Support</a> </li>
                    <li><a href="#" >Privacy Policy</a> </li>
                    <li><a href="#" >Sign up Company for free</a> </li>
                </ul>
            </div>
            <div className ="contact-us">
            <div className ="head">Contact Us</div>
                <ul>
                    <li>info@findhouse.com</li>
                    <li>Collins Street West, Victoria</li>
                    <li>8007, Australia</li>
                    <li>+1 246-345-0699</li>
                    <li>+1 246-345-0695</li>
                </ul>
            </div>
            <div className ="follow-us">
                <div>
                <div className ="head">Follow Us</div>
                <ul>
                    <li><FacebookIcon/></li>
                    <li><InstagramIcon/></li>
                    <li><TwitterIcon/></li>
                    <li><PinterestIcon/></li>
                    <li><LanguageIcon/></li>
                    {/* <li><FacebookIScon/></li> */}
                    
                </ul>
                </div>
                <div className ="subscribe">
                <div className ="head">Subscribe</div>
                    <input type ="email" placeholder ="Your Email"></input> 
                    <button type ="submit"> <NavigateNextIcon/> </button>
                </div>
            </div>
        </div>
       <div className ="sub-footer">
        <div className ="footer2">
                <ul>
                    <li><a href="#" >Home</a> </li>
                    <li><a href="#" >Inspiration</a> </li>
                    <li><a href="#" >Bids</a> </li>
                    <li><a href="#" >Contact</a> </li>
                    <li><a href="#" >Login/Register</a> </li>
                    
                </ul>
        </div>
            <div className ="copyright">
                <p> &copy; 2020 Eazinow.Made with Love.</p>
            </div>
       </div>
        </>
    )
}

export default Footer
