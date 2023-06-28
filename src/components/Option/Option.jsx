import React, { useState, useEffect } from 'react';
import './Option.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { userFinishedQuiz } from '../../redux/paymentRedux';

const Option = (props) => {

    const [selected, setSelected] = useState(false)
    const [length, setLength] = useState(props.allQuestions.length)
    const [startingTime, setStartingTime] = useState()

    const dispatch = useDispatch();

    useEffect(() => {
        if (props.image){
            props.setImagesDiv(true)
        } else if (!props.image) {
            props.setImagesDiv(false)
        }
    }, [])


    // A function to save the options data locally
    const saveItLocally = (allQuestions, currentQuestion, optionId) => {
        let indexOfItem = allQuestions.indexOf(currentQuestion)
        let newArr = [...allQuestions]
        newArr[indexOfItem].selected = optionId
        props.setAllQuestions(newArr)
    }

    // A Function That Make Effect on the selected element
    const effectOnTheSelectedElement = () => {
        let selectedElement = document.getElementById(`option option-${props.option.id}`)
        selectedElement.classList.add("selected-animation-class")

        setTimeout( () => {
            props.setCurrent(current => current +=1)
            selectedElement.classList.remove("selected-animation-class")
            props.setProgressWidth(progressWidth => progressWidth += 100 / length)
            setSelected(false)
         }, 100 )
    }

    


    const moveToTheNextQuestion = () => {
        if (props.currentQuestion.number < length) {
            // console.log(props.currentQuestion.number)
            if (props.currentQuestion.number == 1) {
                setStartingTime(performance.now())
            }
            // Get user answer and save it (locally)
            saveItLocally(props.allQuestions, props.currentQuestion, props.option.id)

            // Effect on the selectes element
            effectOnTheSelectedElement()
            
        } else if (props.currentQuestion.number == length ) {
            
            saveItLocally(props.allQuestions, props.currentQuestion, props.option.id)
            
            let endTime = performance.now();

            // Save All Questions

            
            // Make an api call to the server that show the user finished the quiz
            dispatch(userFinishedQuiz(true))
        
            // Effect on the selected element   
            effectOnTheSelectedElement()
            // Finish Quiz
            let deltaTime =  (endTime - startingTime) / 1000;
            

            // Check If The User didn't Made It Too Fast
            if (deltaTime < 15) {
                props.setFinishQuiz(true)    
                props.setTooFast(true);
            } else {
                props.setFinishQuiz(true)    
            }
        }
    }

  return (
      
    <div 
        className={props.image? 'option-img' : props.trueOrFalse? 'option-true-or-false' : `option option-${props.option.id}`}
        id={`option option-${props.option.id}`}
        onClick={moveToTheNextQuestion}
    >
        {props.image? <img className='img-option' src={props.option.location} /> : <p className='p-text-option'> {props.option.text} </p>}

        {selected ? 
        <FontAwesomeIcon 
            icon={faCheck} 
            className="select-icon-check"
        /> : null}
    </div>
  )
}

export default Option;