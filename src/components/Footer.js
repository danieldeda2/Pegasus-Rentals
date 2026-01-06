import React from 'react'
import pegasus from './pegasus_logo.png'
import insta from './instagram.png'
import turo from './turo.png'
import tiktok from './tiktok.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <div className='footer-content'>
          {/* Brand Column */}
          <div className='footer-column brand-column'>
            <div className='footer-logo'>
              <img src={pegasus} className='logo-icon' alt="Pegasus Logo" />
              <span className='logo-text'>PEGASUS</span>
            </div>
            <p className='footer-tagline'>
              Where convenience meets affordability.
            </p>
          </div>

          {/* Newsletter Column */}
          <div className='footer-column newsletter-column'>
            <h4 className='column-title'>Stay Updated</h4>
            <p className='column-subtitle'>Subscribe for exclusive deals and updates</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                name="user_email" 
                placeholder='Your email address' 
                required
              />
              <button className='subscribe-btn'>
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Column */}
          <div className='footer-column'>
            <h4 className='column-title'>Follow Us</h4>
            <div className='social-links'>
              <a href="https://www.instagram.com/drivepegasus/" className='social-link' aria-label="Instagram">
                <img src={insta} alt="Instagram" />
              </a>
              <a href="https://turo.com/us/en/drivers/45444608" className='social-link' aria-label="Turo">
                <img src={turo} alt="Turo" />
              </a>
              <a href="#" className='social-link' aria-label="TikTok">
                <img src={tiktok} alt="TikTok" />
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div className='footer-column'>
            <h4 className='column-title'>Contact</h4>
            <a href="tel:+19293428572" className='contact-link'>
              +1 (929) 342-8572
            </a>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className='footer-bottom'>
          <p className='copyright'>
            © 2025 Pegasus Rentals. All Rights Reserved.
          </p>
          <div className='footer-links'>
            <a href="#" className='footer-link'>Terms & Conditions</a>
            <span className='separator'>•</span>
            <a href="#" className='footer-link'>Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
