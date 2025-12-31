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
  return (
    <div className='AboutUsPage'>

        <Navbar/>

        <h1
        className='aboutUs'>About Us</h1>

        <p
        className="paragraph">At Pegasus Rentals, we specialize in providing a premium luxury car rental experience in the heart of New York City. Our fleet features the finest selection of high-performance vehicles, including exotic sports cars, elegant sedans, and spacious SUVs from world-renowned brands. Whether you’re looking to make a statement at a special event, enhance a business trip, or enjoy a weekend getaway in style, we offer tailored solutions to meet your needs. With a commitment to exceptional service, seamless booking, and flexible rental options, we ensure every drive is an unforgettable journey. At Pegasus Rentals, luxury isn’t just a service—it’s our standard.</p>

        <h2
         className='whyPegasus'>Why Pegasus?</h2>

        <div className='attributes2'>

            <div className="row2">

                <img src={medal}></img>

                <div className="column2">

                    <h3>Customer Satisfaction</h3>

                    <h4>We have nothing less than 100% customer satisfaction for all of our rentals within the NYC area.</h4>

                </div>

            </div>

            <div 
            className="row2">

                <img src={money}></img>

                <div className="column2">

                    <h3>Cost Effective</h3>

                    <h4>Pegasus Rentals is known to have the most affordable rates & deals in the tri-state area, plus we offer price matching.</h4>

                </div>

            </div>

            <div className="row2">

                <img src={customerservice}></img>

                <div className="column2">

                    <h3>Lightning-Fast Customer Service</h3>

                    <h4>Unparalleled customer service and satisfaction within the NYC area.</h4>

                </div>

            </div>

            <div
            className="row2">

                <img src={twocars}></img>

                <div className="column2">

                    <h3>Big Inventory</h3>

                    <h4>We have every type of car for every adventure you can dream of! From 2-door convertibles to 9-seaters, we got it all!</h4>
                </div>

            </div>

           

        </div>

        
        <h1
        className='location'
        >Location</h1>

        <MapContainer center={[40.7524209, -73.8044335]} zoom={14}>
            <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[40.7524209, -73.8044335]}>
                <Popup>This is where we are located!</Popup>
            </Marker>

        </MapContainer>

        <p className='location2'>We are conveniently located at <b>162-42 Pidgeon Meadow Rd, Flushing, NY 11358</b>, between both major airports in NYC.</p>

        <Footer className="footer"/>
    </div>
  )

}

export default AboutUsPage