import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import About from "./About/About";
import Cars from "./Cars/Cars";

export const ClickedContext = React.createContext(false);
function App() {
  return( 
    <div>
        <nav className="nav">
      <NavLink className="link-on-page" to="/">Home</NavLink>
      <NavLink className="link-on-page" to="/about">About</NavLink>
      <NavLink className="link-on-page" to="/cars">Cars</NavLink>
    </nav>

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/cars" element={<Cars />} /> 
      </Routes>
    </div>
   
  )
}

export default App;
