
import { useState } from "react"
import {useEffect} from "react";
import axios from "axios";
import React from "react";

export default function CustomerList() {
let [user,setUser]=useState([])


useEffect(() => {
    axios.get("http://localhost:8080/user/getAll",{}).
    then((res)=>{ setUser(res.data); console.log(res.data)}).
    catch((err)=>{ console.log(err)});;
 },[]);
 

return (
    <div>
        <center><table border="2" bgcolor="yellow" style={{"width":"100%"}}>
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