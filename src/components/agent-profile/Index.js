import React,{useState} from 'react'
import Footer from '../footer'
import Header from '../Header'
import './profile.css'
import img from './../../img/hiw.png'
import img1 from './../../img/slide2.jpg'
import { Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons'
import BlogComponent from '../blogpage/BlogComponent'

import BlogSearchBox from '../blogpage/BlogSearchBox'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Divider } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
const Profile = () => {


     const [activetab, setactivetab] = useState('description');



   
    return (
        <div>
            <Header listing background="white" color="gray" border="1px solid lightgray" />
            <div className="profile">
                <div className="profile_body">
                    <div className="profile_head">
                        <img src={img} alt="" />
                        <div className="profile_data">
                            <div className="data_top">
                                <div className="profile_dataleft">
                                Christopher Pakulla

            <ul>
                                        <li>Office:8094075356</li>
                                        <li>Mobile:7073517717</li>
                                        <li>Fax: 8094075356</li>
                                        <li>Email:devic.bt.18@nitj.ac.in</li>
                                        <li></li>
                                    </ul>
                                    <ul>
                                        <li><Facebook /></li>
                                        <li><Twitter /></li>
                                        <li><Instagram /></li>
                                        <li><Facebook /></li>
                                        {/* <li><Facebook /></li> */}
                                        <li><Pinterest /></li>

                                    </ul>
                                </div>
                                <div className="profile_dataright">Follow</div>
                            </div>
                  

                        </div>
                    </div>
                    <div className="profile_details">
                        <ul>
                            <li onClick={()=>setactivetab("description")}>Desciption</li>
                            <li onClick={()=>setactivetab("listing")}>Listing</li>
                            <li onClick={()=>setactivetab("reviews")}>Deshboard</li>
                            <li onClick={()=>setactivetab("images")}>Images</li>
                        </ul>
                        <div className="profile_detailsbody">
                           
                         { activetab==='description' ?   
                           <div>
                                <p>Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full open NYC views. You need to see the views to believe them. Mint condition with new hardwood floors. Lots of closets plus washer and dryer.</p>
                                <p>
                                    Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.</p>
                           </div> : 
                           activetab==='listing' ? 
                           
                             <div className="blogpage_bodyblog">

                             <BlogComponent width="300px" type='slide' tag="Construction" auther="dev" date="December 20, 2020" view='320' comment="15" description="lorem Ipsum is simpland typesetting industlly unchanged." title="Indoor plants for your home Indoor plants for your home"/>
                             <BlogComponent  width="300px" type='slide' tag="Construction" auther="dev" date="December 20, 2020" view='320' comment="15" description="lorem Ipsum is simpland typesetting industlly unchanged." title="Indoor plants for your home Indoor plants for your home"/>
                             <BlogComponent  width="300px" type='slide' tag="Construction" auther="dev" date="December 20, 2020" view='320' comment="15" description="lorem Ipsum is simpland typesetting industlly unchanged." title="Indoor plants for your home Indoor plants for your home"/>
                             <BlogComponent  width="300px" type='slide' tag="Construction" auther="dev" date="December 20, 2020" view='320' comment="15" description="lorem Ipsum is simpland typesetting industlly unchanged." title="Indoor plants for your home Indoor plants for your home"/>



                            </div> : 
                            activetab==='images'?
                            <div className="imgs">
                            <div className="saved_image">
                                <img src={img} alt="" />
                                <div  className="img_overlay">Construction</div>
                                <div className="board_tag">board tag here</div><Divider/>
                              <div className="board_date">  December 16, 2020  <span>5</span></div>
                              
                            </div> 
                            <div className="saved_image">
                                <img src={img} alt="" />
                                <div  className="img_overlay">Construction</div>
                                <div className="board_tag">board tag here</div><Divider/>
                              <div className="board_date">  December 16, 2020  <span>5</span></div>
                              
                            </div>   <div className="saved_image">
                                <img src={img} alt="" />
                                <div  className="img_overlay">Construction</div>
                                <div className="board_tag">board tag here</div><Divider/>
                              <div className="board_date">  December 16, 2020  <span>5</span></div>
                              
                            </div>   <div className="saved_image">
                                <img src={img} alt="" />
                                <div  className="img_overlay">Construction</div>
                                <div className="board_tag">board tag here</div><Divider/>
                              <div className="board_date">  December 16, 2020  <span>5</span></div>
                              
                            </div> 
                            </div> : 
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
                       </div>}
                        </div>
                    </div>

                </div>
                <div className="profile_sidebar">
                <div className="slider">
                Feactured Inspiration
                    <AliceCarousel 
                    mouseTracking
                    autoPlay
                    // animationType='fa'
                    animationDuration='4000'
                    disableButtonsControls 
                    autoHeight={true}
                      >
                    <img src={img} alt=""   className="sliding_img" />
                    <img src={img1} alt=""  className="sliding_img" />
                   <img src ={img} alt=""  className="sliding_img" />
                   <img src={img1} alt=""   className="sliding_img" />
                    <img src={img} alt=""  className="sliding_img" />
                   <img src ={img1} alt=""  className="sliding_img" />
                   <img src={img} alt=""   className="sliding_img" />
                    <img src={img1} alt=""  className="sliding_img" />
                   <img src ={img} alt=""  className="sliding_img" />
                    </AliceCarousel>
                </div>
                <BlogSearchBox tag topblog />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile
