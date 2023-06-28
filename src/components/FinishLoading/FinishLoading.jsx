import React, { useState, useEffect } from 'react';
import './FinishLoading.css'
import Loading from '../Loading/Loading';
import Lottie from 'react-lottie';
import brainGears from '../../lotties/brain-gears.json'
import Answers from '../Answers/Answers';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect 
  }
  from 'react-router-dom';

const FinishLoading = (props) => {

    const [width, setWidth] = useState(window.innerWidth)
    const [finishLoad, setFinishLoad] = useState(false)
    const [currentSentence, setCurrentSentence] = useState(0)


    useEffect(() => {
        setInterval(() => {
            setCurrentSentence(currentSentence => currentSentence += 1)
        }, 4000)
        setTimeout(() => {
            setFinishLoad(true)
        }, 8000)
    }, [])

    useEffect(() => {
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
        animationData: brainGears,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      const FinishLoadingSentences = ["Analayzing Your Personality...", "Processing Your Answers..."]


  return (
    <>
    {!finishLoad ? 
    <div className='finish-loading-div'>
      
        <Lottie 
            options={defaultOptions}
            className="lottie-icon-1"
            width={width < 768 ? 300 : 700}
            height={width < 768 ? 300 : 600}
        />
        <p>  {FinishLoadingSentences[currentSentence]} </p>
    </div>
    :
    // <Answers doneQuestions={props.questions} />
    <Redirect 
        to={{ 
            pathname: '/pre-payment',
            state: {
                doneQuestions: props.questions
            }
        }}
    />
    }
    </>
  )
}

export default FinishLoading;