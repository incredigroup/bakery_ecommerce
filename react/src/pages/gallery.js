import React from "react";
import { Link } from "react-router-dom";
function Gallery() {
    return (
       <div class="main-layout inner_page">
       
          <div class="loader_bg">
             <div class="loader"><img src="images/loading.gif" alt="#"/></div>
          </div>
         
          <header class="full_bg">
            
             <div class="header">
                <div class="container-fluid">
                   <div class="row">
                      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                         <div class="full">
                            <div class="center-desk">
                               <div class="logo">
                                  <a href="index.html"><img src="images/logo.png" alt="#" /></a>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                         <nav class="navigation navbar navbar-expand-md navbar-dark ">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarsExample04">
                               <ul class="navbar-nav mr-auto">
                                  <li class="nav-item ">
                                     <a class="nav-link" href="index.html">Home</a>
                                  </li>
                                  <li class="nav-item">
                                     <a class="nav-link" href="about.html">About</a>
                                  </li>
                                  <li class="nav-item">
                                     <a class="nav-link" href="product.html">our product</a>
                                  </li>
                                  <li class="nav-item active">
                                     <a class="nav-link" href="gallery.html">gallery</a>
                                  </li>
                                  <li class="nav-item">
                                     <a class="nav-link" href="contact.html">Contact Us</a>
                                  </li>
                                 
                               </ul>
                            </div>
                         </nav>
                      </div>
                   </div>
                </div>
             </div>
           
          </header>
         
           <div class="back_re">
             <div class="container">
                <div class="row">
                   <div class="col-md-12">
                      <div class="title">
                               <h2>Gallery</h2>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        
      
          <div  class="gallery">
             <div class="container">
                <div class="row">
                   <div class="col-md-12">
                      <div class="titlepage">
                       
                         <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </span>
                      </div>
                   </div>
                </div>
                <div class="row">
                   <div class="col-md-4 col-sm-6">
                      <div class="gallery_img">
                         <figure><img src="images/gallery1.png" alt="#"/></figure>
                      </div>
                   </div>
                   <div class="col-md-4 col-sm-6">
                      <div class="gallery_img">
                         <figure><img src="images/gallery2.png" alt="#"/></figure>
                      </div>
                   </div>
                   <div class="col-md-4 col-sm-6">
                      <div class="gallery_img">
                         <figure><img src="images/gallery3.png" alt="#"/></figure>
                      </div>
                   </div>
                   <div class="col-md-4 col-sm-6">
                      <div class="gallery_img">
                         <figure><img src="images/gallery4.png" alt="#"/></figure>
                      </div>
                   </div>
                   <div class="col-md-4 col-sm-6">
                      <div class="gallery_img">
                         <figure><img src="images/gallery5.png" alt="#"/></figure>
                      </div>
                   </div>
                   <div class="col-md-4 col-sm-6">
                      <div class="gallery_img">
                         <figure><img src="images/gallery6.png" alt="#"/></figure>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       
          <footer>
             <div class="footer">
                <div class="container">
                   <div class="row">
                      <div class="col-md-8 offset-md-2">
                         <div class="newslatter">
                            <h4>Subscribe Our Newsletter</h4>
                            <form class="bottom_form">
                               <input class="enter" placeholder="Enter your email" type="text" name="Enter your email"/>
                               <button class="sub_btn">subscribe</button>
                            </form>
                         </div>
                      </div>
                      <div class="col-sm-12">
                         <div class=" border_top1"></div>
                      </div>
                   </div>
                   <div class="row">
                      <div class="col-md-4">
                         <h3>menu LINKS</h3>
                         <ul class="link_menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="about.html"> About</a></li>
                            <li><a href="product.html">Our Product</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                         </ul>
                      </div>
                      <div class=" col-md-3">
                         <h3>TOP food</h3>
                         <p class="many">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
                         </p>
                      </div>
                      <div class="col-lg-3 offset-mdlg-2     col-md-4 offset-md-1">
                         <h3>Contact </h3>
                         <ul class="conta">
                            <li><i class="fa fa-map-marker" aria-hidden="true"></i> Location</li>
                            <li> <i class="fa fa-envelope" aria-hidden="true"></i><a href="#"> demo@gmail.com</a></li>
                            <li><i class="fa fa-mobile" aria-hidden="true"></i> Call : +01 1234567890</li>
                         </ul>
                      </div>
                   </div>
                </div>
                <div class="copyright">
                   <div class="container">
                      <div class="row">
                         <div class="col-md-10 offset-md-1">
                            <p>© 2022 All Rights Reserved. Design by <a href="https://html.design/"> Bakery</a></p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </footer>
        
         
       </div>
 )
  }
  
  export default Gallery;