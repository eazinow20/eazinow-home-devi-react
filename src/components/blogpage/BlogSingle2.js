import React from 'react'
import './blogsingle.css'
import { useLocation, useParams } from 'react-router-dom'
import Footer from '../footer'
import logo from './../../img/eazinow-logo.jpeg'
import img from './../../img/hiw.png';
import Header from '../Header'
import BlogComponent from './BlogComponent';
import BlogSearchBox from './BlogSearchBox';
import { Icon, Input } from 'semantic-ui-react'
import { Rating } from '@material-ui/lab'
import { Divider } from '@material-ui/core'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
function Blogsingle1(props) {
    const param = useParams();
    const location = useLocation();
    console.log(param)
    console.log(location.state.auther)
    return (
        <div>
           <Header listing background="white" color="gray" border="1px solid lightgray" />
          
           <div className="blog_single"> 
        
           <div className="blogpage_body">
                    <div className="blog_box">
                        <div className="blogsingle_body">
                           <div className="blog_tag">Construction</div>
                           <div className="blog_title">{param.title}</div>
                           <div className="blog_itemlist">
                               <ul>
                             
                                   <li className='blog_logo'><img src={logo} alt="logo"></img>Eazinow</li>
                                   <li><Icon name='calendar alternate outline'></Icon>  {location.state.date}</li>
                                   <li><Icon name='eye'></Icon>  {location.state.view}</li>
                                   <li><Icon name='comment alternate outline'></Icon>  {location.state.comment}</li>
                                  
                               </ul>
                           </div>
                           <img src={img} alt=""></img>
                          <center style={{fontSize:'15px', color:'lightgrey'}}>It’s one of the most common types of wallpaper.</center>

                           <p>The easiest type of wallpaper comes in a roll which can make it easy for you to measure cut out the correct dimension. This prevents wastage and saves money.Before deciding on a wallpaper, it will be a good idea to try out a sample, which is a smaller version of it and get an idea whether it will suit your room.Instead of wallpapering your whole wall, it is sometimes a good idea to use borders. These come in varied styles and shapes, and can also be used to hide blemishes.Murals are graphic designs that occupy an entire wall and the choice has to be a well-meditated one as it is likely to last for a long time. It is also a good idea to find one which can be removed easily in case you decide another.Let’s take a look at a few wallpaper ideas to give your space an attractive outlook.</p>
                       
                            <p>The pattern size can make a room appear larger or smaller. Visually decrease the size of a large room by using a large print with a darker background. The pattern and color contrast will give the optical illusion of drawing the walls in closer providing a cozier feel. Measuring your wallpaper How to make sure you’ve bought the right amount of wallpaper for your room? Firstly, you have to sketch out a plan on paper that includes each wall measurement. Measure the width of the room and divide by 53 cm, the width of a standard roll of wallpaper. This will give you the number of drops you need. Then measure the height of the room but adding about 15 cm to allow for trimming. Multiply the height by the number of drops and you’ll get the total number of meters you need. Standard wallpaper comes in rolls of 10 m x 53 cm, so check your rolls and adjust your math if you are using a wider roll. In order to prevent wastage, you should also try to subtract the area of the windows and doors. Always buy extra rolls: you might want to keep one back in case you need it for future repairs.</p>
                         
                          <div className="blog_slider">
                          <AliceCarousel 
                    mouseTracking
                    autoPlay
                    // animationType='fa'
                    animationDuration='4000'
                    
                    disableButtonsControls 
                    autoHeight={true}
                      >
                          <img src={img} alt=""  />
                          <img src={img} alt=""  />
                          <img src={img} alt=""  />
                          <img src={img} alt=""  />
                      </AliceCarousel>
                          </div>
                          <center style={{fontSize:'15px', color:'lightgrey'}}>It’s one of the most common types of wallpaper.</center>
                            <p>It’s one of the most common types of wallpaper. Vinyl wallpaper are more preferable compared to it as it is more durable and easy to install but there are people who still love the look of paper wallpapers.Vinyl wallpapers are ideal for kitchen and children’s room. It is high durable and also washable.It is one of the most attractive wallpaper that will last for long periods of time. It can also be painted.Fabric wallpapers is made from textiles and has a thick texture. It is a little challenging to prevent stains from occurring on your fabric wallpaper.</p>
                            <div className="blog_moralline">
                            <Icon name="quote left"></Icon>
                                <p>Would you like to dress your home with an innovative outlook that can make your mind feel that you are stepping out from the confines of familiar surroundings and stepping into a lap of luxury?</p>
                            </div>
                            <div className="blog_share">
                                Share <ul>
                                    <li><Icon className="icon" name="facebook"></Icon></li>
                                    <li><Icon name="twitter"></Icon></li>
                                    <li><Icon name="linkedin"></Icon></li>
                                    <li><Icon name="google"></Icon></li>
                                </ul>
                            </div>
                            
                        </div>
                       <div className="blogsingle_body">
                       <div className="rating">
                       <Rating size='small' name="read-only" value={4} readOnly /> (4.5 out of 5)
                       </div>
                       <div className="total_review">765 Reviews</div>
                       <div className='review_box'>
                           <img src={img} alt=""/>
                           <div className="review_body">
                               <div className="user_name">Dev inikhiya <Rating size='small' name="read-only" value={4} readOnly /></div>
                               <div className="review_date">December 22, 2020</div>
                               <p>Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to come back during the cooler seasons!</p>
                           </div>
                       </div>

                       <Divider/>
                        <div className='review_box'>
                           <img src={img} alt=""/>
                           <div className="review_body">
                               <div className="user_name">Dev inikhiya <Rating size='small' name="read-only" value={4} readOnly /></div>
                               <div className="review_date">December 22, 2020</div>
                               <p>Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to come back during the cooler seasons!</p>
                           </div>
                       </div>
                       </div>
                       <div className="blogsingle_body">
                     
                       <div className="total_review">Write a Reviews</div>
                         <div className="write_rating">
                       <Rating size='small' name="read-only" value={4}/> (Your Review and Rating)
                       </div>
                       <div className="review_input">
                       <textarea placeholder='Your Review' className='review_inputbody' name="Text1" cols="20" rows="1"></textarea>
                         
                       <textarea placeholder='Your Review' className='review_inputbody' name="Text1" cols="40" rows="5"></textarea></div>
                       <button>Submit Review</button>
                       </div>
                    </div>
                   <BlogSearchBox search category tag topblogfull />
                </div>   </div>
            <Footer/>
     
        </div>
    )
}

export default Blogsingle1;
