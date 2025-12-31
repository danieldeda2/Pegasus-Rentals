import React, {useState} from 'react'
import Navbar from './Navbar'
import ContactUs from './ContactUs'
import Footer from './Footer'
import './ContactUsPage.css'
import ResEng from './ResEng'


const ContactUsPage = () => {

  const [showWidget, setShowWidget] = useState(true);
  
  return (
    <div className='ContactUsPage'>
        <Navbar/>
        <div className='contactus'>
          
        <ContactUs/>

          {showWidget && (
        <div className="modal-overlay" onClick={() => setShowWidget(false)}>
          <div
            className="modal-content"
            onClick={e => e.stopPropagation()} // prevent overlay click from closing when interacting inside
          >
            <a
              className="modal-close"
              onClick={() => setShowWidget(false)}
            >
              ✕
            </a>
            <ResEng />
          </div>
        </div>
      )}
      
        </div>
        <Footer className="footer"/>
    </div>
    
  )
}

export default ContactUsPage