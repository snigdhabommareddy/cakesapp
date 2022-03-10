import axios from "axios"
import {Link} from "react-router-dom"
function Forget(){
    var email
    function handleGetPassword(e){
        e.preventDefault()
        axios({
            method:'post',
            data:{email},
            url:"https://apifromashu.herokuapp.com/api/recoverpassword"
            
        }).then((response)=>{
            console.log("data received from forget API",response.data)
        },(error)=>{
            console.log("error from forget API",error)
        })
    }
    function handleEmail(event){
        email=event.target.value
      }
    return (
        <div style={{backgroundColor:"gainsboro"}} className="container w-50 m-auto">
        <h1>Forgot Password</h1>
        <form> 
            <div className="form-group">
                        <label for="Email">Email address</label>
                        <input type="email"onChange={handleEmail} class="form-control" autoComplete="off" aria-describedby="emailHelp" placeholder="Enter your mail" />
                       
                    </div>
                  <Link to="/Login" > <button  onClick={handleGetPassword} type="submit" class="btn btn-primary">Get Password</button></Link>
                    </form>
                   
        </div>
    )
}

export default Forget