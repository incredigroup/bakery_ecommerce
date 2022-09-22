import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button, Nav, Navbar,NavDropdown } from 'react-bootstrap';
import axios from "axios";

export default class Registeration extends React.Component{

    constructor(props)
    {
         super(props);
         this.state={
            email:"",
            pwd:"",
            fname:"",
            lname:"",
            phoneNo:"",
            role:"",
            customer:{},
            success: false
         }
    }

    handleChange=(e)=>{
        const nm = e.target.name;
        const val = e.target.value;
        this.setState({[nm]: val});
    }

    
    
    submitData=(e)=>{
    //   useEffect(()=>{ },[]);
  
        
       

        axios.post("http://localhost:8080/user/register",{
            emailId: this.state.email,
            password: this.state.pwd,
            firstName: this.state.fname,
            lastName: this.state.lname,
            role: this.state.role,
            phoneNo: this.state.phoneNo
        }).then((response) =>{
            console.log(response.data);
            alert("user added");
        }).catch((e) => {
            console.log(e);
            alert("user not added");
        })
  
    }
    render(){
        return(
            <div>
                <h2>Customer Registration Form</h2>
                {/* <h2>Customer Registration</h2>
                <form>
                    Enter Email-ID : <input type="text" name="email" onChange={this.handleChange}/><br/>
                    Enter Password : <input type="text" name="pwd" onChange={this.handleChange}/><br/>
                    Enter Name : <input type="text" name="name" onChange={this.handleChange}/><br/>
                    Enter Address : <input type="text" name="address" onChange={this.handleChange}/><br/>
                    Enter Contact Number : <input type="text" name="contact" onChange={this.handleChange}/><br/>
                    <input type="submit"  value="Register" onClick={this.submitData} />              
                </form> */}
                
                <Container>
                    <div class="vertical-center">
                    <Form>
                    <Form.Group className="mb-6" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" onChange={this.handleChange} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-6" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="pwd" onChange={this.handleChange} placeholder="Enter Password" />
                    </Form.Group>
                    <Form.Group className="mb-6" controlId="formGroupPassword">
                        <Form.Label>FirstName</Form.Label>
                        <Form.Control type="text" name="fname" onChange={this.handleChange} placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-6" controlId="formGroupPassword">
                        <Form.Label>LastName</Form.Label>
                        <Form.Control type="text" name="lname" onChange={this.handleChange} placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-6" controlId="formGroupPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" name="phoneNo" onChange={this.handleChange} placeholder="Enter Contact Number" />
                    </Form.Group>
                    <Form.Group className="mb-6" controlId="formGroupPassword">
                        <Form.Label>Role</Form.Label>
                        <Form.Control type="text" name="role" onChange={this.handleChange} placeholder="Enter Contact Number" />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={this.submitData}>
                        Submit
                    </Button>
                    <Button variant="primary" type="button" onClick={this.FetchData}>Get</Button>
                    </Form>
                    <p style={{ display: this.state.success ? 'block' : 'none' }}>
                    Customer Registered Successfully
                    </p>
                    </div>
                </Container>
                
            </div>
        )
    }

}
