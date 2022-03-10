import {useState, useEffect} from "react"
import axios from "axios"
import Cake from "./Cake"
import queryString from "query-string"
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;


function Search(props){

    var onsearch=true
    var query = queryString.parse(props.location.search)
    var [cake,setcake]=useState([])
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#ffffff");

    useEffect(()=>{
        setLoading(true)
        axios({
            method:'get',
            url:"https://apifromashu.herokuapp.com/api/searchcakes?q="+query.q
            
        }).then((response)=>{
            console.log("response" ,response.data)
            setcake(response.data.data)
            setLoading(false)
        },(error)=>{
            console.log("error from api", error)
            setLoading(false)
        })
    },[query.q]);

    
    return(
        <div>
        {!loading &&
        <div className="row m-3">
                       

 {cake.map((each)=>{
                console.log("Hello", each)
                return <Cake one={each}>
                
                        </Cake>
                

            }
            )
            }      
            <div>

                </div>  
                {onsearch==true && <div><h1>No results found</h1></div>}
            
            </div>
             }
                
                
            {loading && <ClipLoader color={color} loading={loading} css={override} size={100}/>}
            </div>
    )
}
export default Search