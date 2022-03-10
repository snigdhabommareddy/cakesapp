import {createStore,applyMiddleware} from "redux"
import {Reducer1} from "./reducers"
import reduxthunk from "redux-thunk"
import loggermiddleware from "./middlewares"
var store = createStore(Reducer1,applyMiddleware(loggermiddleware,reduxthunk))

export default store