import React from 'react';
import './Footer.css';
import logoImgFooterImg from '../../assets/personality-logo-for-footer.svg'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-logo'> 
          <img src={logoImgFooterImg} style={{ width: '100%' }} />
        </div>
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