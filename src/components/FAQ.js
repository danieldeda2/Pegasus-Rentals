import React from 'react'
import { useState } from 'react'
import './FAQ.css'
import { motion } from "motion/react"


const FAQ = () => {

  const [selected, setSelected] = useState(null)

  const toggle = i => {
    if(selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className='FAQ'>

      <h1>FAQ</h1>

      <div className='accordion'>

        {data.map((item, i) => (

          <div className='item'>

            <div className='title' onClick={() => toggle(i)}>

              <h2>{item.question}</h2>

            </div>

            <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>

          </div>

        ))}

      </div>

    </div>
  )
}


const data = [
  {
    question: 'What is Pegasus Rentals?',
    answer: 'Pegasus Rentals is a premium car rental service dedicated to providing a seamless and hassle-free rental experience. We offer a diverse selection of well-maintained, reliable vehicles to suit any need—whether you’re looking for a fuel-efficient compact, a comfortable sedan, or something with a little more power. With competitive pricing, flexible booking options, and excellent customer service, Pegasus Rentals makes it easy to get on the road with confidence.',
  },
  {
    question: 'Where is Pegasus Rentals based?',
    answer: 'Pegasus Rentals is based in Queens, New York City. We proudly serve customers throughout NYC and the surrounding areas, offering convenient pickup and drop-off options. Whether you’re a local needing a temporary vehicle or a visitor exploring the city, we make renting a car easy and hassle-free!',
  },
  {
    question: 'What cars does Pegasus Rentals have?',
    answer: 'Pegasus Rentals offers a wide range of vehicles to suit any need. Our fleet includes: \n\n• Compact & Economy Cars - Easy to drive and good on gas. \n• Sedans – Smooth, comfortable, and perfect for any trip. \n• Luxury & Premium Vehicles – Ride in style with added comfort and features. \n• And more! We regularly update our fleet to ensure you have access to clean, well-maintained, and reliable vehicles.',
  },
  {
    question: 'Does Pegasus Rentals deliver vehicles?',
    answer: 'Yes, we do offer vehicle delivery for your convenience. Delivery is available between 8 AM and 8 PM for an additional fee. Contact us for pricing and availability based on your location.',
  },
  {
    question: 'Where do I pick up the rental car?',
    answer: "Pickups are at 162-42 Pidgeon Meadow Road, Flushing, NY 11358. Detailed instructions on where to find the keys will be sent to you once you book the vehicle. If you have any questions, feel free to reach out before your pickup time.",
  },
  {
    question: 'What information do I need to rent a car?',
    answer: 'To rent a vehicle from Pegasus Rentals, you must provide the following: \n\n• Valid Driver’s License – Must be unexpired and in your name. \n• Proof of Insurance – Your insurance policy must cover rental vehicles. \n• Credit or Debit Card – Required for payment and security purposes. \n• Refundable Security Deposit – A deposit is required at the time of rental and will be fully refunded upon the vehicle’s return, provided there are no issues.',
  },
  {
    question: 'Is there an age requirement?',
    answer: 'Yes, the minimum age to rent a vehicle from Pegasus Rentals is 18 years old for some cars and 21 years old for others. Age restrictions vary depending on the vehicle, and additional fees or requirements may apply. Please contact us for details on specific car eligibility.',
  },
  {
    question: 'Is gas included?',
    answer: 'No, gas is not included in the rental price. However, we offer a prepaid fuel add-on at a set price, which varies depending on the vehicle. This allows you to return the car without worrying about refueling. Please contact us for pricing details.',
  },
  {
    question: 'Is there an added cost to deliver a vehicle to me?',
    answer: 'Yes, there is an additional fee for vehicle delivery. Pricing varies based on location. Please contact us for more details on delivery costs.',
  }
]

export default FAQ