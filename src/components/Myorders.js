import {connect} from "react-redux"
import {myordersthunk} from "../reduxstore/thunks"
import {useEffect} from "react"
function Myorders(props){
    useEffect(()=>{
        props.dispatch(myordersthunk())
    },[])
    return(
        <div  className="container">
        <div className="shadow-sm p-3 mb-5 bg-white rounded">
        <div class="title">
            <div class="row">
                <div class="col">
                    <h4><b>My Orders</b></h4>
                    </div>
            </div>
         </div>
          <div class="accordion" id="accordionExample">
          {props.order && props.order.map((each)=>{
            return <div class="card">
                <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Orders # {each.orderid}
                    </button>
                </h2>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                <div className="row mb-2">
                    <div className="col-md-6">
                        <h6>Order Information</h6>
                        <div>Price : {each.price}</div>
                        <div>Payment Mode : {each.mode}</div>
                        <div>Purchased On : {each.orderdate}</div>
                    </div>
                    <div className="col-md-6">
                        <h6>Shipping Information</h6>
                        <div>{each.name}</div>
                        <div>{each.address}</div>
                        <div>{each.city}, {each.pincode}</div>
                    </div>
                     <table class="table">
            <thead>
                <tr>
                <th scope="col">items</th>
                </tr>
            </thead>
            <tbody>
            {each.cakes && each.cakes[0].map((each)=>{
                 return  <tr>
                <td><img style={{width:"70px",height:"70px"}}src={each.image} alt="..."></img></td>
                <td>{each.name}</td>
                <td>Qty: {each.quantity}</td>
                <td>{each.price}</td>
                </tr>
                    })}
                </tbody>
            </table>
                </div>
                </div>
                </div>
                </div>
          })}
        </div>
        </div>
        </div>
    )}
export default connect(function(state,props){
            return{
                order:state["myorders"] || []
            }
          })(Myorders)