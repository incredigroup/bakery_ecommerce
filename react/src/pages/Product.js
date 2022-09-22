import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import Card from '@mui/material/Card';


export default function Product(props) {
  let [id, setId] = useState();
  let [prod, setProd] = useState([])
  let [list, setList] = useState([])
  let obj = useLocation();
  let c = obj.state.cname;


  console.log(c);

  function f1(x) {
    console.log("prod id",x);
    // for (let i = 0; i < list.length; i++) {
    //   if (list[i] !== x) {
        list.push(x);
        sessionStorage.setItem("prodlist", list);
       
    //   }
    // }
    console.log("session prodllist of id", sessionStorage.getItem("prodlist"));
    console.log("type of session", typeof (sessionStorage.getItem("prodlist")));
  }

  useEffect(() => {
    axios.get(`http://localhost:8080/product/findbycat/${c}`, {}).
      then((res) => { setProd(res.data); console.log(res.data) }).
      catch((err) => { console.log(err) });;
  }, []);

  return (
    <div style={{ "backgroundColor": "lightblue" }}>
      <ol>{prod.map((ele) => {
        return (<CardActionArea>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={ele.image}
              alt={ele.prodName}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {ele.prodName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {ele.categoryName}
                <h5>Cost:{ele.sellingPrice}</h5>
                <h5> </h5>
                <button type="button" class="btn btn-outline-primary" onClick={() => {  f1(ele.prodId) }} >
                  ADD  TO CART
                  {/* <Link to="cart"  state={{prodid:ele.prodId}}>Add to cart</ Link>  */}
                </button>
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
        )
      })}</ol>



    </div>

  )

}