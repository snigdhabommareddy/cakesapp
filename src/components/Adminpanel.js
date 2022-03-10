import {connect} from "react-redux"
import { Route,Redirect,Link } from "react-router-dom";
import Addcake from "./Addcake"
import Allcakes from "./Allcakes"
function Adminpanel(){
    return(
        <div className="container" style={{paddingTop:"20px"}}>
           <div className="row">
           <div style={{border:"1px solid black" }} className="col-md-4">
           <div>
               <Link to="/adminpanel/addcake">Add cake</Link>
                    </div>
                    <div>
               <Link to="/adminpanel/allcakes">All cakes</Link>
                    </div>
          </div>
              
        <div style={{border:"1px solid black"}} className="col-md-8">
        <Route exact path="/adminpanel/"><Redirect to="/adminpanel/addcake"></Redirect></Route>
        <Route exact path="/adminpanel/addcake" component={Addcake} />
        <Route exact path="/adminpanel/allcakes" component={Allcakes} />
        </div>
        </div> 
        </div>
    )
}

export default connect()(Adminpanel)