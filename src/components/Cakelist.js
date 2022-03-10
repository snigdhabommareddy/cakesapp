import Cake from "./Cake"
import {useState} from "react"
import { useEffect } from "react"
import axios from "axios"
import {snigdha} from "../Instances"

function Cakelist(){
    
    var [cakes,setCakes] = useState([]);
function lowtohigh(){
    cakes.sort((cake1,cake2)=>{
        var result=cake1.price-cake2.price
        return result
    })
    setCakes(cakes)
}
function hightolow(){
    cakes.sort((cake1,cake2)=>{
        var result=cake2.price-cake1.price
        return result
    })
    setCakes(cakes)
}

    useEffect(()=>{
        
        snigdha({
            method:'get',
            url:"https://apifromashu.herokuapp.com/api/allcakes"
        }).then((response)=>{
            console.log("response from all cakes api",response.data.data);
           setCakes(response.data.data);
          
            
        })
    },(error)=>{
        console.log("error from api",error)
        
        },[])
        
    return (
      <div> 
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    sort by price
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <a onClick={lowtohigh} class="dropdown-item" href="#">Low to High</a>
    <a onClick={hightolow}class="dropdown-item" href="#">High to Low</a>
  </div>
</div>
              <div className="row m-3">
               {
              cakes.map((each)=>{
                  return <Cake one={each} ></Cake>
              })
               }
              </div>
              </div> 
    )
}
export default Cakelist