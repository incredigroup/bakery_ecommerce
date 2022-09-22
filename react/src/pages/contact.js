import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";
function Contact() {
    return (
      <div>
       

      <section id="c1">
      <div className="contact">
     
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Contact Us</h2>
                  </div>
               </div>
            </div>


            <div className="row">
               <div className="col-md-6  padding_right0">
                  <div className="map_main">
                     <div className="map-responsive">
                        {/* <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="453" frameborder="0" style="border:0; width: 100%;" allowfullscreen=""></iframe> */}
                     </div>
                  </div>

            
               </div>



               <div className="col-md-6 padding_left0">
                  <form id="request" className="main_form">
                     <div className="row">
                        <div className="col-md-12 ">
                           <input className="contactus" placeholder="Name" type="type" name="Name" />
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Phone" type="type" name="Phone" />
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Email" type="type" name="Email" />
                        </div>
                        <div className="col-md-12">
                           <textarea className="textarea" placeholder="Message" type="type" Message="Message">Message</textarea>
                        </div>
                        <div className="col-md-12">
                           <button className="send_btn">Send</button>
                        </div>

                     </div>

                  </form>
               </div>

            </div>

         </div>

      </div>
      </section>
      </div>
    )
  }
  
  export default Contact;