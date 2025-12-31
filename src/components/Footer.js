import React from 'react'
import pegasus from './pegasus_logo.png'
import insta from './instagram.png'
import turo from './turo.png'
import tiktok from './tiktok.png'
import './Footer.css'



const Footer = () => {
  return (
    <div className='footer'>

        <div className='row'>

            <div className='columns'>
    
                <div className='logo_name'>

                    <img src={pegasus} className='horse_logo'></img>
                    <h2>Pegasus</h2>

                </div>

                <div className='slogan'>
                <h3>Where convenience meets affordability.</h3>
                </div>
            </div>



            <div className='columns'>

                <h4>SUBSCRIBE WITH EMAIL FOR DISCOUNT DEALS</h4>

                <div className="email">
                    <input type="email" name="user_email" placeholder=' Email Address...' required/>
                    <button>Subscribe</button>
                </div>
                
            </div>


            <div className='columns'>

                <h4>FOLLOW US</h4>

                <div className='social_media_icons'>
                    <a href="https://www.instagram.com/drivepegasus/"><img src={insta}/></a>
                    <a href="https://turo.com/us/en/drivers/45444608"><img src={turo}/></a>
                    <img src={tiktok}/>
                </div>

                
            </div>



            <div className='columns'>

                <h4>CALL US</h4>

                <h3> +1 (929) 342-8572</h3>

                
            </div>


        </div>


        <div className='copyright'>
            <h7>© 2025 by Pegasus | All Rights Reserved | Terms & Conditions</h7>
        </div>



    </div>
  )
}

export default Footer