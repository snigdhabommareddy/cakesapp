import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {useState} from "react"
function Address(props){
   var name
   var area 
   var city
   var pincode
   var phone
   var address
   var price=props.checkout.totalPrice
   var cakes=[props.checkout.totalCart]
   let[isPayment,setPayment]=useState(false);
    function handleAddress(e){
      setPayment(true)
      e.preventDefault()
      let order={price,name,area,city,address,pincode,phone,cakes}
      console.log(order)
      props.dispatch({
        type:"ADDRESS",
        payload:order,
        paymentTool:isPayment
    })
    props.history.push("/checkout/payment")
    }
    function handleName(event){
      name=event.target.value
    }
    function handleArea(event){
      area=event.target.value
    }
    function handleCity(event){
      city=event.target.value
    }
    function handleZip(event){
      pincode=event.target.value
    }
    function handlePhone(event){
      phone=event.target.value
    }
    function handleLandmark(event){
      address=event.target.value
    }
    return(
        <div>
        <form className="row g-3" style={{paddingTop:"10px"}}>
        
  <div className="col-md-6"style={{paddingTop:"10px"}}>
    <label className="form-label" >Name</label>
    <input onChange={handleName} type="text" id="form6Example3" className="form-control" placeholder ="Enter" />
  </div>
  <div className=" col-md-6" style={{paddingTop:"10px"}}>
    <label className="form-label">Phone</label>
    <input onChange={handlePhone} type="text" id="form6Example6" className="form-control"  placeholder ="Enter"/>
  </div>
  <div className="col-12" style={{paddingTop:"10px"}}>
    <label className="form-label">Address</label>
    <input onChange={handleLandmark} type="text" id="form6Example4" className="form-control" placeholder ="Enter" />
  </div>
  <div className="col-md-4" style={{paddingTop:"10px"}}>
    <label className="form-label">Area</label>
    <input onChange={handleArea} type="text" id="form6Example3" className="form-control"   placeholder ="Enter"/>
  </div>
  <div className="col-md-4" style={{paddingTop:"10px"}}>
    <label className="form-label">City</label>
    <input onChange={handleCity} type="text" id="form6Example4" className="form-control"   placeholder ="Enter"/>
  </div>
  
  <div className="col-md-4" style={{paddingTop:"10px"}}>
    <label className="form-label">Pincode</label>
    <input onChange={handleZip} type="email" id="form6Example5" className="form-control"   placeholder ="Enter"/>
  </div>
  
  <button style={{marginTop:"50px"}} onClick={handleAddress}type="submit" className="btn btn-primary btn-block mb-4">Proceed to Payment</button><br/><br/>
</form>
</div>
    )
}
Address =withRouter(Address)
export default connect(function(state,props){
  return{
      checkout:state.cart
  }
})(Address)