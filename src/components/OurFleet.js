import React from 'react'
import './OurFleet.css'
import land_rover from './car_logos/land_rover.png'
import ford from './car_logos/ford.png'
import cadillac from './car_logos/cadillac.png'
import hyundai from './car_logos/hyundai.png'
import honda from './car_logos/honda.png'
import fiat from './car_logos/fiat.png'
import chevrolet from './car_logos/chevy.png'
import FleetItems from './FleetItems'

import { motion } from "motion/react"


const OurFleet = () => {
  return (
    <div className='OurFleet'>

        <h1>Our Fleet</h1>

        <div className='brands'>

            <motion.img whileHover={{ scale: 1.4 }}   whileTap={{ scale: 0.8 }}  src={land_rover}/>
            <motion.img whileHover={{ scale: 1.4 }}   whileTap={{ scale: 0.8 }}  src={ford}/>
            <motion.img whileHover={{ scale: 1.4 }}   whileTap={{ scale: 0.8 }}  src={cadillac}/>
            <motion.img whileHover={{ scale: 1.4 }}   whileTap={{ scale: 0.8 }}  src={honda}/>
            <motion.img whileHover={{ scale: 1.4 }}   whileTap={{ scale: 0.8 }}  src={hyundai}/>
            <motion.img whileHover={{ scale: 1.4 }}   whileTap={{ scale: 0.8 }}  src={fiat}/>
            <motion.img whileHover={{ scale: 1.4 }}   whileTap={{ scale: 0.8 }}  src={chevrolet}/>
            
        </div>

        <FleetItems className="items"/>

    </div>
  )
}

export default OurFleet