// VERSION 2.0 - MOBILE FIXED - 20260106_0603
import React, { useState, useEffect } from 'react'
import Maybach from "./maybach.jpg"
import { useNavigate } from 'react-router-dom'
import { motion } from "motion/react"
import maybach_mobile from './maybach_mobile.JPG'
import './Welcome.css'

const Welcome = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const redirectContactUs = () => {      
    if(localStorage.getItem("car") != null)
      localStorage.removeItem("car");
    navigate('/ContactUs'); 
  };

  return (
    <div className='Welcome'>
      {/* Elegant gradient overlay */}
      <div className="hero-overlay"></div>
      
      {/* Desktop hero image */}
      <motion.div 
        className="hero-image-wrapper"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      >
        <img className="hero-image" src={Maybach} alt="Luxury Vehicle" />
      </motion.div>
      
      {/* Mobile hero image */}
      <img className="hero-image-mobile" src={maybach_mobile} alt="Luxury Vehicle" /> 

      {/* Hero content */}
      <div className="hero-content">
        <motion.div
          className="hero-text-wrapper"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-label">Premium Luxury Rentals</div>
          
          <h1 className="hero-title">
            <span className="title-line">Elevate Your</span>
            <span className="title-line title-accent">Journey</span>
          </h1>
          
          <p className="hero-description">
            Experience New York's finest selection of luxury vehicles, curated for those who appreciate excellence.
          </p>

          <div className="hero-actions">
            <button onClick={redirectContactUs} className="hero-button primary">
              <span>Reserve Vehicle</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="stat-item">
            <div className="stat-number">NYC</div>
            <div className="stat-label">Based in Queens</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Customer Support</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Welcome
