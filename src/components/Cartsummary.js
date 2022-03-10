import { useState } from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
function CartSummary(props){
    let[isAddress,setAddress]=useState(false)
    function handleNext(){
        setAddress(true)
        props.dispatch({
            type:"CARTSUMMARY",
            addresstool:isAddress
        })
        props.history.push("/checkout/address")
    }
    return(
        <div className="row">  
        <div style={{marginLeft:"0.6rem",backgroundColor:"whitesmoke"}}>
             <h1 style={{float:"left"}}>Summary</h1>
             
            <h3 style={{float:"right",paddingRight:"10px"}}>{props.checkout.totalItems} items</h3>
                
       
              <table class="table">
               
                <tbody>
                        {props.checkout.totalCart.map((each)=>{
                            return<tr>
                                <td><img style={{paddingLeft:"1rem",height:"5rem", width:"7rem"}} src={each.image} class="card-img-top" alt="..."/></td>
                            <td><p style={{paddingTop:"2rem"}}>{each.name}</p></td>
                            
               
                            <td><h5 style={{paddingTop:"2rem",paddingLeft:"5rem"}}>{each.price*each.quantity}</h5></td>
                            </tr>
                        })}
                </tbody>
            </table>
          
            <div style={{float:"left"}}>
                <h3 style={{float:"left",paddingLeft:"2rem"}}>Total Price</h3>
                <h5 class="card-text" style={{float:"right", paddingLeft:"26rem"}}>{props.checkout.totalPrice}</h5>
            </div>
            <button onClick={handleNext} style={{marginLeft:"15rem"}} class="btn btn-primary">Proceed to NEXT</button>
        </div>
    </div>)
}
CartSummary=withRouter(CartSummary)
export default connect(function(state,props){
    return{
        checkout:state.cart
    }
})(CartSummary)