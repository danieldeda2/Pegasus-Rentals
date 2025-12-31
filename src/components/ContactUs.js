import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css'
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom'


const ContactUs = () => {

  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ehblpqv', 'template_ug6sgdr', form.current, {
        publicKey: 'FTP_7O1m9Ki-JCgLb',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
    );

    alert("Message successfully sent!")
    navigate("/");



  };


  var defaultValue = "Hi, I am interested in the "

  if(localStorage.getItem("car") != null){
    defaultValue += localStorage.getItem("car")
    defaultValue += ". I'd like to book it from [begin] to [end]."
  }
  else
    defaultValue = ""


  return (
    <div className='contactUs'>

        <h1>
        Contact Us</h1>

        <h3>
        Please contact us below for inquiries about renting a vehicle or for any questions/concerns.
        </h3>

        <form ref={form} onSubmit={sendEmail}>
            
            <input 
            type="text" name="from_name" placeholder=' Name...' required/>

            <input
            type="email" name="user_name" placeholder=' Email Address...' required/>

            <input
            type="tel" name="user_phone" placeholder=' Phone Number...' required/>

            <textarea
            name="message" defaultValue={defaultValue} placeholder='Message..' required/>

            <input
             type="submit" value="Send" className='button2'/>

        </form>

    </div>
  )
}

export default ContactUs