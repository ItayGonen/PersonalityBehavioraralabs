import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import QuestionAndAnswerComponent from '../../components/QuestionAndAnswerComponent/QuestionAndAnswerComponent';
import Footer from '../../components/Footer/Footer';

const QuestionsAndAnswers = () => {
  return (
    <Fragment>
      <div style={{ backgroundColor: 'rgb(251, 240, 240)' }}>
        <Navbar />
        <QuestionAndAnswerComponent />
        <Footer />
      </div>
    </Fragment>
  )
}

export default QuestionsAndAnswers;