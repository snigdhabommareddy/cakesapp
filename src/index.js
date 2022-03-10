import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App.js'
import Newapp from './Newapp.js'

import reportWebVitals from './reportWebVitals';
import store from "./reduxstore/store"
import {Provider} from "react-redux"
import axios from "axios"
// axios.interceptors.request.use((request)=>{
//   if(request.url.includes("addcaketocart")|| request.url.includes("cakecart")){
//     request.headers["authtoken"] = localStorage.token
//   }

//   return request
// })


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    {/*<App/>*/}
   <Newapp/>
    
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
