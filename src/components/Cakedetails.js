import { useState,useEffect,useStyle } from "react";
import {Link} from "react-router-dom"
import { useParams,withRouter } from "react-router-dom";
import axios from "axios"
import {connect} from "react-redux"
import Loader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";


const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;

function Cakedetails(props){
    var params=useParams()
    var cakeid=params.cakeid
    var[cake,setCake]=useState({})
    
    var requestobj={name:cake.name,price:cake.price,image:cake.image,weight:cake.weight,cakeid:cake.cakeid,quantity:1}
   
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#ffffff");

   
    function addToCart(){
        if(localStorage.token){
            setCake(requestobj)
            axios({
                method:"post",
                url:"https://apifromashu.herokuapp.com/api/addcaketocart",
                data:requestobj,
                headers:{
                    "authtoken":localStorage.token
                }
            })
        }
        else{
            props.history.push("/login")
        }
    }
    useEffect(()=>{
        setLoading(true)
        axios({
            method:'get',
            url:'https://apifromashu.herokuapp.com/api/cake/'+cakeid
        }).then((response)=>{
            setCake(response.data.data)
            setLoading(false)
        },(error)=>{
            console.log("error from all cake api" , error)
            setLoading(false)
        })
    },[])

    
    
    return(
        <div>
        {!loading &&
        <div className="container" >
           <div className="row">
               <div className="col-md-4">
                <img src={cake.image} alt={cake.name} style={{height:"300px" , margin:"100px 20px"}} class="img-thumbnail float-left"/>
                
                 </div>
                 <div className="col-md-8">
                <div  style={{paddingTop:"70px",fontSize:"13px"}}>
                    <h1>{cake.name}</h1>
                    <small id="emailHelp" class="form-text text-muted"><p>{cake.cakeid}</p></small>
                    <h2>&#8377;{cake.price}</h2>
                    <p>{cake.ratings}</p>
                    <p>{cake.flavour}</p>
                    <p> {cake.type}</p>
                 <h2> {cake.weight}</h2>
                <p>{cake.description}</p>
                <p>{cake.reviews}</p>
                <p>{cake.likes}</p>
                <p>{cake.createdate}</p>
                
               <Link to="/Cart"> <button class="btn btn-warning"onClick={addToCart}>Add to Cart</button></Link>
                </div>
               </div>
              </div>
              </div>
                
                
        }
                
                
            {loading && <ClipLoader color={color} loading={loading} css={override} size={100}/>}
        
        </div>
    );
           
}
Cakedetails =withRouter(Cakedetails)
export default connect()(Cakedetails)