// VERSION 2.0 - MOBILE FIXED - 20260106_0603
import React from 'react'
import './OurFleet.css'
import land_rover from './car_logos/land_rover.png'
import ford from './car_logos/ford.png'
import cadillac from './car_logos/cadillac.png'
import hyundai from './car_logos/hyundai.png'
import honda from './car_logos/honda.png'
import fiat from './car_logos/fiat.png'
import chevrolet from './car_logos/chevy.png'
import bmw from './car_logos/bmw.png'
import { motion } from "motion/react"

const OurFleet = () => {
  const brands = [
    { logo: bmw, name: "BMW" },
    { logo: land_rover, name: "Land Rover" },
    { logo: cadillac, name: "Cadillac" },
    { logo: ford, name: "Ford" },
    { logo: honda, name: "Honda" },
    { logo: chevrolet, name: "Chevrolet" },
    { logo: hyundai, name: "Hyundai" },
    { logo: fiat, name: "Fiat" }
  ];

  return (
    <section className='OurFleet'>
      <div className="fleet-container">
        {/* Section Header */}
        <motion.div 
          className="fleet-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="fleet-badge">EXPLORE</span>
          <h1 className="fleet-title">Our Premium Fleet</h1>
          <p className="fleet-subtitle">
            Handpicked vehicles from the world's most prestigious brands
          </p>
        </motion.div>

        {/* Brand Logos */}
        <motion.div 
          className='brand-grid'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className='brand-card'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="brand-image-wrapper">
                <img src={brand.logo} alt={brand.name} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default OurFleet
