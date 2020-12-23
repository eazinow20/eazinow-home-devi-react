
import React from 'react'
import { Icon } from 'semantic-ui-react'
import img from '../../img/bg1.jpeg'
import BlogComponent from './BlogComponent'
import { Input } from 'semantic-ui-react'
const BlogSearchBox = (props) => {
    return (
      
            <div className="blogpage_bodyfltr">
                     { props.search?  <div className="blog_fltrsrch">
                     <Input fluid icon='search' placeholder='Search...' />
                        </div> : ""}
                        { props.category? <div className="blog_category">
                            Categories
                          <ul>
                                <li><div>
                                    <Icon name="caret right" /> Bathroom
                              </div> <span>6 articals</span></li>
                                <li><div>
                                    <Icon name="caret right" /> Bathroom
                              </div> <span>6 articals</span></li>
                                <li><div>
                                    <Icon name="caret right" /> Bathroom
                              </div> <span>6 articals</span></li>
                                <li><div>
                                    <Icon name="caret right" /> Bathroom
                              </div> <span>6 articals</span></li>
                                <li><div>
                                    <Icon name="caret right" /> Bathroom
                              </div> <span>6 articals</span></li>

                            </ul>
                        </div>: ""}
                        { props.tag?
                        <div className="blog_tag">
                            Tags
                          <ul>
                                <li style={{ backgroundColor: 'red' }}><Icon name='tag'></Icon> Home Decor</li>
                                <li style={{ backgroundColor: 'Black' }}> <Icon name='tag'></Icon>Tiling</li>
                                <li style={{ backgroundColor: 'blue' }}> <Icon name='tag'></Icon>Flooring</li>
                                <li style={{ backgroundColor: 'red' }}> <Icon name='tag'></Icon>Paint</li>
                                <li style={{ backgroundColor: 'darkcyan' }}> <Icon name='tag'></Icon>Paint</li>
                                <li style={{ backgroundColor: 'red' }}> <Icon name='tag'></Icon>Home Decor</li>
                                <li style={{ backgroundColor: 'Black' }}> <Icon name='tag'></Icon>Tiling</li>
                            </ul>
                        </div>:""}{ props.topblogfull?
                        <div className="blog_tag">
                        <BlogComponent  tag="Construction" auther="dev" date="December 20, 2020" view='320' comment="15" description="orem Ipsum is simpland typesetting industlly unchanged." title="Indoor plants for your home"/>
                        <BlogComponent  tag="Construction" auther="dev" date="December 20, 2020" view='320' comment="15" description="orem Ipsum is simpland typesetting industlly unchanged." title="Indoor plants for your home"/>
                    <BlogComponent  tag="Construction" auther="dev" date="December 20, 2020" view='320' comment="15" description="orem Ipsum is simpland typesetting industlly unchanged." title="Indoor plants for your home"/>
                         
                        </div>:""}
                        { props.topblog?
                        <div className="blog_topblog">
                            Top 5 Blogs
                          <ul>
                                <li>
                                    <img width={80} src={img} alt="" />
                                    <div className="topblog_head" >
                                        Indoor plants for your home
                                     <span className="readmore">Read More</span>
                                    </div>
                                </li>    <li>
                                    <img width={80} src={img} alt="" />
                                    <div className="topblog_head" >
                                        Indoor plants for your home
                                     <span className="readmore">Read More</span>
                                    </div>
                                </li>    <li>
                                    <img width={80} src={img} alt="" />
                                    <div className="topblog_head" >
                                        Indoor plants for your home
                                     <span className="readmore">Read More</span>
                                    </div>
                                </li>    <li>
                                    <img width={80} src={img} alt="" />
                                    <div className="topblog_head" >
                                        Indoor plants for your home
                                     <span className="readmore">Read More</span>
                                    </div>
                                </li>    <li>
                                    <img width={80} src={img} alt="" />
                                    <div className="topblog_head" >
                                        Indoor plants for your home
                                     <span className="readmore">Read More</span>
                                    </div>
                                </li>
                            </ul>
                        </div>:""}
                    </div>
     
    )
}

export default BlogSearchBox
