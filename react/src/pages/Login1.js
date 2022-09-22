import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import axios, { Axios } from "axios"

export default function Login1()
{

  let [email,setEmail] = useState("")
  let[password,setPassword]=useState("")

  let navigate = useNavigate()
  let [actor,setActor]=useState('')
  //const dispatch= useDispatch()
 
  function loginHandler()
  {
    if(actor==="admin")
    {
        console.log("admin",email);
        let login={}
        login.emailId=email;
        login.password=password;
        // axios.post('http://localhost:8080/user/loginAd',{emailId:user.email,password:user.pwd})
        axios.post('http://localhost:8080/user/loginAd',login)
      .then(data =>{
            console.log(data.data)
           if(data.data === "authorized")
           {
            alert("success");
            sessionStorage.setItem("sessionName","rohit");
            sessionStorage.setItem("admin",email);
              navigate("/admin")
           }
           else 
           {
            alert("failed");
              navigate("/login");
           }
          
      } ).catch(error => {  console.log(error); alert("error occured") });
    }      
 else 
  {
    console.log("customer",email);
    axios.post('http://localhost:8080/user/loginCust',{emailId:email,password:password})
      .then(data =>{
        console.log("customer",data.data)
       if(data.data === "valid")
       {
        alert("success");
        sessionStorage.setItem("sessionName","rohit");
        sessionStorage.setItem("username",email);
          navigate("/chome")
       }
       else if (data.data === "invalid")
       {
        alert("failed");
          navigate("/login");
       }
      
      } ).catch(error => {  console.log(error); alert("error occured") });
  }
}


    return(
        <>
    <body>
        <section className="vh-100" style={{"background-color": "#b6c6d8;"}}>
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                  <div className="card" style={{"border-radius": "1rem;"}}>
                    <div className="row g-0">
                      <div className="col-md-8 col-lg-6 d-none d-md-block">
                        <img src="assets/img/login.jpg" width="100%" height="100%"
                          alt="login form"  style={{"border-radius": "1rem 0 0 1rem;"}}  />
                      </div>
                      <div className="col-md-4 col-lg-6 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
          
                          <form>
          
                            <div className="d-flex align-items-center mb-3 pb-1">
                              <i className="fas fa-cubes fa-2x me-3" style={{"color": "#ff6219;"}}></i>
                              <span className="h1 fw-bold mb-0" style={{"text-align":"center"}}>Sign In</span>
                            </div>
          
                        
                                  <label htmlFor="radio"> Admin</label>  <input type="radio" id="radio" name="r1" style={{"margin-right":"130px"}} onClick={(e)=>{setActor("admin")}}/>
                                  <label htmlFor="radio1">Customer </label> <input type="radio" id="radio1" name="r1"  style={{"margin-right":"130px;"}} onClick={(e)=>{setActor("customer")}}/>
                              
          
                            <div className="form-outline mb-4">
                              <input type="email" id="form2Example17" name="email" placeholder=" Email "className="form-control form-control-lg" onChange={(e)=>{setEmail(e.target.value)}}/>
                              <label className="form-label" for="form2Example17">Email address</label>
                            </div>
          
                            <div className="form-outline mb-4">
                              <input type="password" id="form2Example27" placeholder="Password" name="pwd" className="form-control form-control-lg" onChange={(e)=>{setPassword(e.target.value)}}/>
                              <label className="form-label" for="form2Example27">Password</label>
                            </div>
          
                            <div className="pt-1 mb-4">
                              <button className="btn btn-dark btn-lg btn-block" type="button" onClick={loginHandler}>Sign In</button>
                            </div>
          
                            <a className="small text-muted" href="#!">Forgot password?</a>
                            <p className="mb-5 pb-lg-2" style={{"color": "#393f81;"}}>Don't have an account? <a href="./Registeration"
                                style={{"color": "#393f81;"}}>Register here</a></p>
                            
                          </form>
                          <span>{password}{email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </body>

        </>
    )
    }