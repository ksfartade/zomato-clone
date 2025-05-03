import React from 'react';
import './footer.css';  
import { assets } from '../../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>

        <div className="footer-content">
            <div className="left">
                <img src={assets.logo} alt="" />
                <p>Foodie is a food delivery app that connects you with your favorite restaurants and delivers delicious meals right to your doorstep.</p>

                <div className="social-icons">
                    <img src={assets.facebook_icon} alt="Facebook" className="social-icon" />
                    <img src={assets.twitter_icon} alt="Twitter" className="social-icon" />
                    <img src={assets.linkedin_icon} alt="LinkedIn" className="social-icon" />
                </div>
            </div>

            <div className="middle">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1 234 567 890</li>
                    <li> contact@gmail.com </li>
                    <li> 123 Main St, City, Country </li>
                </ul>
            </div>
        </div>

        <hr />
        <p className="footer-copyright"> Copyright 2024 tomato.com - All Rights Reserved. </p>
    </div>
  )
}

export default Footer