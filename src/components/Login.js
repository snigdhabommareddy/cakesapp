import React from "react"
import {validEmail,validatePassword} from "../Common"
import { Link ,withRouter} from "react-router-dom"
import axios from "axios"
import {connect} from "react-redux"
class Login extends React.Component{
    user={}
    constructor(){
        super()
        this.state={
            error1:undefined,
           error2:undefined
        }
    } 
   login=(event)=>{
        event.preventDefault()
        if(!this.user.email){
            this.setState({
               error1:"Email Required"
            })
           }
           else{
               if(validEmail(this.user.email)){
                   axios({
                       method:'post',
                       url:'https://apifromashu.herokuapp.com/api/login',
                       data: this.user
                   }).then((response) => {
                       console.log("response from login page",response)
                           if(response.data.token){
                           localStorage.token=response.data.token
                          // this.props.updatelogin()
                      this.props.dispatch({
                        type:"LOGIN"
                      })
                           this.props.history.push("/")
                       }
                       else{
                           alert("Invalid credentials")
                       }
                   }, (error)=> {
                       console.log("error from api",error)
                   })
                   this.setState({
                       error1:undefined
                   })
                  }
                  else{
                   this.setState({
                       error1:"Email is Invalid"
                   }) 
                  }
           }
           if(!this.user.password){
               this.setState({
                   error2:"password Required"
                })
           }
           else{
               if(validatePassword(this.user.password)){
                   this.setState({
                       error2:undefined
                   })
                  }
                 
                  
           }
            if(validEmail(this.user.email)){
                if(this.user.email=="snigdhabommareddy@gmail.com" && this.user.password=="testing"){
                    localStorage.token="some value"
                  //  this.props.updatelogin()
                }
                this.setState({
                    error:undefined
                })
            }
       }
    handleEmail=(event)=>{
            this.user.email=event.target.value
        }
    handlePassword=(event)=>{
            this.user.password=event.target.value
        }
    render(){
        return (
            <div style={{backgroundColor:"gainsboro"}} className="container w-50 m-auto">
            <h1>Login Here </h1>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onChange={this.handleEmail} type="email" class="form-control" aria-describedby="emailHelp" />
                    <div style={{color:"red"}}>{this.state.error1}</div>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input onChange={this.handlePassword} type="password" class="form-control"/>
                    <div style={{color:"red"}}>{this.state.error2}</div>
                </div>
                <div className="form-group">
                    <Link to="/signup">New User? Click Here</Link>
                    <Link style={{"float":"right"}} to="/forget">Forgot Your Password?</Link>
                </div>
                <button onClick={this.login} type="submit" class="btn btn-primary">Login</button>
                </form>
        </div>
        )
    }
}
Login =withRouter(Login)
export default connect ()(Login)