import axios from "axios";
import { useState,useEffect } from "react";
import {connect} from "react-redux"
function OrderSummary(props){
    var orderid=props.order
    var isLoading=props.loading
    //let[orderid,setOrdreid]=useState(undefined);
   /* useEffect(()=>{
        axios({
            method:'post',
            url:"https://apifromashu.herokuapp.com/api/cakeorders",
            data:{},
            headers:{
                "authtoken":localStorage.token
            }
        }).then((response)=>{
        // console.log(response.data.cakeorders.orderid)
         response.data.cakeorders.forEach((each) => {
          setOrdreid(each.orderid)
       });
        },(error)=>{
            console.log("error from api", error)
    
        })
    },[])*/
    return (
        <div>
            <h1 style={{textAlign:"center", color:"black", borderBottomStyle:"ridge"}}>Thanks for shopping </h1>
            <h2 style={{textAlign:"center", color:"red"}}>Your order ID is &nbsp;{orderid}</h2>
            
        </div>
    )
}
export default connect(function(state,props){
    return{
        order:state.orderid,
        loading:state.isLoading
    }
  })(OrderSummary)