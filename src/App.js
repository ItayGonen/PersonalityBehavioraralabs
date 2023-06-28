import './App.css';
import React, { Fragment, useState, useEffect } from 'react';
import NavBar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Second from './components/Second/Second';
import Timelime from './components/Timeline/Timelime';
import Body from './pages/Body/Body';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect 
}
from 'react-router-dom';
import QuestionsAndAnswers from './pages/QuestionsAndAnswers/QuestionsAndAnswers';
import Quiz from './pages/Quiz/Quiz';
import Payment from './pages/Payment/Payment';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import { useDispatch, useSelector } from 'react-redux';
import PaymentResults from './pages/PaymentResults/PaymentResults';
import Answers from './components/Answers/Answers';
import { userFinishedQuiz } from './redux/paymentRedux';
import FinalResult from './components/final-result/FinalResult';

function App() {
  const isUserFinishTheQuiz = useSelector(state => state.payment.finishQuiz)
  const isUserMovedToPayment = useSelector(state => state.payment.moveToPayment);
  const isUserPaid = useSelector(state => state.payment.finishPayment);

  const dispatch = useDispatch()

  useEffect(() => {
    console.log(isUserFinishTheQuiz)
    console.log(isUserMovedToPayment)
    console.log(isUserPaid)
  }, [])

  return (
    <React.Fragment>
      <Router>
        <div className='App'> 
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/faq" component={QuestionsAndAnswers} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/terms-conditions" component={TermsAndConditions} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          
          {isUserFinishTheQuiz ? <Route path="/pre-payment" component={Answers} />  : <Redirect to="/" />}
          {isUserMovedToPayment ? <Route path="/payment" component={Payment} />  : <Redirect to="/" />}
          {isUserMovedToPayment ? <Route path="/final-result/:id" component={FinalResult} /> : null}
          
          <Route  path="/" >
              <Redirect to="/" />
            </Route>
            
        </Switch>
        </div>
      </Router>
    </React.Fragment>  
  );
}

export default App;
