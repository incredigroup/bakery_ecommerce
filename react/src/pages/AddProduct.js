import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminDash() {

    let [product_name, setProduct_name] = useState("")
    let [category_name, setcategory_name] = useState("")
    let [stock, setstock] = useState("")
    let [selling_price, setSelling_price] = useState("")
    let [image, setImage] = useState()
    let navigate = useNavigate();


    function addDataHandler() {

        // console.log(item)
        axios.post('http://localhost:8080/product/add/', {
            prodName: product_name,
            categoryName: category_name,
            stock: stock,
            sellingPrice: selling_price,
            img:image
        }).then(Response => {
                if (Response.status === 200) {
                    alert(" Operation Succefully  ")
                    navigate("/login")
                } else {
                    alert("Invalid Data format")
                }
            }).catch((error) => { alert(error.message)});

    }

    return (
        <div>
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
                                                <Link className="nav-link" to="/about">About Us</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/ourProduct">our product</Link>
                                            </li>
                                            {/*<li className="nav-item">
                     <Link className="nav-link"  to="/gallery"></Link>
</li>*/}
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/contact">Contact Us</Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link className="nav-link" to="/product">Login</Link>
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



                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>


            </header>
            <section className="vh-100" style={{ "background-color": "#b6c6d8;" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ "border-radius": "1rem;" }}>
                                <div className="row g-0">
                                    <div className="col-md-8 col-lg-6 d-none d-md-block">
                                        <img src="assets/img/login.jpg" width="100%" height="100%"
                                            alt="login form" style={{ "border-radius": "1rem 0 0 1rem;" }} />
                                    </div>
                                    <div className="col-md-4 col-lg-6 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">


                                            <h1><u>Product Operation </u></h1>

                                            <div className="form-row" >
                                                {/* <div className="form-group">
                <label htmlFor="f_name">Product Id:</label>
                <input type="text" maxLength={"25"} name="productid" id="p_id" placeholder="product name" required onBlur={(event)=>{setProduct_id(event.target.value)}} />
              </div> */}
                                                <div className="form-outline mb-4">
                                                    <label htmlFor="l_name">Product Name :</label>
                                                    <input type="text" maxLength={"25"} placeholder="" name="p_name" id="p_n" required onBlur={(event) => { setProduct_name(event.target.value) }} />
                                                </div>
                                            </div>


                                            <div className="form-group">
                                                <label htmlFor="l_name">Category Name :</label>
                                                <input type="text" maxLength={"25"} placeholder="" name="p_name" id="p_n" required onBlur={(event) => { setcategory_name(event.target.value) }} />
                                            </div>


                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label htmlFor="mobile">price :</label>
                                                    <input type="number" maxLength={"14"} name="cost" id="c1"
                                                        required onBlur={(event) => { setSelling_price(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label htmlFor="mobile">Stock :</label>
                                                    <input type="number" maxLength={"14"} name="stock" id="s1"
                                                        required onBlur={(event) => { setstock(event.target.value) }} />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label htmlFor="mobile">Add image :<br></br></label>
                                                    <input type="file"  name="image" id="img"
                                                        required onChange={(event) => { setImage(event.target.files[0]) }} />
                                                        {/* <button onClick={() =>axios.post('')}>Upload File</button> */}
                                                </div>
                                            </div>


                                            <div className="form-submit">
                                                <input type="button" value="Submit Form" className="submit" name="submit" id="submit" onClick={addDataHandler} />
                                            </div>
                                        </div>

                                        {/* <div className="d-flex align-items-center mb-3 pb-1">
                                            <i className="fas fa-cubes fa-2x me-3" style={{ "color": "#ff6219;" }}></i>
                                            <span className="h1 fw-bold mb-0" style={{ "text-align": "center" }}>Sign In</span>
                                        </div>


                                        <div className="pt-1 mb-4">
                                            <button className="btn btn-dark btn-lg btn-block" type="button" >Sign In</button>
                                        </div>

                                        <a className="small text-muted" href="#!">Forgot password?</a>
                                        <p className="mb-5 pb-lg-2" style={{ "color": "#393f81;" }}>Don't have an account? <a href="./Registeration"
                                            style={{ "color": "#393f81;" }}>Register here</a></p>
 */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
     
            </section >
    {/* <div className="main">
    <div className="container-fluid" class="border border-primary mb-20">
      {/* <div className="signup-content">
        <div className="signup-img">
          <img src="/assets/img/reg_form_images/female.jpg" alt="" />
        </div> */}

    {/* <div className="signup-form"> */ }
    {/* <form method="POST" className="register-form" id="register-form"> */ }


        </div >
     

            
    )
}