import { useState ,useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux"
import store from "../reduxstore/store"


function Navbar(props){
var isuserloggedin=false

  var [searchtext, setSearchtext]=useState([])
  useEffect(()=>{
    store.subscribe(()=>{
      console.log("state of store is" +store.getState())
    })
  },[])
  function logout(){
    localStorage.clear()
    window.location.href='/'
  }


  function search(){
    alert("user is searching for", +searchtext)
  }
   
    function searchbutton(event){
        console.log("the user searched for" ,event.target.value)
        setSearchtext(event.target.value)

    }
    
    
    return(
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
   <Link to="/"> <a class="navbar-brand">snigdha's cake gallery</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <input onChange={searchbutton} class="form-control mr-sm-2"style={{width:"400px"}} type="search" placeholder="Search" aria-label="Search" />
        <Link to={`/search?q=${searchtext}`}> <button onClick={searchbutton}class="btn btn-outline-success" type="submit">Search</button></Link>
     
        { props.isuserloggedin==false && <div>
          <Link to="/Login"><button style={{float:"right"}} class="btn btn-primary" type="submit">Login</button></Link>

          </div>}

          { props.isuserloggedin == true && <div class="form-inline my-2 my-lg-0">
    <button onClick={logout} class="btn btn-danger my-2 my-sm-0">Logout</button>
   <Link to ="/Cart"> <button class="btn btn-warning my-2 my-sm-0 ml-3">Cart</button></Link>
     <Link to="/Myorders"> <button class="btn btn-secondary my-2 my-sm-0 ml-3">My orders</button></Link>
     <Link to="/Adminpanel"><button style={{float:"right"}} class="btn btn-info" type="submit">Adminpanel</button></Link>

    </div>}

      </div>
    </div>
  
</nav>
        </div>
    )

}
export default  connect(function(state,props){
  return{
    isuserloggedin : state["isloggedin"]
  }
})(Navbar)