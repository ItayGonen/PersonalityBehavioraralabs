import React from 'react';
import './Options.css';
import Option from '../Option/Option';
import sadImage from '../../assets/Feelings/sad.png';
import angryImage from '../../assets/Feelings/angry.png';
import cryingImage from '../../assets/Feelings/crying.png';
import happyImage from '../../assets/Feelings/happy.png';
import shyImage from '../../assets/Feelings/shy.png';
import thinkingImage from '../../assets/Feelings/thinking.png';
import { PeopleSharp } from '@mui/icons-material';

const Options = (props) => {
    const optionsForAgreeToDisagree = [
        {
            id:5,
            text: "Strongly Agree"
        }, 
        {
            id: 4,
            text: "Agree"
        }, 
        {
            id:3,
            text: "Neutral"
        }, 
        {
            id:2,
            text: "Disagree"
        },
        {
            id:1,
            text: "Strongly Disagree"
        }
    ]

    const optionsForTrueOrFalse = [
        {
            id:1,
            text: "True"
        },
        {
            id:2,
            text: "False"
        }
    ]

    const optionsForSituations = [
        {
            id:1,
            location: sadImage
        },
        {
            id:2,
            location: angryImage
        },
        {
            id:3,
            location: cryingImage
        },
        {
            id:4,
            location: happyImage
        },
        {
            id:5,
            location: shyImage
        },
        {
            id:6,
            location: thinkingImage
        },
        
    ]

  return (

    // <div className='options-div'>
    <>
        {props.question.questionTypeId.name == "AgreeToDisagree" ? 
            optionsForAgreeToDisagree.map(option => 
                <Option 
                    option={option} 
                    setCurrent={props.setCurrent} 
                    setProgressWidth={props.setProgressWidth}
                    allQuestions={props.allQuestions}
                    currentQuestion={props.question}
                    setFinishQuiz={props.setFinishQuiz}
                    setAllQuestions={props.setAllQuestions}
                    setImagesDiv={props.setImagesDiv}
                    setTooFast={props.setTooFast}
                />
            )
        :
        <>
            {
                props.question.questionTypeId.name == "TrueOrFalse" ? 
                optionsForTrueOrFalse.map(option => 
                    <Option 
                        option={option} 
                        setCurrent={props.setCurrent} 
                        setProgressWidth={props.setProgressWidth}
                        trueOrFalse={true}
                        allQuestions={props.allQuestions}
                        currentQuestion={props.question}
                        setFinishQuiz={props.setFinishQuiz}
                        setAllQuestions={props.setAllQuestions}
                        setImagesDiv={props.setImagesDiv}
                        setTooFast={props.setTooFast}
                    />
                )
            :
                optionsForSituations.map(option => 
                    <Option 
                        option={option} 
                        setCurrent={props.setCurrent} 
                        setProgressWidth={props.setProgressWidth}
                        setImagesDiv={props.setImagesDiv}
                        image={true} 
                        allQuestions={props.allQuestions}
                        currentQuestion={props.question}
                        setFinishQuiz={props.setFinishQuiz}
                        setAllQuestions={props.setAllQuestions}
                        setTooFast={props.setTooFast}
                    />
                )
            }
        </>
        }
    </>
    // </div>
  )
}

export default Options;