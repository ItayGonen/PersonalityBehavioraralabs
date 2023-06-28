import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import {
    Link
} from "react-router-dom";
import logoImage from '../../assets/Feelings/logo.png';

const Navbar = () => {

    const [responsive, setResponsive] = useState(false)

  
    useEffect(() => {
        let navElement = document.getElementById("nav");
        let barsIconElement = document.getElementById("bars-icon")
        let logoElement = document.getElementById("logo")
        window.addEventListener('scroll', (event) => {
            if (window.scrollY > 0){
                navElement.classList.add("shadow")
                logoElement.classList.add("res")
            } else {
                navElement.classList.remove("shadow")
                logoElement.classList.remove("res")
            }
        })    
    }, [window])

    const changeToQuizLocation = () => {
        window.location.replace("/quiz")
    }

    

  return (
    <nav id='nav' className='nav'>
        <div className='icon-div'>
            <Link to="" id="logo" className='logo'> Behaviora<span style={{ color: '#ac8cdb' }}>Labs</span></Link> 
            {/* <img src={logoImage} className="logo-image" /> */}
            <FontAwesomeIcon 
                icon={!responsive ?  faBars : faClose}
                className='bars-icon'
                id="bars-icon"
                onClick={() => setResponsive(!responsive)}
            />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5px' }}>
            <ul id="main-navbar" className={responsive ? 'main-navbar expanded' : 'main-navbar'}>
                <li>
                    <a href="/">
                        Home
                    </a>
                </li>

                <li>
                    <a href="/faq">
                        FAQ
                    </a>
                </li>

            </ul>
            <button className='start-test-button' onClick={changeToQuizLocation}> Start Test </button>
        </div>
    </nav>
  )
}

export default Navbar;