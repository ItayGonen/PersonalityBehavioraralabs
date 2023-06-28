import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-logo'> Behaviora<span style={{ color: '#ac8cdb' }}>Labs</span> </div>
        <div className='footer-items'> 
            <a href="/terms-conditions">Terms Of Services</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/faq">FAQ</a>
        </div>
        <div className='contact-footer'>
            <h1 className='contact-title'>Contact</h1>
            <a href="#">support@behavioralabs.com</a>
            {/* <a href="#">Disclaimer</a> */}
        </div>
    </div>
  )
}

export default Footer;