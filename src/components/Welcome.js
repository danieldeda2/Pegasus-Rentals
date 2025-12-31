import React, {useState} from 'react'
import Maybach from "./maybach.jpg"
import box from "./black_box.png"
import { useNavigate } from 'react-router-dom'
import { motion } from "motion/react"
import maybach_mobile from './maybach_mobile.JPG'
import './Welcome.css'

const Welcome = () => {

   const navigate = useNavigate();
  
    const redirectContactUs = () => {      
      
      if(localStorage.getItem("car") != null)
        localStorage.removeItem("car");
  
      navigate('/ContactUs'); 
      
    };

  return (
    <div className='Welcome'>

        <motion.img className="maybach" src={Maybach}></motion.img>
      
        <motion.img className="maybach_mobile" src={maybach_mobile}></motion.img> 
      

        <motion.div initial={{ transform: "translateX(-100px)" }}
        animate={{ transform: "translateX(25px)" }}
        transition={{ type: "spring", stiffness:300 }} 
        className="text">
          
        <p>Convenience Meets Affordability.</p>

            <button onClick={redirectContactUs}>Book Now</button>

        </motion.div>

        <motion.img initial={{ transform: "translateX(-100px)" }}
  animate={{ transform: "translateX(25px)" }}
  transition={{ type: "spring", stiffness:400}} className="box" src={box} alt=""></motion.img>


    </div>
  )
}

export default Welcome