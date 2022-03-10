import axios from "axios"
export var myordersthunk= function(){
    return function(dispatch,getState){
        console.log("received to thunk middleware")
        axios({
            method:'post',
            url:"https://apifromashu.herokuapp.com/api/cakeorders",
            data:{},
            headers:{
                "authtoken":localStorage.token
            }
        }).then((response)=>{
        console.log(response.data.cakeorders)
        var cakeorders=response.data.cakeorders
        dispatch({
            type:"MYORDERS",
            payload :cakeorders
        })
        },(error)=>{
            console.log("error from api", error)
        })
    }
}
/*export var placeorderthunk= function(){
    return function(dispatch,getState){
      var store=getState()
      axios({
        method:"post",
        url:"https://apifromashu.herokuapp.com/api/addcakeorder",
        data:store.order,
        headers:{
            "authtoken":localStorage.token
        }
    }).then((response)=>{
        console.log(response)
        console.log(response.data.order.orderid)
        var orderid= response.data.order.orderid
        dispatch({
            type:"ORDERID",
            payload:orderid
        })
       },(error)=>{
        dispatch({
            type:"ORDERID_ERROR"
       })
       console.log("error from api", error)
    })
    }
}*/
/*export var allcakesthunk =function(){
    return function (dispatch,getstate){
        dispatch({
            type:"FETCH_CAKES"
        })
        axios({
            method:"get",
            url:"https://apifromashu.herokuapp.com/api/allcakes"
        }).then((response)=>{
            console.log("response from all cakes api",response.data)
            dispatch({
                type:"CAKES_FETCHED",
                payload:response.data.data
            })
        },(error)=>{
            dispatch({
                type:"CAKES_FETCHED_ERROR"
            })
            console.log("error from all cakes api",error)
      
        })
    }
}*/

export var placeorderthunk= function(){
    return function(dispatch,getState){
      var store=getState()
      axios({
        method:"post",
        url:"https://apifromashu.herokuapp.com/api/addcakeorder",
        data:store.order,
        headers:{
            "authtoken":localStorage.token
        }
    }).then((response)=>{
        console.log(response)
        console.log(response.data.order.orderid)
        var orderid= response.data.order.orderid
        dispatch({
            type:"ORDERID",
            payload:orderid
        })
       },(error)=>{
        dispatch({
            type:"ORDERID_ERROR"
       })
       console.log("error from api", error)
    })
    }
}