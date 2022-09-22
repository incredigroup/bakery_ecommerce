import React from "react";

import ReactDOM from "react-dom";

function AboutUs() {
    return (
      <div id="about" className="about">
            <div className="container">
               <div className="row">
                  <div className="col-md-6 offset-md-3">
                     <div className="titlepage">
                        <h2>About Us</h2>
                        <span>All our products and services shall be offered with the same love , care and affection as if , they were meant for the most beloved person.
                              For we believe good intensions yield good products and services, so we are fair to all customer.  
                              We provide quick delivery of  the baked products. Our core purpose to help people express their happiness in a memorable way.</span>
                     </div>
                  </div>
                  <div className="col-md-12">
                     <div className="about_img">
                        <figure><img src="../assets/images/about.png" alt="#" /></figure>
                        <a className="read_more" href="Javascript:void(0)"> Read More</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        

)
  }
  
  export default AboutUs;