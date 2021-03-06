import React, { useState, useRef } from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import Navbar from "./Components/Header/Navbar";
import MobileMenu from "./Components/Header/MobileMenu/MobileMenu";
import About from "./Components/About/About";
import MyProjects from "./Components/MyProjects/MyProjects";
import Contact from "./Components/Contact/Contact";


function App(props) {
 
  const [menuMobile, setmenuMobile] = useState(false);
      
  const handleClick = () => {
        setmenuMobile(!menuMobile);
    }
  
  const handleClosingSideDrawer = () => {
      setmenuMobile(false);
  }


  return (
    <div className="App">
      <Navbar mobileMenu={handleClick}/>
      <MobileMenu show={menuMobile} removed={handleClosingSideDrawer} />
      <Home />
      <About />
      <MyProjects />
      <Contact />
    </div>
  );
}

export default App;
