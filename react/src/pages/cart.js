import axios from "axios";
import { Link, useLocation } from 'react-router-dom';
import {useEffect} from "react";
import { useState } from "react"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function  Cart()
{
     let [prod,setProd]=useState({});
    let [pname,setPname]=useState()
    let [cname,setCname]=useState("")
    let [price,setPrice]=useState()
    // let [prodName,setProdName]=useState("")
    let [arr,setArr]=useState([])
    let [obj2,setObj2]=useState({});
    let [arr2,setArr2]=useState([])


    let obj=useLocation();
    console.log("param",obj);
    //let id=obj.state.prodid;

    const f1=() => {
        // console.log("id",id);
        let str="";
        let count=0;
       let list= sessionStorage.getItem("prodlist");      
        console.log("items",list);
   for (let i=0; i<list.length; i++) {
    if(list[i]!==",")
    {   
        
        str=str+list[i];
        console.log("str",str);
    }
    else
    {
        arr2.push(str);
        str='';
        continue;
        console.log("arr2",arr2);
        console.log("str",str);
    }

    
        
   }
// 
    //    console.log("sessionlist",list);
    //    for(let i=0;i<list.length;i++) {
    
    //         // let str=""+list[i];
    //         console.log("string",list[i]);
    //     }
        axios.get(`http://localhost:8080/product/findbyid/${list}`,{}).
        then((res)=>{ setPname(res.data.prodName); setCname(res.data.categoryName);
            setPrice(res.data.sellingPrice);
            console.log("db list",res.data) ;
//             sessionStorage.setItem("prodList",res.data)   ;
// console.log("session list",sessionStorage.getItem("prodList")) ;
        // ;arr.push({pn:pname,cn:cname,pr:price});console.log("array",arr);return arr
       }).
        catch((err)=>{ console.log(err)});;
     };
    return (
        <div>

{/* <ol>{arr.map((ele)=>{  
      return ( <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { ele.pname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
           {ele.cname}
            <h5>Cost:{ele.price}</h5>
        </Typography>
    </CardContent>)
    })}</ol> */}
           
          <h1> <center><ol>
            {
                arr.map((ele,index)=>{
return ( <span key={index}><li>
                        {ele.pn}
                  </li>
                  <li>
                        {ele.cn}
                  </li>
                  <li>
                        {ele.pr}
                  </li>
                  </span>)
                 

                })
            }
            
                

            </ol>
            </center>
            </h1>
            <button type="button" class="btn btn-outline-primary" onClick={() => {  f1() }} >
                  ADD  TO CART
                  {/* <Link to="cart"  state={{prodid:ele.prodId}}>Add to cart</ Link>  */}
                </button>
        </div>
    )
}