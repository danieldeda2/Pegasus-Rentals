import React from 'react'
import Navbar from './Navbar'
import ContactUs from './ContactUs'
import Footer from './Footer'
import './ContactUsPage.css'

const ContactUsPage = () => {
  return (
    <div className='ContactUsPage'>
      <Navbar/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default ContactUsPage
