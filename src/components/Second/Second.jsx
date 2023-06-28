import React from 'react';
import './Second.css';
import Lottie from 'react-lottie';
import thinkingLottie from '../../lotties/thinking.json'
import jumpLottie from '../../lotties/jump.json';
import paperLottie from '../../lotties/paper.json'

const Second = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: paperLottie,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      const secondDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: jumpLottie,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

  return (
    <div className='main-second'>
        <div className='second-div'>
            <div className='second-div-item'>
                <Lottie 
	                options={defaultOptions}
                    width={350}
                    height={350}
                />
                <h2>Your information is private</h2>
                <p>
                    We will never use your answers for anything but calculating your assessment results
                </p>
            </div>

            <div className='second-div-item'>
                <Lottie 
	                options={secondDefaultOptions}
                    width={350}
                    height={350}
                />
                <h2>Get insights that matter</h2>
                <p>
                As we all wish to improve something in our professional or personal life, this provides you the first step to do so!
                </p>
            </div>

        </div>
    </div>
  )
}

export default Second;