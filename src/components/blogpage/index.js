import React from 'react'
import Footer from '../footer'
import Header from '../Header'
import './blog.css'
import Pagination from '@material-ui/lab/Pagination';
import BlogSingle from './Blogsingle'
import BlogComponent from './BlogComponent';
import {
    BrowserRouter as Router , Route, Switch,useParams
} from 'react-router-dom'
import BlogSearchBox from './BlogSearchBox';
import { AddRounded } from '@material-ui/icons';
import Blogsingle from './Blogsingle';
const Blog = () => {
     let {slug} = useParams;
     

   const address = window.location.href;
   console.log(address);

    return (
        <div>
       
        
            <Header listing background="white" color="gray" border="1px solid lightgray" />
            <div className="blogpage">
                <div className="blogpage_head">Blog</div>
                <div className="blogpage_body">
                    <div className="blogpage_bodyblog">
                    <BlogComponent type='slide' tag="Construction" auther="dev" date="December 20, 2020" view='320' comment="15" description="orem Ipsum is simpland typesetting industlly unchanged." title="Indoor plants for your home"/>
                    <BlogComponent  tag="Construction" auther="dev" date="December 20, 2020" view='320' comment="15" description="orem Ipsum is simpland typesetting industlly unchanged." title="1Title here somehting more 1Title here somehting more"/>
                    <BlogComponent  tag="Construction" auther="dev" date="December 20, 2020" view='320' comment="15" description="orem Ipsum is simpland typesetting industlly unchanged." title="1Title here somehting more 1Title here somehting more"/>
                    <BlogComponent  tag="Construction" auther="dev" date="December 20, 2020" view='320' comment="15" description="orem Ipsum is simpland typesetting industlly unchanged." title="1Title here somehting more 1Title here somehting more"/>
                       <BlogComponent  tag="Construction" auther="dev" date="December 20, 2020" view='320' comment="15" description="orem Ipsum is simpland typesetting industlly unchanged." title="1Title here somehting more 1Title here somehting more"/>
           
                       
                       
                  
                    </div>
                   <BlogSearchBox search category tag topblog/>
                </div>
                <div className="pagination">
                    <Pagination count={10} color="secondary" />
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Blog
