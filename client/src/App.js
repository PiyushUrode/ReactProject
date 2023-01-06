import React from 'react'
import "./App.css";
//import 'bootstrap/dist/css/booststrap.css';
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Register from "./Component/Register";
import Contact from "./Component/Contact";
import About from "./Component/About";
import Login from "./Component/Login";
import Courses from "./Component/Courses";

// import errorpage from "./Component/errorpage";




import {  Routes  , Route  ,Switch} from "react-router-dom";

const App = () => {
  return (
    <>
        <Navbar/>
            <Routes> 
      <Route exact path="/" element={<Home/>}>  </Route>     
      <Route path="/Register" element={<Register/>}>  </Route>     
      <Route path="/Contact" element={<Contact/>}>  </Route>     
      <Route path="/Login" element={<Login/>}>  </Route>     
      <Route path="/About" element={<About/>}>  </Route> 
      <Route path="/Courses" element={<Courses/>}>  </Route> 
 

      {/* <Route path="/" element={<Navbar/>}>  </Route>      */}
           

      {/* <Route path="/Register" component={Register}>  </Route>     
      <Route path="/Navbar" component={<Navbar/>}>  </Route>     
      <Route path="/Contact" component={Contact}>  </Route>     
      <Route path="/About" component={About}>  </Route>     
      <Route path="/Login" component={Login}>  </Route>      */}
      </Routes>
      


    
    </>
  )
}

export default App