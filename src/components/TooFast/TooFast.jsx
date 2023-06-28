import React, { useEffect, useState } from 'react';
import './TooFast.css';
import lottieRun from '../../lotties/run.json';
import Lottie from 'react-lottie';

const TooFast = () => {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        console.log(width)
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [width])

    const lottieStyle = {
        width: 600,
        height: 600,
        '@media screen and (max-width: 768px)': {
            height: '100px !important',
            width: '400px !important'
        }
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottieRun,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      const startAgainHandler = () => {
          document.location.reload();
      }



  return (
    <div className='too-fast-div'>
         <Lottie 
            options={defaultOptions}
            className="lottie-icon-1"
            width={width < 768 ? 300 : 700}
            height={width < 768 ? 300 : 600}
        />
        <p> Too Fast For Us!   </p>
        <button onClick={startAgainHandler}> Start Again </button>
    </div>
  )
}

export default TooFast;