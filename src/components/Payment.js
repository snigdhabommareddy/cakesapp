import {connect} from "react-redux"
import {placeorderthunk} from "../reduxstore/thunks"
import {useState} from "react"
function Payment(props){
    let[isOrderSummary,setOrderSummary]=useState(false);
    function handlePlaceOrder(){
        setOrderSummary(true)
        props.dispatch({
            type:"PAYMENT",
            ordersumtool:isOrderSummary
        })
    props.dispatch(placeorderthunk())
     props.history.push("/checkout/ordersummary")
    }
    return(
        <div>
            <div style={{backgroundColor:"ButtonHighlight",textAlign:"center"}}>
                <h5>Sorry!!!!! No other Payment methods Available, Only Cash On Delivery Available Now</h5>
            </div>
            <button onClick={handlePlaceOrder} type="submit" className="btn btn-primary btn-block mb-4">PLACE ORDER</button>
        </div>
    )
}
export default connect(function(state,props){
    return{
        payment:state.order
    }
})(Payment)