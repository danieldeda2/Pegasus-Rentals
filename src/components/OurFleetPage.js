import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './OurFleetPage.css'
import FleetItems from './FleetItems'


const OurFleetPage = () => {
  return (

    <div className='OurFleetPage'>

        <Navbar/>

        <div className='ourFleet'>

          <h1>Our Fleet</h1>

          <div className="move">
            <FleetItems/>
          </div>

        </div>

        <Footer/>

    </div>
  )
}

export default OurFleetPage