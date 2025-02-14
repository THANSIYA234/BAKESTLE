import React from 'react'
import './Footer.css'
import instaicon from '../assets/instaicon.svg'
import facebookicon from '../assets/facebookicon.svg'
import twittericon from '../assets/twittericon.svg'
const Footer = () => {
  return (
    <div className='footer'> 
    <ul className='footer-links'> 
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
        
    </ul>
    
<div className='footer-social-icon'>
    
    <div className='footer-social-container'>
    <img  src={instaicon} alt=''/>
    </div>
    <div className='footer-social-container'>
    <img  src={facebookicon} alt=''/>
    </div>
    <div className='footer-social-container'>
    <img  src={twittericon} alt=''/>
    </div>
</div>
    
    <div className='footer-copyright'>
        <hr/>
        <p>copyright@2025 Bakestle . powered by Bakestle </p>
    </div>
    
    </div>
  )
}

export default Footer