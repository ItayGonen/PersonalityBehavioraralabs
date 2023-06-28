import React, { useEffect } from 'react';
import './Question.css';
import Option from '../Option/Option';
import { questionsAndAnswers } from '../../data';
import Aos from 'aos';
import "aos/dist/aos.css";

const Question = (props) => {

    const options = [1,2,3,4,5]

    const numberOfChapters = 5;

    const numberOfQuestions = props.allQuestions.length;


    let currentChapter;
    if (props.question.number > 0 && props.question.number < 10) {
      currentChapter = 1;
    } else if (props.question.number >= 10 && props.question.number <= 20) {
      currentChapter = 2;
    } else if (props.question.number >= 20 && props.question.number <= 30) {
      currentChapter = 3;
    } else if (props.question.number >= 30 && props.question.number <= 40) {
      currentChapter = 4;
    } else if (props.question.number >= 40 && props.question.number <= 50) {
      currentChapter = 5;
    }

  return (
    <>
        <p className='questions-number-from'> Chapter <span className='span-from-number'> {currentChapter} </span> / {numberOfChapters}</p>
        <p className='question-text'>{props.question.name}</p>
    </>
    
  )
}

export default Question;