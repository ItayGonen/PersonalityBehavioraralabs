import React, { useState } from 'react';
import './SingleQA.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const SingleQA = (props) => {

    const [showAnswer, setShowAnswer] = useState(false)

    const showAnswerHandler = () => {
        let selectedAnswerElement = document.getElementById(`answer-${props.id}`)
        let selectedPara = document.getElementById(`para-${props.id}`)
        let selectedIcon = document.getElementById(`icon-${props.id}`)
        let selecedDiv = document.getElementById(`single-container-${props.id}`)
        let selectedTitle = document.getElementById(`title-${props.id}`)

        if (showAnswer) {
            selectedAnswerElement.style.height = '0px';
            selectedPara.classList.remove("ani")
            selecedDiv.style.paddingBottom = "0px";
            selectedTitle.classList.remove("selected")
            setShowAnswer(false)
        } else {
            selectedAnswerElement.style.height = '100%';
            selectedPara.classList.add("ani")
            selecedDiv.style.paddingBottom = "30px";
            selectedTitle.classList.add("selected")
            setShowAnswer(true)
        }
        
        // console.log(selectedAnswerElement)
    }

  return (
    <div className='single-aq-container' id={`single-container-${props.id}`} onClick={() => showAnswerHandler(props.id)}>
        <div className='question-icon-1'>
            <h2 className='title-question' id={`title-${props.id}`}>{props.question}</h2>
            <FontAwesomeIcon  
                icon={showAnswer ? faAngleUp  : faAngleDown}
                id={`icon-${props.id}`}
                className="icon-1"
            />
        </div>
        <div className='answer' id={`answer-${props.id}`}>
            <p id={`para-${props.id}`} className='para'>{showAnswer ?  props.answer : null}</p>
        </div>
    </div>
  )
}

export default SingleQA;