import React, { useState, useEffect } from 'react';
import PayPalPayment from '../../components/PayPalPayment/PayPalPayment';
import Lottie from 'react-lottie';
import Navbar from '../../components/Navbar/Navbar';
import './Payment.css';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    useLocation,
    Redirect 
  }
from 'react-router-dom';
import PaymentNavBar from '../../components/PaymentNavBar/PaymentNavBar';
import hotAitBaloonImage from '../../assets/hot-air-balloon.png';
import paymentLottie from '../../lotties/payment.json'
import Footer from '../../components/Footer/Footer';
import { useSelector } from 'react-redux';

const Payment = () => {

    const location = useLocation()
    const isUserMovedToPayment = useSelector(state => state.payment.moveToPayment);
    
    const { sta, username, email, type, price } = location.state

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        // console.log(width)
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [width])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: paymentLottie,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    


  return (
    <>  
        
    </>
  )
}

export default Payment;