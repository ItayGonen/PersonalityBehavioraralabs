import React, { useState } from 'react';
import './PaymentNavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import {
    Link
} from "react-router-dom";

const PaymentNavBar = () => {

    const [responsive, setResponsive] = useState(false)

  return (
    <div className='payment-nav' id="top">
        <Link to="" id="logo" className='logo'> Behavior<span style={{ color: '#ac8cdb' }}> Labs </span></Link>
    </div>
  )
}

export default PaymentNavBar;