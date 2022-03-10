export function Reducer1(state={
    iphone:100,
    samsung:100,
    cart:{totalCart:[],totalPrice:0,totalItems:0},
    order:{price:0,name:undefined,area:undefined,city:undefined,address:undefined,pincode:undefined,phone:undefined,cakes:[]},
    isloggedin: localStorage.token?true:false,
    isLoading:true,
    addresstool:false,
    paymentTool:false,
    ordersumtool:false,
    error:"some error happened",
    myorders:[],
    addcake:[]
},action){
    switch(action.type){
        case "BUYIPHONE" :{
            state={...state}
            state["iphone"]=state["iphone"]-1
            return state
        }
        case "BUYSAMSUNG" :{
            state={...state}
            state["samsung"]=state["samsung"]-1
            return state
        }
        case "LOGIN" :{
            state={...state}
            state["isloggedin"]=true
            return state
        }
        case "FETCH_CAKES" :{
            state={...state}
            state["isloading"]=true
            return state
        }
        case "CAKES_FETCHED" :{
            state={...state}
            state["isloading"]=false
            state["cakes"]=action.payload
            return state
        }
        case "CAKES_FETCH_ERROR" :{
            state={...state}
            state["isloading"]=false
            state["cakes"]="Internal Server Error"
            return state
        }
        case "CHECKOUT":{
            state={...state}
            state["cart"]=action.payload
            return state
        }
        case "CARTSUMMARY":{
            state={...state}
            state["addresstool"]=true
            return state
        }
        case "ADDRESS":{
            state={...state}
            state["order"]=action.payload
            state["paymentTool"]=true
            return state
        }
        case "PAYMENT":{
            state={...state}
            state["ordersumtool"]=true
            return state
        }
        case "ORDERID":{
            state={...state}
            state["isLoading"]=false
            state["orderid"]=action.payload
            return state
        }
        case "ORDERID_ERROR":{
            state={...state}
            state["isLoading"]=false
            state["error"]="Internal server error"
            return state
        }
        case "MYORDERS":{
            state={...state}
            state["myorders"]=action.payload
            return state
        }
        case "ADDCAKE":{
            state={...state}
            state["addcake"]=action.payload
            return state
        }
        default: return state
    }
}