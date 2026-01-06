import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css'
import { motion, AnimatePresence } from "motion/react"
import { useNavigate } from 'react-router-dom'

const ContactUs = () => {
  const form = useRef();
  const navigate = useNavigate();

  // Vehicle options
  const vehicles = [
    { id: 1, make: "BMW", model: "M8 Convertible", year: "2020" },
    { id: 2, make: "Land Rover", model: "Range Rover Sport", year: "2019" },
    { id: 3, make: "Cadillac", model: "Escalade", year: "2018" },
    { id: 4, make: "Honda", model: "Pilot", year: "2017" },
    { id: 5, make: "Chevrolet", model: "Impala", year: "2018" },
    { id: 6, make: "Ford", model: "Explorer", year: "2020" },
    { id: 7, make: "Ford", model: "Escape", year: "2014" },
    { id: 8, make: "Hyundai", model: "Santa Fe", year: "2022" },
    { id: 9, make: "Fiat", model: "500", year: "2016" },
    { id: 10, make: "Hyundai", model: "Elantra", year: "2017" }
  ];

  // Get pre-selected car from localStorage
  const preSelectedCar = localStorage.getItem("car");
  const [selectedVehicle, setSelectedVehicle] = useState(preSelectedCar || "");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationData, setNotificationData] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    // Get form values
    const formData = new FormData(form.current);
    const vehicle = formData.get('vehicle');
    const pickupDate = formData.get('pickup_date');
    const pickupTime = formData.get('pickup_time');
    const returnDate = formData.get('return_date');
    const returnTime = formData.get('return_time');

    // Create message for EmailJS
    const bookingMessage = `Vehicle: ${vehicle}
    
Pickup: ${pickupDate} at ${pickupTime}
Return: ${returnDate} at ${returnTime}

Additional Notes: ${formData.get('additional_notes') || 'None'}`;

    // Update the message field for EmailJS
    const messageField = form.current.querySelector('[name="message"]');
    messageField.value = bookingMessage;

    emailjs
      .sendForm('service_ehblpqv', 'template_ug6sgdr', form.current, {
        publicKey: 'FTP_7O1m9Ki-JCgLb',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Show success notification
          setNotificationData({
            type: 'success',
            vehicle: vehicle,
            pickup: `${pickupDate} at ${pickupTime}`,
            return: `${returnDate} at ${returnTime}`
          });
          setShowNotification(true);
          
          // Navigate after animation
          setTimeout(() => {
            navigate("/");
          }, 3500);
        },
        (error) => {
          console.log('FAILED...', error.text);
          // Show error notification
          setNotificationData({
            type: 'error',
            message: 'Failed to send booking request. Please try again.'
          });
          setShowNotification(true);
          
          setTimeout(() => {
            setShowNotification(false);
          }, 4000);
        },
    );
  };

  return (
    <section className='contactUs'>
      <div className="contact-container">
        {/* Section Header */}
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-badge">BOOK YOUR RIDE</span>
          <h1 className="contact-title">Reserve a Vehicle</h1>
          <p className="contact-subtitle">
            Select your dream car and choose your rental dates. We'll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Booking Form */}
        <motion.form 
          ref={form} 
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Personal Information */}
          <div className="form-section">
            <div className="section-label">Personal Information</div>
            
            <div className="form-group">
              <label htmlFor="from_name">Full Name</label>
              <input 
                type="text" 
                id="from_name"
                name="from_name" 
                placeholder='John Smith' 
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="user_name">Email Address</label>
                <input
                  type="email" 
                  id="user_name"
                  name="user_name" 
                  placeholder='john@example.com' 
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="user_phone">Phone Number</label>
                <input
                  type="tel" 
                  id="user_phone"
                  name="user_phone" 
                  placeholder='+1 (555) 123-4567' 
                  required
                />
              </div>
            </div>
          </div>

          {/* Vehicle Selection */}
          <div className="form-section">
            <div className="section-label">Select Vehicle</div>
            
            <div className="form-group">
              <label htmlFor="vehicle">Choose Your Car</label>
              <select 
                id="vehicle"
                name="vehicle" 
                value={selectedVehicle}
                onChange={(e) => setSelectedVehicle(e.target.value)}
                required
                className="vehicle-select"
              >
                <option value="">Select a vehicle...</option>
                {vehicles.map((vehicle) => (
                  <option 
                    key={vehicle.id} 
                    value={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  >
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Rental Period */}
          <div className="form-section">
            <div className="section-label">Rental Period</div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="pickup_date">Pickup Date</label>
                <input
                  type="date" 
                  id="pickup_date"
                  name="pickup_date" 
                  required
                  className="date-input"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="pickup_time">Pickup Time</label>
                <input
                  type="time" 
                  id="pickup_time"
                  name="pickup_time" 
                  required
                  className="time-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="return_date">Return Date</label>
                <input
                  type="date" 
                  id="return_date"
                  name="return_date" 
                  required
                  className="date-input"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="return_time">Return Time</label>
                <input
                  type="time" 
                  id="return_time"
                  name="return_time" 
                  required
                  className="time-input"
                />
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="form-section">
            <div className="section-label">Additional Information (Optional)</div>
            
            <div className="form-group">
              <label htmlFor="additional_notes">Special Requests or Questions</label>
              <textarea
                id="additional_notes"
                name="additional_notes" 
                placeholder='Any special requests, questions, or additional information...' 
                rows="4"
                className="notes-textarea"
              />
            </div>
          </div>

          {/* Hidden field for EmailJS */}
          <input type="hidden" name="message" />

          <motion.button
            type="submit" 
            className='submit-btn'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Submit Booking Request
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </motion.form>

        {/* Premium Success/Error Notification */}
        <AnimatePresence>
          {showNotification && (
            <motion.div
              className="notification-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={`notification-modal ${notificationData.type}`}
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 50, opacity: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
              >
                {notificationData.type === 'success' ? (
                  <>
                    {/* Success Icon */}
                    <motion.div 
                      className="notification-icon success-icon"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <circle cx="30" cy="30" r="28" stroke="#D4AF37" strokeWidth="3"/>
                        <motion.path 
                          d="M17 30L26 39L43 22" 
                          stroke="#D4AF37" 
                          strokeWidth="4" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                        />
                      </svg>
                    </motion.div>

                    <motion.h2 
                      className="notification-title"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      Booking Request Sent!
                    </motion.h2>

                    <motion.p 
                      className="notification-subtitle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      We'll contact you within 24 hours
                    </motion.p>

                    <motion.div 
                      className="booking-summary"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="summary-item">
                        <span className="summary-label">Vehicle</span>
                        <span className="summary-value">{notificationData.vehicle}</span>
                      </div>
                      <div className="summary-divider"></div>
                      <div className="summary-item">
                        <span className="summary-label">Pickup</span>
                        <span className="summary-value">{notificationData.pickup}</span>
                      </div>
                      <div className="summary-divider"></div>
                      <div className="summary-item">
                        <span className="summary-label">Return</span>
                        <span className="summary-value">{notificationData.return}</span>
                      </div>
                    </motion.div>

                    <motion.div
                      className="notification-progress"
                      initial={{ scaleX: 1 }}
                      animate={{ scaleX: 0 }}
                      transition={{ duration: 3.5, ease: "linear" }}
                    />
                  </>
                ) : (
                  <>
                    {/* Error Icon */}
                    <motion.div 
                      className="notification-icon error-icon"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <circle cx="30" cy="30" r="28" stroke="#ff4444" strokeWidth="3"/>
                        <path d="M22 22L38 38M38 22L22 38" stroke="#ff4444" strokeWidth="4" strokeLinecap="round"/>
                      </svg>
                    </motion.div>

                    <motion.h2 
                      className="notification-title"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Booking Failed
                    </motion.h2>

                    <motion.p 
                      className="notification-subtitle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {notificationData.message}
                    </motion.p>

                    <motion.button
                      className="notification-close-btn"
                      onClick={() => setShowNotification(false)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Try Again
                    </motion.button>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ContactUs
