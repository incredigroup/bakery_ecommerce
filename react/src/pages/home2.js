
import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";
function Home1() {
   return (
      <div className="main-layout">
       <Header></Header> 
         {/* <div className="loader_bg">
            <div className="loader"><img src="../assets/images/banner1.jpg" alt="#" /></div>
         </div> */}

       {/* <header className="full_bg">

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
                                 </li> 
     
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

          
         </header> 
          */}


         <section className="banner_main">
               <div className="container">
               <img class="bg-img" src="../assets/images/background_co.jpg" alt="img1"></img>
                  <div className="banner_po">
                     <div className="row">
                        <div className="col-md-7">
                           <div className="text_box">
                              <span>Now started</span>
                              <h1> <strong>Online </strong> <br /> Bakers </h1>
                              <a className="read_more" href="/prod" role="button">About us</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
     



        
            {/* <footer>
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
 */}


       

      </div>
   )
}

export default Home1;