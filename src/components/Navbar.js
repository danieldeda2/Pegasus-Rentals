import React from 'react'
import "./Navbar.css"
import logo from "./pegasus_logo.png"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  const redirectContactUs = () => {
    
    if(localStorage.getItem("car") != null)
      localStorage.removeItem("car");

    navigate('/ContactUs'); 
  };

  const redirectOurFleet = () => {
    navigate('/OurFleet'); 
  };

  
  const redirectAboutUs = () => {
    navigate('/AboutUs'); 
  };


  const redirectHome = () => {
    navigate('/'); 
  };

  return (
    <div className='navbar'>

        <img className='peg_logo' src={logo} alt="" onClick={redirectHome}></img>
        <button className="our_fleet" onClick={redirectOurFleet}>Our Fleet</button>
        <button className="about_us" onClick={redirectAboutUs}>About Us</button>
        <button className="book_now" onClick={redirectContactUs}>Book Now</button>

    </div>
  )
}

export default Navbar