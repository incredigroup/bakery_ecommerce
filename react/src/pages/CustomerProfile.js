import { useState } from "react"
import {useEffect} from "react";
import axios from "axios";
import React from "react";


export default function CustomerProfile() {
let [users,setUsers]=useState([])
let [user,setUser]=useState([])


useEffect(() => {
    axios.get("http://localhost:8080/user/getAll",{}).
    then((res)=>{ setUsers(res.data); console.log(res.data); return users;}).
    then((res)=>{setUser(users.filter((e)=>{ return e.emailId===sessionStorage.getItem("username")}))
 });
    
 },[]);
 

return (
    <div>
         <img class="bg-img" color="blue"></img>
        <center>
            <table border="2" bgcolor="yellow" style={{"width":"100%"}}>
            <thead>
                <th>firstname</th>
                <th>lastName</th>
                <th>emailId</th>
            </thead>
            <tbody>
            {user.map((ele)=>{  
      return ( <tr><td> { ele.firstName}</td>
          <td> {ele.lastName}</td>
          <td>{ele.emailId}</td>
          </tr>)  })}
       </tbody>
        </table></center>
    </div>



)



}