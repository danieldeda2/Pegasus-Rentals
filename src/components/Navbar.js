import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import logo from "./pegasus_logo.png"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand" onClick={redirectHome}>
          <img className='navbar-logo' src={logo} alt="Pegasus" />
          <span className="brand-name">PEGASUS</span>
        </div>

        {/* Navigation */}
        <div className="navbar-links">
          <button className="nav-link" onClick={redirectOurFleet}>Fleet</button>
          <button className="nav-link" onClick={redirectAboutUs}>About</button>
          <button className="navbar-cta" onClick={redirectContactUs}>Reserve</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
