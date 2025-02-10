// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import { useState } from "react";
import Alert from "./component/Alert";
// import About from "./component/About";

// import * as React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
 
// } from "react-router-dom";


function App() {
  let [mode,setmode]=useState("light");
  let[alert,setalert]=useState(null);
  let showalert=(type,message)=>{
    setalert({
      type:type,
      message:message
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  let changemode=()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor="#042743";
      document.body.style.color="white";
      showalert("success"," Dark Mode has been Enabled");
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showalert("success",  "Light Mode has been Enabled");

    }
  }


  return (
    <>
    {/* <Router> */}
      <Navbar tittle ="Text_Editor" mode={mode} changemode={changemode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes> */}
        {/* <Route exact path="/about" element={<About/>}/> */}
        {/* <Route exact path="/" element={<TextForm showalert={showalert} heading="Enter your text here" mode={mode}/>}/> */}
     { /* </Routes>*/}
      <TextForm showalert={showalert} label="Enter your text here" mode={mode}/> 
      </div>
{/* </Router> */}
  </>
  );
}

export default App;
