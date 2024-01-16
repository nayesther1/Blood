import React from 'react'
import './About.css'
import image from '/imagegogo.png'
import { MdBloodtype } from "react-icons/md";
import { PiLinkSimpleDuotone } from "react-icons/pi";
import { FaDatabase } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { MdAccessTime } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


function About() {
  return (
    <section className='about-container'>
        <div className='about-first'>
        <div className='about-left'>
            <h2>Who are we</h2>
            <p>Our Aim</p>
            <p>Our Model</p>

        </div>
        <hr color='red'/>
        <div className='about-right'>
         
            <p className='imgpic'> <MdBloodtype color='#CB2C31' size={25} className='borderadius'/>
                Lorem ipsum dolor sit amet consectetur .
                 Necessitatibus consequuntur perfer</p>
            <p><PiLinkSimpleDuotone  color='#CB2C31' size={25} className='borderadius' />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Necessitatibus consequuntur perferendis ab magni animi</p>
            <p> <FaDatabase color='#CB2C31' size={25}  className='borderadius' />Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Necessitatibus consequuntur perferendis ab magni animi</p>

        </div></div>
        
        <div className="we-stand">
                <div className="first-we-stand"> Blood Link What we stand for</div>
                <div><hr className="section-two" />

                <div className="frame">
                    <div className="second-we-stand"><FaPerson size={25} color='red'/>
                    <h5>Accessibility</h5>
                    <p>
                        Hello Write the motives of the 
                        projects. You can edit this part
                        as you navigate this section. Make 
                        sure to include the projects’ s aim.</p>
                    </div>

                    
                    <div className="third-we-stand"><TiTick size={25}/><br />
                    <h5>Matching System</h5>
                    <p>Hello Write the motives of the projects. You can edit this part as you
                    navigate this section. Make sure to include the projects’ s aim.</p>
                    </div>

                    <div className="fourth-second-we-stand"><MdAccessTime size={25} color='red'/><br />
                    <h5>Time Reliability</h5>
                    <p>Hello Write the motives of the projects. You can edit this part as you
                    navigate this section. Make sure to include the projects’ s aim.</p>
                    </div>
                    </div>
                    </div>
                <hr className="underline-two" />

                <div className="stories">
                <div className="testimonials">
                  <div className="community">The Amazing stories of our communities through the testimonials.</div>
                   <div className="peek">A sneak peek of our campaign</div>
                </div>
                <div className='stories-right-side'>
                <div className='img-about'>
                    <MdArrowBackIos />
                    
                        <img src={image} alt=""/>
                    
                    <MdArrowForwardIos />
                    </div>
                    <p>Hello Write the motives of the projects</p>
                </div></div>
                </div>


    </section>
  )
}

export default About