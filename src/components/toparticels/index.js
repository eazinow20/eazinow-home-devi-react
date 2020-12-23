import React from 'react'
import './toparticles.css'

import BlogComponent from '../blogpage/BlogComponent';
const Toparticles = () => {
    return (
        <div className="toparticle">
             <div className='ta-top'>
            <div className="ta-topheading">Top Articles</div>
            <div className="ta-toptag">Have A Look

</div>
        </div>
        <div className="ta-body">
        <div >
        <BlogComponent type='slide' tag="Construction" auther="dev" date="December 20, 2020" view='320' comment="15" description="lorem Ipsum is simpland typesetting industlly unchanged." title="Indoor plants for your home Indoor plants for your home"/>

    </div>
    <div >
    <BlogComponent type='slide' tag="Construction" auther="dev" date="December 20, 2020" view='320' comment="15" description="lorem Ipsum is simpland typesetting industlly unchanged." title="Indoor plants for your home Indoor plants for your home"/>

    </div>
    <div >
    <BlogComponent type='slide' tag="Construction" auther="dev" date="December 20, 2020" view='320' comment="15" description="lorem Ipsum is simpland typesetting industlly unchanged." title="Indoor plants for your home Indoor plants for your home"/>

    </div>
        </div>
        </div>
    )
}

export default Toparticles
