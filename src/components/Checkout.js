import { Route,Redirect,Link } from "react-router-dom";
import Cartsummary from "./Cartsummary";
import Address from "./Address";
import Payment from "./Payment";
import Ordersummary from "./Ordersummary";
import {connect} from "react-redux"
function Checkout(props){
    var isCartSummary= true
    var isAddress=props.isaddress
    var isPayment=props.ispayment
    var isOrderSummary=props.isordersum
    return(
        <div className="container" style={{paddingTop:"20px"}}>
            <div className="row">
                <div style={{border:"1px solid black" }} className="col-md-4">
                    {isCartSummary == true && <div>
                        <Link to="/checkout/cartsummary">Cart Summary</Link>
                    </div>}
                    {isAddress==true&&<div>
                        <Link to="/checkout/address">Address</Link>
                    </div>}
                    {isPayment==true&&<div>
                        <Link to="/checkout/address">Payment</Link>
                    </div>}
                    {isOrderSummary==true&&<div>
                        <Link to="/checkout/ordersummary">Order Summary</Link>
                    </div>}
                </div>
                <div style={{border:"1px solid black"}} className="col-md-8">
                    <Route exact path="/checkout/"><Redirect to="/checkout/cartsummary"></Redirect></Route>
                    <Route exact path="/checkout/cartsummary" component={Cartsummary} />
                    <Route exact path="/checkout/address" component={Address} />
                    <Route exact path="/checkout/payment" component={Payment} />
                    <Route exact path="/checkout/ordersummary" component={Ordersummary} />
                </div>
            </div>
        </div>
    )
}
export default connect(function(state,props){
    return{
        isaddress:state.addresstool,
        ispayment:state.paymentTool,
        isordersum:state.ordersumtool
    }
})(Checkout)