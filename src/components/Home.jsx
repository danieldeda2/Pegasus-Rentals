import React from 'react'
import Navbar from './Navbar';
import Welcome from './Welcome';
import QuickStats from './QuickStats';
import OurFleet from './OurFleet';
import FAQ from './FAQ';
import ContactUs from './ContactUs';
import Footer from './Footer';
import './Home.css'

const Home = () => {

  if(localStorage.getItem("car") != null){
    localStorage.removeItem("car");
  }

  return (
    <div className='home'>
        <Navbar></Navbar>
        <Welcome></Welcome>
        <QuickStats></QuickStats>
        <OurFleet></OurFleet>
        <FAQ></FAQ>
        <ContactUs></ContactUs>
        <Footer></Footer>
    </div>
  )
}

export default Home