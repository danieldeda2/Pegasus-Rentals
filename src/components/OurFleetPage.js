import React from 'react'
import Navbar from './Navbar'
import OurFleet from './OurFleet'
import FleetItems from './FleetItems'
import Footer from './Footer'
import './OurFleetPage.css'

const OurFleetPage = () => {
  return (
    <div className='OurFleetPage'>
      <Navbar/>
      <OurFleet/>
      <FleetItems/>
      <Footer/>
    </div>
  )
}

export default OurFleetPage
