import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react';
// import ReactDOM from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const[mode , setMode] = useState('light'); // Whether Dark mode is enable or not  
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
     
    }else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      
    }
  }
  return (
    <>
       {/* <BrowserRouter> */}
       <Navbar title = "TextUtils" aboutText = "About TextUtils" mode ={mode} toggleMode={toggleMode}/>
   <div className="container my-3">
   <TextForm heading="Enter the text to analyze below" mode={mode}/>
   {/* <Routes> */}
         
          {/* <Route path="/About" element={<About />} /> */}
          {/* <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode}/> } /> */}
          {/* </Routes> */}
        </div>
        {/* </BrowserRouter> */}
  
   
  
    </>
  );
}

export default App;
