import React from 'react'
import { connect } from "react-redux"
import {Link} from "react-router-dom"
import {useState,useEffect} from "react"
import { snigdha } from '../Instances'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;
function Allcakes(props) {
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#ffffff");
    var [cakes, setCakes] = useState([])
    useEffect(()=>{
        setLoading(true)
        snigdha({
            method:'get',
            url:"/allcakes"
            
        }).then((response)=>{   
         console.log("response" ,response.data)
         setCakes(response.data.data)
         setLoading(false)
        },(error)=>{
            console.log("error from api", error)
            setLoading(false)
        })
    },[])
    return (
        <div>
            {!loading &&
        <div  style={{backgroundColor:"#f5f5f0"}}>
        <div className="container ">
            <div className="row justify-content-center ">
                  <table class="table mr-5">
                  <tr>
                  <th scope="col">product </th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                  </tr>
                    <tbody>
                        { cakes && cakes.map((each)=>{
                            return <tr>
                                    <td><img src={each.image} style={{height:"50px",width:"70px"}}/></td>
                                     <td>{each.name}</td>
                                    <td> &#8377;{each.price}</td>
                                    <Link to="addcake"><td><button >edit</button></td></Link>
                                    </tr>
                                   })}
                                   
                                   </tbody>
                                  
                             </table>
                            
                       </div>           
         </div>
     </div>
     }
                
                
     {loading && <ClipLoader color={color} loading={loading} css={override} size={100}/>}
     </div>
 )
}
export default connect(function (state, props) {
 return {
     cartitems:state["cart"]

 }
})(Allcakes);