
import React from "react";
import { Link } from "react-router-dom";

function Home() {
   return (
      <div className="main-layout">

         <div className="loader_bg">
            <div className="loader"><img src="../assets/images/loading.gif" alt="#" /></div>
         </div>

         <header className="full_bg">

            <div className="header">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                        <div className="full">
                           <div className="center-desk">
                              <div className="logo">
                                 <a href="index.html"><img src="assets/images/logo.png" alt="#" /></a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                        <nav className="navigation navbar navbar-expand-md navbar-dark ">
                           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                           </button>
                           <div className="collapse navbar-collapse" id="navbarsExample04">
                              <ul className="navbar-nav mr-auto">
                                 <li className="nav-item active">
                                    <a className="nav-link" href="#index" active >Home</a>
                                 </li>
                                 <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                 </li>
                                 <li className="nav-item">
                                    <a className="nav-link" href="#p1">our product</a>
                                 </li>
                                 <li className="nav-item">
                                    <a className="nav-link" href="#g1">gallery</a>
                                 </li>
                                 <li className="nav-item">
                                    <a className="nav-link" href="#c1">Contact Us</a>
                                 </li>
                                 {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                       Login
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                       <a className="dropdown-item" href="https://www.facebook.com/">Admin</a>
                                       <a className="dropdown-item" href="#">Farmer</a>
                                       <a className="dropdown-item" href="#">Customer</a>
                                    </div>
                                 </li> */}

                                     <li className="nav-item">
                                    <Link className="nav-link" to="login">Login</Link>
                                 </li>

                              </ul>
                           </div>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>

            <section className="banner_main">
               <div className="container">
                  <div className="banner_po">
                     <div className="row">
                        <div className="col-md-7">
                           <div className="text_box">
                              <span>Now started</span>
                              <h1> <strong>Online </strong> <br /> Bakers </h1>
                              <a className="read_more" href="#about" role="button">About us</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </header>

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
         <section id="p1">

            <div className="products">
               <div className="container">
                  <div className="row">
                     <div className="col-md-7">
                        <div className="titlepage">
                           <h2>Our Products</h2>
                           <span> gfgfgfgfgfgfgf Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptu
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-lg-3 col-md-6 col-sm-6">
                        <div id="ho_bo" class="our_products">
                           <div className="product">
                              <figure><img src="../assets/images/pro1.png" alt="#" /></figure>
                           </div>
                           <h3>cake</h3>
                           <span></span>
                           <p></p>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6">
                        <div id="ho_bo" className="our_products">
                           <div className="product">
                              <figure><img src="../assets/images/pro2.png" alt="#" /></figure>
                           </div>
                           <h3>Ice Cream</h3>
                           <span></span>
                           <p> </p>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6">
                        <div id="ho_bo" className="our_products">
                           <div className="product">
                              <figure><img src="../assets/images/pro3.png" alt="#" /></figure>
                           </div>
                           <h3>Pastry</h3>

                           <span></span>
                           <p> </p>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </section>

         {/*
         <div className="using">
            <div className="container-fluid">
               <div className="row d_flex">
                  <div className="col-md-6">
                     <div className="titlepage">
                        <h2 >Lorem Ipsum using</h2>
                        <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise</p>
                        <a className="read_more white_bg" href="Javascript:void(0)"> Read More</a>
                     </div>
                  </div>
                  <div className="col-md-5 offset-md-1 padding_right0">
                     <div className="frout_img">
                        <figure><img src="../assets
                     images/frout.png" alt="#" /></figure>
                     </div>
                  </div>
               </div>
            </div>
         </div>


         <section id="g1">
            <div className="gallery">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="titlepage">
                           <h2>Gallery</h2>
                           <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </span>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-md-4 col-sm-6">
                        <div className="gallery_img">
                           <figure><img src="../assets/images/gallery1.png" alt="#" /></figure>
                        </div>
                     </div>
                     <div className="col-md-4 col-sm-6">
                        <div className="gallery_img">
                           <figure><img src="../assets/images/gallery2.png" alt="#" /></figure>
                        </div>
                     </div>
                     <div className="col-md-4 col-sm-6">
                        <div className="gallery_img">
                           <figure><img src="../assets/images/gallery3.png" alt="#" /></figure>
                        </div>
                     </div>
                     <div className="col-md-4 col-sm-6">
                        <div className="gallery_img">
                           <figure><img src="../assets/images/gallery4.png" alt="#" /></figure>
                        </div>
                     </div>
                     <div className="col-md-4 col-sm-6">
                        <div className="gallery_img">
                           <figure><img src="../assets/images/gallery5.png" alt="#" /></figure>
                        </div>
                     </div>
                     <div className="col-md-4 col-sm-6">
                        <div className="gallery_img">
                           <figure><img src="../assets/images/gallery6.png" alt="#" /></figure>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
   */}


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
            <footer>
               <div className="footer">
                  <div className="container">
                     <div className="row">
                        <div className="col-md-8 offset-md-2">
                           <div className="newslatter">
                              <h4>Subscribe Our Newsletter</h4>
                              <form className="bottom_form">
                                 <input className="enter" placeholder="Enter your email" type="text" name="Enter your email" />
                                 <button className="sub_btn">subscribe</button>
                              </form>
                           </div>
                        </div>
                        <div className="col-sm-12">
                           <div className=" border_top1"></div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-4">
                           <h3>menu LINKS</h3>
                           <ul class="link_menu">
                              <li><a href="#">Home</a></li>
                              <li><a href="#about"> About</a></li>
                              <li><a href="#p1">Our Product</a></li>
                              <li><a href="#g1">Gallery</a></li>
                              <li><a href="#c1">Contact Us</a></li>
                           </ul>
                        </div>
                        <div className=" col-md-3">
                           <h3>TOP food</h3>
                           <p className="many">
                              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
                           </p>
                        </div>
                        <div className="col-lg-3 offset-mdlg-2     col-md-4 offset-md-1">
                           <h3>Contact </h3>
                           <ul className="conta">
                              <li><i className="fa fa-map-marker" aria-hidden="true"></i> Location</li>
                              <li> <i className="fa fa-envelope" aria-hidden="true"></i><a href="#"> demo@gmail.com</a></li>
                              <li><i className="fa fa-mobile" aria-hidden="true"></i> Call : +01 1234567890</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="copyright">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-10 offset-md-1">
                              <p>© 2019 All Rights Reserved. Design by <a href="https://html.design/"> Free Html Templates</a></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </footer>



       

      </div>
   )
}

export default Home;