import React from 'react'
import './AboutUsPage.css'
import Navbar from './Navbar'
import medal from './medal.png'
import twocars from './twocars.png'
import money from './money.png'
import customerservice from './customerservice.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Footer from './Footer'
import { motion } from "motion/react"

const AboutUsPage = () => {
  const stats = [
    { number: "100%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Customer Support" },
    { number: "10+", label: "Years Experience" },
    { number: "1000+", label: "Happy Clients" }
  ];

  return (
    <div className='AboutUsPage'>
      <Navbar/>

      {/* HERO SECTION */}
      <div className="about-hero">
        <div className="hero-grid-background"></div>
        <div className="hero-glow"></div>
        
        <motion.div 
          className="about-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span 
            className="about-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            WHO WE ARE
          </motion.span>
          
          <h1 className="about-title">
            <span className="title-line">Redefining Luxury</span>
            <span className="title-line title-gradient">Car Rental</span>
          </h1>
          
          <p className="about-subtitle">
            Premium vehicles. Exceptional service. Unforgettable experiences in the heart of New York City.
          </p>
        </motion.div>

        {/* STATS BAR */}
        <motion.div 
          className="hero-stats-bar"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-box"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* STORY SECTION */}
      <section className="story-section">
        <div className="story-container">
          <motion.div
            className="story-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="story-label">OUR STORY</div>
            <h2 className="story-title">Excellence in Every Mile</h2>
            <div className="story-text">
              <p>
                At Pegasus Rentals, we specialize in providing a premium luxury car rental experience in the heart of New York City. Our fleet features the finest selection of high-performance vehicles, including exotic sports cars, elegant sedans, and spacious SUVs from world-renowned brands.
              </p>
              <p>
                Whether you're looking to make a statement at a special event, enhance a business trip, or enjoy a weekend getaway in style, we offer tailored solutions to meet your needs. Our commitment to excellence ensures that every journey with us is extraordinary.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <div className="why-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge">THE PEGASUS ADVANTAGE</div>
            <h2 className="section-title-large">Why Choose Us</h2>
            <p className="section-description">
              Four pillars of excellence that set us apart from the rest
            </p>
          </motion.div>

          <div className="features-grid-premium">
            <motion.div 
              className="feature-card-premium"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="feature-number">01</div>
              <div className="feature-icon-premium">
                <div className="icon-glow"></div>
                <img src={medal} alt="Satisfaction" />
              </div>
              <h3 className="feature-title">Customer Satisfaction</h3>
              <p className="feature-description">
                We have nothing less than 100% customer satisfaction for all of our rentals within the NYC area. Your happiness is our guarantee.
              </p>
              <div className="feature-accent-line"></div>
            </motion.div>

            <motion.div 
              className="feature-card-premium"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="feature-number">02</div>
              <div className="feature-icon-premium">
                <div className="icon-glow"></div>
                <img src={money} alt="Cost Effective" />
              </div>
              <h3 className="feature-title">Cost Effective</h3>
              <p className="feature-description">
                Known to have the most affordable rates & deals in the tri-state area, plus we offer price matching. Luxury doesn't have to break the bank.
              </p>
              <div className="feature-accent-line"></div>
            </motion.div>

            <motion.div 
              className="feature-card-premium"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="feature-number">03</div>
              <div className="feature-icon-premium">
                <div className="icon-glow"></div>
                <img src={customerservice} alt="Service" />
              </div>
              <h3 className="feature-title">Lightning-Fast Service</h3>
              <p className="feature-description">
                Unparalleled customer service and satisfaction within the NYC area. We're available 24/7 to ensure your experience is seamless.
              </p>
              <div className="feature-accent-line"></div>
            </motion.div>

            <motion.div 
              className="feature-card-premium"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="feature-number">04</div>
              <div className="feature-icon-premium">
                <div className="icon-glow"></div>
                <img src={twocars} alt="Inventory" />
              </div>
              <h3 className="feature-title">Extensive Fleet</h3>
              <p className="feature-description">
                Every type of car for every adventure! From 2-door convertibles to 9-seaters, we have the perfect vehicle for any occasion.
              </p>
              <div className="feature-accent-line"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="location-section-premium">
        <div className="location-container-premium">
          <motion.div
            className="location-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge">VISIT US</div>
            <h2 className="section-title-large">Find Us in NYC</h2>
            <p className="section-description">
              Conveniently located between both major NYC airports
            </p>
          </motion.div>

          <motion.div 
            className="map-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="map-wrapper-premium">
              <MapContainer center={[40.7524209, -73.8044335]} zoom={14}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={[40.7524209, -73.8044335]}>
                  <Popup>Pegasus Rentals - Premium Location</Popup>
                </Marker>
              </MapContainer>
            </div>
            
            <div className="location-info-card">
              <div className="location-details">
                <div className="location-label">ADDRESS:</div>
                <div className="location-address-premium">
                  162-42 Pidgeon Meadow Rd<br/>
                  Flushing, NY 11358
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default AboutUsPage
