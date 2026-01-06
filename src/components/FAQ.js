import React, { useState } from 'react'
import './FAQ.css'
import { motion, AnimatePresence } from "motion/react"

const FAQ = () => {
  const [selected, setSelected] = useState(null)

  const toggle = i => {
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <section className='FAQ'>
      <div className="faq-container">
        {/* Section Header */}
        <motion.div 
          className="faq-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="faq-badge">HELP CENTER</span>
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="faq-subtitle">
            Everything you need to know about renting with Pegasus
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className='faq-grid'>
          {data.map((item, i) => (
            <motion.div 
              key={i}
              className='faq-item'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div 
                className={`faq-question ${selected === i ? 'active' : ''}`}
                onClick={() => toggle(i)}
              >
                <h3>{item.question}</h3>
                <div className={`faq-icon ${selected === i ? 'rotated' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path 
                      d="M5 7.5L10 12.5L15 7.5" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <AnimatePresence>
                {selected === i && (
                  <motion.div
                    className='faq-answer'
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="faq-answer-content">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const data = [
  {
    question: 'What is Pegasus Rentals?',
    answer: 'Pegasus Rentals is a premium car rental service dedicated to providing a seamless and hassle-free rental experience. We offer a diverse selection of well-maintained, reliable vehicles to suit any need - whether you are looking for a fuel-efficient compact, a comfortable sedan, or something with a little more power. With competitive pricing, flexible booking options, and excellent customer service, Pegasus Rentals makes it easy to get on the road with confidence.',
  },
  {
    question: 'Where is Pegasus Rentals based?',
    answer: 'Pegasus Rentals is based in Queens, New York City. We proudly serve customers throughout NYC and the surrounding areas, offering convenient pickup and drop-off options. Whether you are a local needing a temporary vehicle or a visitor exploring the city, we make renting a car easy and hassle-free!',
  },
  {
    question: 'What cars does Pegasus Rentals have?',
    answer: 'Pegasus Rentals offers a wide range of vehicles to suit any need. Our fleet includes: \n\n• Compact & Economy Cars - Easy to drive and good on gas. \n• Sedans - Smooth, comfortable, and perfect for any trip. \n• Luxury & Premium Vehicles - Ride in style with added comfort and features. \n• And more! We regularly update our fleet to ensure you have access to clean, well-maintained, and reliable vehicles.',
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
    answer: 'To rent a vehicle from Pegasus Rentals, you must provide the following: \n\n• Valid Driver License - Must be unexpired and in your name. \n• Proof of Insurance - Your insurance policy must cover rental vehicles. \n• Credit or Debit Card - Required for payment and security purposes. \n• Refundable Security Deposit - A deposit is required at the time of rental and will be fully refunded upon the vehicle return, provided there are no issues.',
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