import React, { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Cars from "./Components/Cars/Cars";
import EachCarPage from "./Components/EachCarPage/EachCarPage";
import LogIn from "./Components/LogIn/LogIn";

const setActiveLink = ({isActive}) => isActive ? 'link-on-page active-link' : 'link-on-page';

export const ClickedContext = React.createContext(false);

function App() {

  let [loggedIn, setLoggedIn] = useState(false);
  console.log('Logged In: ', loggedIn);

  const logInHandle = () => {
     setLoggedIn(loggedIn = true);
     window.location.pathname = '/cars';
  }

  const logOutHandle = () => {
    setLoggedIn(loggedIn = false);
    window.location.pathname = '/login';
  }
  
  return( 
    <div>
      <nav className="nav">
        <NavLink className={setActiveLink} to="/">Home</NavLink>
        <NavLink className={setActiveLink} to="/about">About</NavLink>
        <NavLink className={setActiveLink} to={{ pathname: "/cars" }}>Cars</NavLink>
        <button className="btn-log" onClick={logInHandle}>Log In</button>
        <button className="btn-log" onClick={logOutHandle}>Log Out</button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} /> 
        <Route path="/login" element={<LogIn />} />
        <Route path="cars/:id" exact element={<EachCarPage />} /> 
        <Route path="*" element={<h1 style={{color: 'red', textAlign: 'center'}}>404 Page is not found</h1>} />
      </Routes>
    
    </div>
   
  )
}

export default App;
