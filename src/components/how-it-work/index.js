import React from 'react'
import './howitwork.css'
import hiw from '../../img/hiw.png'
const HowItWork = () => {
    return (
        <div className="howitwork">
            <div className="howitwork-top">
             <div className="hiw-topheading">How it work</div>   
                <div className="hiw-toptag">Get Started In 4 Simple Steps.</div>
            </div>
            <div className="howitwork-blog">
               <div className="hiw-blog">
                   <div className="hiw-blogtop">
                       <img  src={hiw} alt=""></img>
                   </div>
                   <div className="hiw-blogbody">
                       <div className="ques">
                       01 Select Your Scope Of Work

                       </div>
                       <div className="ans">
                       Use our interactive platform to submit the necessary information about your project, such as site location, project area and Instagram worthy dreams for your home renovation needs.
                       </div>
                   </div>
               </div>
               <div className="hiw-blog">
                   <div className="hiw-blogtop">
                       <img  src={hiw} alt=""></img>
                   </div>
                   <div className="hiw-blogbody">
                       <div className="ques">
                       01 Select Your Scope Of Work

                       </div>
                       <div className="ans">
                       Use our interactive platform to submit the necessary information about your project, such as site location, project area and Instagram worthy dreams for your home renovation needs.
                       </div>
                   </div>
               </div>
               <div className="hiw-blog">
                   <div className="hiw-blogtop">
                       <img  src={hiw} alt=""></img>
                   </div>
                   <div className="hiw-blogbody">
                       <div className="ques">
                       01 Select Your Scope Of Work

                       </div>
                       <div className="ans">
                       Use our interactive platform to submit the necessary information about your project, such as site location, project area and Instagram worthy dreams for your home renovation needs.
                       </div>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default HowItWork
