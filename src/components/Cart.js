import {useEffect,useState} from "react"
import axios from 'axios'
import { withRouter,Link } from "react-router-dom"
import {connect} from "react-redux"
import "./Cart.css"
import {css} from "@emotion/react"
import  DotLoader from "react-spinners/DotLoader";
const override=css`
display: block;
margin :0 auto;
border-color:#66e0ff;`;

function Cart(props){
    let[loading,setLoading]=useState(false);
    let[color,setColor]=useState("#99ebff");
    var [cakes,setCakes]=useState([])
    var [cakesCount,setcakesCount]=useState(0)
    var [price,setPrice]=useState(0)
    function backtoshop(){
        props.history.push("/")
    }
    function checkOut(){
        let data={
            totalCart:cakes,
            totalPrice:price,
            totalItems:cakesCount
        }
        props.dispatch({
            type:"CHECKOUT",
            payload:data
        })
        props.history.push("/checkout")
    }
    const handleDecrement=(cart_id)=>{
        setCakes(cakes=>
          cakes.map((cake)=>
          cart_id===cake.id?{...cake,quantity:cake.quantity-(cake.quantity>1?1:0)}:cake)
          );
      }
      const handleIncrement=(cart_id)=>{
        setCakes(cakes=>
          cakes.map((cake)=>
          cart_id===cake.id?{...cake,quantity:cake.quantity+(cake.quantity<10?1:0)}:cake)
          );

      }
      
      function handleRemove(cakeid){
        // console.log(cakeid)
        // alert("minus event")
        axios({
            method:"post",
            url:"https://apifromashu.herokuapp.com/api/removecakefromcart",
            data:{cakeid},
            headers:{
                "authtoken":localStorage.token
            }
            }).then((response)=>{
                console.log(response.data)
                window.location.reload(false)
            },(error)=>{
                console.log(error)
            })
    }
    useEffect(()=>{
        setLoading(true);
        axios({
            method:'post',
            data:{},
            url:"https://apifromashu.herokuapp.com/api/cakecart",
            headers:{
                "authtoken":localStorage.token
            }
        }).then((response)=>{   
         console.log("response" ,response.data)
         var items = response.data.data;
         setCakes(response.data.data)
         price = items.map(item => item.price * item.quantity).reduce((x, y) => {
            return x + y
        });
         items.forEach((each) => {
             cakesCount=cakesCount+1
         });
         console.log(price)
         setPrice(price)
         setcakesCount(cakesCount)
         setLoading(false);
        },(error)=>{
            console.log("error from api", error)
            setLoading(false);
           
        })
    },[])
   
    
    return (
        <div> 
        {!loading &&
      <div class="card my-4">
      <div class="row">
          <div class="col-md-8 cart">
              <div class="title">
                  <div class="row">
                      <div class="col">
                          <h4><b>Shopping Cart</b></h4>
                      </div>
                      <div class="col align-self-center text-right text-muted">{cakes && cakes.length} items</div>
                  </div>
              </div>
              {cakes && cakes.map((cake) => {
                  return <div class="row border-top border-bottom">
                      <div class="row main align-items-center">
                          <div class="col-2"><Link to={`/cakedetails/${cake.cakeid}`}><img class="img-fluid" src={cake.image} style={{width:"100px",height:"80px"}} /></Link></div>
                          <div class="col">
                              <div class="row"><Link to={`/cakedetails/${cake.cakeid}`}>{cake.name}</Link></div>
                          </div>
                            <div style={{width:"150px"}}className="input-group">
                                <button type="button"onClick={()=>handleDecrement(cake.id)} className="input-group-text">-</button>
                                <div className="form-control text-center">{cake.quantity}</div>
                                <button type="button"onClick={()=>handleIncrement(cake.id)} className="input-group-text">+</button>


                                </div>
                                <div class="col">{cake.price} <span class="close"><button onClick={handleRemove.bind(null,cake.cakeid)}>&#10005;</button></span></div>
                          </div>
                  </div>
              })}
              <div class="back-to-shop"><Link to={`/`}><a onClick={backtoshop} href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></a><span class="text-muted">Back to shop</span></Link></div>
          </div>
          <div class="col-md-4 summary">
              <div>
                  <h5><b>Summary</b></h5>
              </div>
              <hr />
              {cakes && cakes.map((cakes) => {
                  return <div class="row mb-5">
                      <div class="col" style={{ paddingLeft: "0", fontSize: "12px" }}>{cakes.name} - {cakes.quantity}</div>
                      <div class="col text-right">{cakes.price * cakes.quantity}</div>
                  </div>
              })}
              <div class="row" style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}>
                  <div class="col">TOTAL PRICE</div>
                  <div class="col text-right">{price}</div><br/><br/>
              </div> <button class="btn " onClick={checkOut} style={{backgroundColor:"black",color:"white",marginLeft:"70px"}}>CHECKOUT</button>
          </div>
      </div>
  </div>
        }
    {loading && <DotLoader color={color} loading={loading} css={override} size={50}/>}
    </div>
    )
}
Cart =withRouter(Cart)
export default connect()(Cart)