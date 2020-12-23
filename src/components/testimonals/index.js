import React from 'react'
import './testimonals.css'
// import AliceCarousel from 'react-alice-carousel';

import { Avatar } from '@material-ui/core'
const Testimonals = () => {

   
   
    return (
        <div className="testimonals">
            <div className="tstmnl">
                <div className="tstmnl-head">
                    <div className="tstmnl-headname">Testimonials</div>
                    <div className="tstmnl-headtag">Here could be a nice sub title</div>
                </div>
                <div className="carosel">
                <div className="avatar"><Avatar>D</Avatar></div>
                <center>Name here</center> 
                <center>Product Manager</center>
                <center><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p></center>
                </div>
            </div>
        </div>
    )
}

export default Testimonals
