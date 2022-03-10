function logger(store){
    return function(next){
       return function(action){
           console.log("I am the midleware . please let me know" , action)
            return next(action)
       }
    }
}

let loggermiddleware = store=>next=>action=>{
    console.log("I am the midleware . please let me know" , action)
    return next(action)
}


export default logger