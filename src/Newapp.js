import { BrowserRouter , Route, Switch} from "react-router-dom";
import React ,{useState} from "react"
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./Home";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Cart from "./components/Cart";
import Forget from "./components/Forget";
import Cakedetails from "./components/Cakedetails";
import Checkout from "./components/Checkout";
import Adminpanel from "./components/Adminpanel";
import Myorders from "./components/Myorders";




function NewApp(){
    var [isuserloggedin,setIsuserloggedin]=useState(localStorage.token?true:false)
  function updateLoginstatus(){
    setIsuserloggedin(true)
  }
    return(
        <BrowserRouter>
        
        <Navbar/>
        
        <Switch>

        
        
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" ><Login ></Login> </Route>
        <Route exact path="/search" component={Search} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/forget" component={Forget} />
        <Route exact path="/cakedetails/:cakeid" component={Cakedetails} />
        <Route  path="/checkout/" component={Checkout} />
        <Route  path="/adminpanel" component={Adminpanel} />
        <Route exact path="/Myorders" component={Myorders} />
        </Switch>
        </BrowserRouter>
    )
}
export default NewApp;