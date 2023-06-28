import React, { useEffect, useState } from 'react';
import './FullQuiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faLeftLong, faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import ideaImage from '../../assets/idea.png'
import Question from '../Question/Question';
import Aos from 'aos';
import "aos/dist/aos.css";
import Progress from '../Progress/Progress';
import Option from '../Option/Option';
import { optionsForFirstTheme } from '../../data';
import { realData } from '../../data';
import Options from '../Options/Options';
import FinishLoading from '../FinishLoading/FinishLoading';
import TooFast from '../../components/TooFast/TooFast';



const FullQuiz = (props) => {

  useEffect( () => {
    Aos.init({duration: 2000});
  }, [])

  
  const [current, setCurrent] = useState(0)
  const [progressWidth, setProgressWidth] = useState(0)
  const [imagesDiv, setImagesDiv] = useState(false)
  const [finishQuiz, setFinishQuiz] = useState(false);
  const [tooFast, setTooFast] = useState(false)

  const returnToHomePage = () => {
    window.location.replace("/")
  }

  const makeQuestionsRandomArray = (questionsArray) => {
    return questionsArray.sort(() => Math.random() - 0.5)
  }

  useEffect(() => {
    
  }, [])

  return (
    <>
   {!finishQuiz 
   ? 
    <div className='full-quiz-container'>
      <div className='outer-icon'>
        <FontAwesomeIcon 
          icon={faChevronLeft}
          className='left-icon'
          onClick={returnToHomePage}
        />
      </div>
      
      <div className='wavey-class'>
           <svg xmlns="http://www.w3.org/2000/svg" width="1500" height="275" viewBox="0 0 1500 500" preserveAspectRatio="none">
            <defs>
            <linearGradient id="myGradient" gradientTransform="rotate(45)">
              <stop offset="20%"  stop-color="#5c18bf" />
              <stop offset="95%" stop-color="#ac8cdb" />
            </linearGradient>
           </defs>
            <path d="M 0,0
               L 0,250
               Q 750,500 1500,250
               L 1500, 0
               Z" fill="url('#myGradient')" />
            </svg>
      </div>
        <div className='ad'>
            <Progress 
              progressWidth={progressWidth} 
              questions={props.quesWtions}
            />
        </div>

        <div className='questions-div'>
          {props.quesWtions.slice(current, current + 1).map(question => <Question allQuestions={props.quesWtions} question={question} /> )}  
        </div>
        <div className={imagesDiv ? 'answers-div-img' : 'answers-div'}>
        {props.quesWtions.slice(current, current + 1).map(question => 
          <Options 
            question={question} 
            setFinishQuiz={setFinishQuiz}
            setCurrent={setCurrent} 
            setProgressWidth={setProgressWidth} 
            setImagesDiv={setImagesDiv}
            allQuestions={props.quesWtions}
            setAllQuestions={props.setQuestions}
            setTooFast={setTooFast}
          /> )}  
        </div>
    </div>
    
    :
    <> 
        {
         !tooFast ?  
            <FinishLoading questions={props.quesWtions} />
         :
            <TooFast />
         }
    </>
    
   
    }
  </>
  )
}

export default FullQuiz;