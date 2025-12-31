import React from 'react'
import phone from './phone.png'
import address from './address.png'
import hours from './open.jpg'
import './QuickStats.css'


const QuickStats = () => {
  return (
    <div className='quickstats'>
        <div className='stats_row'>

            <div
            className='stats_col1'>
                <img src={phone}/>
                <p>+1 (929) 342-8572</p>
            </div>

            <div
                className='stats_col2'>
                <img src={address}/>
                <p>162-42 Pidgeon Meadow Rd, Flushing, NY 11358</p>
            </div>


            <div
            className='stats_col3'>
                <img src={hours}/>
                <p>7 A.M. - 6 P.M. (EST)</p>
            </div>

        </div>

        <div className="quick_about">
            <p>Experience the ultimate in style and sophistication with Pegasus Rentals, your premier luxury car rental service in New York City. We offer an exceptional selection of high-end vehicles, from sleek sports cars to elegant sedans and spacious SUVs, tailored to meet your every need. Whether it’s a special occasion, a business trip, or simply indulging in a lavish driving experience, Pegasus Rentals is committed to delivering unparalleled service and ensuring your journey is extraordinary.
            </p>
            <br></br>
        </div>
        
    </div>
  )
}

export default QuickStats