import React from 'react'

import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Share } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { Divider, Icon } from 'semantic-ui-react'

import img from '../../img/slide2.jpg'
import logo from './../../img/eazinow-logo.jpeg'
import { useHistory } from 'react-router-dom';


const BlogComponent = (props) => {
            const auther = props.auther;
            const date = props.date;
            const description = props.description;
            const view = props.view;
            const comment = props.comment;
            const width = props.width
            const history = useHistory();
            
          
   const hanldeReadMore=(title)=>{
       var pathname="";
         if(props.type==='slide'){
                 pathname=`/blog/slide/${title}`
            }
            else{
                pathname=`/blog/${title}`
            }
             history.push({
                 pathname: pathname,
                state:{
                    auther:auther,
                    date : date,
                    view : view,
                    comment: comment
                }
                })
   }


    return (
        <div>
              <div style={{width:`${width}`}} className="blog">
                            <div className="blogimg_box">
                                <img src={img} alt="" />
                                <div className="img_overlay2">
                                    <IconButton><SwapHorizIcon /></IconButton>
                                    <IconButton>    <FavoriteBorderIcon /></IconButton>
                                    <IconButton> <Share /></IconButton>
                                </div>
                                <div style={{ backgroundColor: '#FF5A5F' }} className="img_overlay">{props.tag}</div>

                            </div>
                            <div className="title">{props.title}</div>
                            <div className="time"><Icon name='calendar alternate outline'></Icon> {props.date}</div>
                            <div className="description">{props.description}</div>
                            <Divider />
                            <div className="blog_btmbtn">
                            <div className="blog_btmbrand">
                                 <img src={logo} alt="logo"></img>   Eazinow
                            </div> <span className="blog_readmore" onClick={()=>hanldeReadMore(props.title)}>Read More  <Icon name="angle right" />  </span>
                            </div>
                        </div>
        </div>
    )
}

export default BlogComponent
