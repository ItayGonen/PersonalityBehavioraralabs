import React, { Fragment, useEffect, useState } from 'react';
import './Timeline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong } from '@fortawesome/free-solid-svg-icons'
import img from '../../assets/download.png'
import Aos from 'aos';
import "aos/dist/aos.css";

const Timelime = () => {

    const [width, setWidth] = useState(0)

    useEffect( () => {
        Aos.init({duration: 2000});
    }, [])

    useEffect(() => {
        // console.log(width)
        setWidth(window.innerWidth)
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [width])


  return (
    <React.Fragment>
    <div className='container'>
        <div className='container-item' id="first" data-aos="fade-right">
            <div className='circled-div'>1</div>
            <h2>Start the personality test</h2>
            <p>Make sure you have the time and place to concentrate</p>
            {width > 1024 ? 
                <img src={img} style={{ alignSelf: 'flex-end', paddingTop: '10px', marginRight: '0px' }} data-aos="fade-in" />
            :
                null
            }
        </div>

        <div className='container-item' id="second" data-aos="fade-left">
            <div className='circled-div'>2</div>
            <h2>Get your personalized results</h2>
            <p>This will include your strongest characteristics according to the Big Five model</p>
            {width > 1024 ? 
                <img src={img} style={{ alignSelf: 'flex-end', paddingTop: '10px', marginRight: '0px' }} data-aos="fade-in"/>
            :
                // <FontAwesomeIcon 
                //     icon={faDownLong}
                //     style={{ fontSize: '35px', margin: '10px' }}
                // />
                null
            }
        </div>

        <div className='container-item' id="third" data-aos="fade-right">
            <div className='circled-div'>3</div>
            <h2>Improve and grow!</h2>
            <p>Decide what you would like to work on to improve and attain more joy in life!</p>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Timelime;