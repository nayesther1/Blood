import React from 'react'
import './Contact.css'

import { IoLocationSharp } from "react-icons/io5";
import { BiSolidPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <>

<section className="container">
        <div className="content">
            <h2>Contact us</h2>
            <hr color='red'/>
        </div>
        <div className="contact">
            <div className="contactInfo">

                <div className="box">
                    <div className="icon" ><IoLocationSharp /></div>
                    <div className="text">
                        <h3>Address</h3>
                        <p>Kigali, Rwanda </p>
                        </div>
                    </div>
                    {/* end of div address  */}

                    <div className="box">
                        <div className="icon"><BiSolidPhone /></div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>(+250) 788409189</p>
                        </div>
                        </div>
                        {/* <!-- end of div phone --> */}
                        
                        <div className="box">
                            <div className="icon"><MdEmail /></div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>bloodlink18@gmail.com</p>
                            </div>
                        </div>

                        {/*  end of div email  */}
                </div> 
                {/*  end of contact info div  */}

            {/*  start a contact form  */}
            <div className="contactForm">
                <form >
                    <h2>Send Message</h2>
                    <div className="inputBox">
                    <span>Full names:</span><br />
                        <input type="text" name="" required="required"/>
                        
                    </div>

                    <div className="inputBox">
                    <span>Email:</span><br />
                        <input type="text" name="" required="required"/>
                        
                    </div>

                    <div className="inputBox">
                    <span> type your Message ...</span><br />
                       <textarea name="" required="required"></textarea>
                        
                    </div>

                    <div className="inputBox">
                       <input type="submit" name="" value="Submit"/>
                        
                    </div>
                </form>

            </div>
        </div>
        </section>
    
    
    </>



  )
}

export default Contact