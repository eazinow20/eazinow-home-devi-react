import React from 'react'
import './exploreimage.css'
import img from '../../img/hiw.png'
const ExploreImages = () => {
    return (
        <div className="exploreimage">
        <div className='ei-top'>
            <div className="ei-topheading">Explore Images</div>
            <div className="ei-toptag">Get the Best Inspiration available on the Web.

</div>
        </div>
            <div className='ei-body'>
                <div className="ei-imgs1">
                    <div className="img1"><img alt="" src={img}  /> </div>
                    <div className="overlay">
                        love
                    </div>
                </div>
                <div className="ei-imgs2">
                    <div className="img1"><img alt="" src={img}  /> </div>
                    <div className="overlay">
                        love
                    </div>
                </div>
               
            </div>
            <div className='ei-body' style={{padding:'10px 100px 30px 100px'}} >
                
                <div className="ei-imgs2">
                    <div className="img1"><img alt="" src={img}  /> </div>
                    <div className="overlay">
                        love
                    </div>
                </div>
               <div className="ei-imgs1">
                    <div className="img1"><img alt="" src={img}  /> </div>
                    <div className="overlay">
                        love
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreImages
