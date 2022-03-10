
import { Link } from "react-router-dom"
function Cake(props) {
  //console.log("props received",props) //everytime it will get {cake:{name:"",price:"",image:""}}

  function showcake(cakeid) {

  }

  return (

    <div class="card" style={{ width: "18rem", margin: "7px" }}>
      <Link to={"/cakedetails/" + props.one.cakeid}><img onClick={showcake.bind(null, props.one.cakeid)} style={{ height: "15rem" }} src={props.one.image} class="card-img-top" alt="..." /></Link>
      <div class="card-body">
        <h5 class="card-title">{props.one.name}</h5>
        <p class="card-text">{props.one.price}</p>

        {props.one.discountprice && <p class="card-text">Discounted price:{props.one.discountprice}</p>}

      </div>

    </div>
  )
}
export default Cake;