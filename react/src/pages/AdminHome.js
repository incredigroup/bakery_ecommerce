

import React from "react"; 
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function AdminHome(){

return(

<div >
    <header className="full_bg">

    <div className="header">
       <div className="container-fluid">
          <div className="row">
             <div >
                <div className="full">
                   <div className="center-desk">
                      <div className="logo">
                         {/* <a href="index.html"><img src="assets/images/logo.png" alt="#" /></a> */}
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
                         <Link className="nav-link" to="/">Home</Link>
                         </li>
                         <li className="nav-item">
                         <Link className="nav-link" to="/add">Add Product</Link>
                         </li>
                         <li className="nav-item">
                            <Link className="nav-link"  to="/clist">Customer List</Link>
                         </li>
                         {/*<li className="nav-item">
                         <Link className="nav-link"  to="/gallery"></Link>
// </li>*/}
                {/* <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                         </li>  */}

                         {/* <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                         </li>  */}
                    {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                               Login
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                               <a className="dropdown-item" href="https://www.facebook.com/">Admin</a>
                               <a className="dropdown-item" href="#">Farmer</a>
                               <a className="dropdown-item" href="#">Customer</a>
                            </div>
                         </li>  */}

                           

                      </ul>
                   </div>
                </nav>
             </div>
          </div>
       </div>
    </div>

  
 </header>
 </div>





)




}

export default AdminHome;