import logo from './logo.svg';
import './App.css';


import Navbar from './components/Navbar.js';
import Cake from './components/Cake.js';
import Carousel from './components/Carousel.js';
import Userlist from './components/Userlist.js';
import Cakelist from './components/Cakelist.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';




function App() {
  
  


  return (
    <div className="App">
      
     <Navbar owner="snigdha"/>
     <Carousel/>
     <Cakelist/>
    {/* <div class="row">
     <Cake one={data}/>
     <Cake one={data1}/>
     <Cake one={data2}/>
     <Cake one={data3}/>
      </div>*/}
  <Userlist/>
   
   <Login/>
      <Signup/>
      
   
   
   
  
     
     </div>
    
    
      
  );
}

export default App;