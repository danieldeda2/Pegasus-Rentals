// VERSION 2.0 - MOBILE FIXED - 20260106_0603
import React from 'react'
import phone from './phone.png'
import address from './address.png'
import hours from './open.jpg'
import { motion } from "motion/react"
import './QuickStats.css'

const QuickStats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className='quickstats'>
      {/* Info Cards */}
      <motion.div 
        className='stats-grid'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className='stat-card' variants={itemVariants}>
          <div className="stat-icon">
            <img src={phone} alt="Phone" />
          </div>
          <div className="stat-content">
            <h3 className="stat-label">Call Us</h3>
            <a href="tel:+19293428572" className="stat-value stat-link">+1 (929) 342-8572</a>
          </div>
        </motion.div>

        <motion.div className='stat-card' variants={itemVariants}>
          <div className="stat-icon">
            <img src={address} alt="Location" />
          </div>
          <div className="stat-content">
            <h3 className="stat-label">Location</h3>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=162-42+Pidgeon+Meadow+Rd+Flushing+NY+11358" 
              target="_blank" 
              rel="noopener noreferrer"
              className="stat-value stat-link"
            >
              162-42 Pidgeon Meadow Rd<br/>Flushing, NY 11358
            </a>
          </div>
        </motion.div>

        <motion.div className='stat-card' variants={itemVariants}>
          <div className="stat-icon">
            <img src={hours} alt="Hours" />
          </div>
          <div className="stat-content">
            <h3 className="stat-label">Hours</h3>
            <p className="stat-value">7 A.M. - 6 P.M. (EST)</p>
          </div>
        </motion.div>
      </motion.div>

      {/* About Section */}
      <motion.div 
        className="about-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="section-header">
          <span className="section-badge">ABOUT PEGASUS</span>
          <h2 className="section-title">Luxury Meets Convenience</h2>
        </div>
        
        <p className="about-text">
          Experience the ultimate in style and sophistication with Pegasus Rentals, your premier luxury car rental service in New York City. We offer an exceptional selection of high-end vehicles, from sleek sports cars to elegant sedans and spacious SUVs, tailored to meet your every need. Whether it's a special occasion, a business trip, or simply indulging in a lavish driving experience, Pegasus Rentals is committed to delivering unparalleled service and ensuring your journey is extraordinary.
        </p>

        <div className="about-features">
          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <span>Premium Fleet Selection</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <span>24/7 Customer Support</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <span>Flexible Rental Terms</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default QuickStats
