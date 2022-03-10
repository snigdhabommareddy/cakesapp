
import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import {validEmail, validatePassword,name} from '../Common';
class Signup extends React.Component{
    user={ }
    constructor(){
        super()
        this.state={
           error1:undefined,
           error2:undefined,
           error3:undefined
        }
    }
    handleEmail= (event)=>{
       this.user.email = event.target.value
    }
    handleName= (event)=>{
       this.user.name = event.target.value
    }
    handlePwd= (event)=>{
        this.user.password = event.target.value
    }
    submit=(event)=>{
        event.preventDefault()
        if(!this.user.name){
            this.setState({
            error1:"Name is Required"
            })
        }
        else{
                this.setState({
                error1:undefined
                })
        }
        if(!this.user.email){
            this.setState({
            error2:"Email is Required"
            })
        }
        else{
            if(validEmail(this.user.email)){
                this.setState({
                error2:undefined
                })
            }
            else{
                this.setState({
                error2:"Email is Invalid"
                }) 
            }
        }
        if(!this.user.password){
            this.setState({
            error3:"Password is Required"
            })
        }
        else{
            if(validatePassword(this.user.password)){
                this.setState({
                error3:undefined
                })
            }
            else{
                this.setState({
                error3:"Password is Invalid"
                }) 
            }
        }
           console.log(",,,,user",this.user)
           axios({
            method:'post',
            url:'https://apifromashu.herokuapp.com/api/register',
            data: this.user
        }).then((response) => {
            console.log(response)
            if(response.data.message =='User Already Exists') {
                this.props.history.push('/login');
            }
        }, (error)=> {
            console.log(error)
        })
    }
    render() {
        return (
            <div style={{backgroundColor:"gainsboro"}} className="container w-50 m-auto">
                <h1>Signup</h1>
                <form>
                    <div className="form-group">
                    <label for="Name">Name</label>
                    <input onChange={this.handleName} type="text" class="form-control"  />
                    <div style={{color:"red"}}>{this.state.error1}</div>
                    </div>
                    <div className="form-group">
                        <label for="Email">Email address</label>
                        <input onChange={this.handleEmail} type="email" class="form-control" autoComplete="off" aria-describedby="emailHelp" />
                        <div style={{color:"red"}}>{this.state.error2}</div>
                    </div>
                    <div className="form-group">
                        <label for="Password">Password</label>
                        <input onChange={this.handlePwd} type="password" class="form-control" autoComplete="off"/>
                        <div style={{color:"red"}}>{this.state.error3}</div>
                    </div>
                   <button onClick={this.submit} type="submit" class="btn btn-primary">Submit</button>
                   </form>
            </div>
        )
    }
}
export default Signup