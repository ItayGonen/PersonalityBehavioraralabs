import React, { useState, useEffect } from 'react';
import './Answers.css';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import imgForExample from '../../assets/Feelings/happy.png'
import strengthImg from '../../assets/strength.png';
import thoughtImg from '../../assets/thought.png';
import slideImg from '../../assets/slide.png';
import adviceImg from '../../assets/Feelings/advice.png';
import weaknessImg from '../../assets/Feelings/weakness.png';
import firstAnalysisImg from '../../assets/Feelings/analytics-1.png';
import secondAnalysisImg from '../../assets/Feelings/analytics-2.png';
import thirdAnalysisImg from '../../assets/Feelings/analysis-3.png';
import 'react-circular-progressbar/dist/styles.css';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    Redirect 
  }
from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import { useSelector, useDispatch } from 'react-redux';
import { userMovedToPayment, SetSubCategoryToAmountObjectRedux } from '../../redux/paymentRedux';
import './Packages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faCheck, faArrowDown, faHand, faDumbbell, faSadCry, faArrowCircleDown, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import Reviews from '../Reviews/Reviews';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar';
import { FaxSharp, TrySharp } from '@mui/icons-material';

const style = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    gap: '15px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '25px',
    boxShadow: 24,
    p: 4,
  };

const Answers = (props) => {

    const location = useLocation()
    const s = location.state

    const [allQuestions, setAllQuestions] = useState(s? s.doneQuestions : null)


    const dispatch = useDispatch();


    const [open, setOpen] = useState(false);

    const [type, setType] = useState()

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()



    const FirstHandleOpen = () => {
        setType("First")
        setOpen(true)
    };

    const SecondHandleOpen = () => {
        setType("Second")
        setOpen(true)
    };

    const ThirdHandleOpen = () => {
        setType("Third")
        setOpen(true)
    };

    const handleClose = () => setOpen(false);


    const percentage = 4;

    
    const [subCategoryToAmount, setSubCategoryToAmount] = useState({})
    
    const calculatingData = () => {
        allQuestions?.map(q => console.log(q.selected))
        let ConscientiousnessNum = 0;
        let ConscientiousnessQuestionsNum = 0;

        let ExtraversionNum = 0;
        let ExtraversionQuestionsNum = 0;

        let AgreeablenessNum = 0;
        let AgreeablenessQuestionsNum = 0;

        let NeuroticismNum = 0;
        let NeuroticismQuestionsNum = 0;

        let OpenessToExperienceNum = 0;
        let OpenessToExperienceQuestionsNum = 0;

        let final = [];
        
        allQuestions.map(question => {
            if (question.subCategoryId.name == "Conscientiousness"){
                if (question.selected !== null) {
                    ConscientiousnessNum += question.selected
                    ConscientiousnessQuestionsNum += 1
                }
            } else if (question.subCategoryId.name == "Extraversion") {
                if (question.selected !== null) {
                    ExtraversionNum += question.selected
                    ExtraversionQuestionsNum += 1
                }
            } else if (question.subCategoryId.name == "Agreeableness") {
                if (question.selected !== null) {
                    AgreeablenessNum += question.selected
                    AgreeablenessQuestionsNum += 1
                }
            } else if (question.subCategoryId.name == "Neuroticism"){
                if (question.selected !== null) {
                    NeuroticismNum += question.selected
                    NeuroticismQuestionsNum += 1
                }   
            } else if (question.subCategoryId.name == "Openess to experience") {
                if (question.selected !== null) {
                    OpenessToExperienceNum += question.selected
                    OpenessToExperienceQuestionsNum += 1
                }
            }
        })


        return [
           {
               name: "Conscientiousness",
               value: Math.round((ConscientiousnessNum / ConscientiousnessQuestionsNum * 20)),
           }, 
           {
                name: "Extraversion",
                value: Math.round((ExtraversionNum / ExtraversionQuestionsNum * 20 )) ,
           }, 
           {
               name: "Agreeableness",
               value: Math.round((AgreeablenessNum / AgreeablenessQuestionsNum) * 20),
           }, 
           {
                name: "Neuroticism",
                value: Math.round((NeuroticismNum / NeuroticismQuestionsNum * 20)) ,
           },  
           {
               name: "Openess to experience",
               value: Math.round((OpenessToExperienceNum / OpenessToExperienceQuestionsNum * 20))
           }
        ]
        
    }

    useEffect(() => {
        let subCategoryToAmountObject;
        subCategoryToAmountObject = calculatingData();    
        dispatch(SetSubCategoryToAmountObjectRedux(subCategoryToAmountObject));
        setSubCategoryToAmount(subCategoryToAmountObject);
    }, [])

    useEffect(() => {
        console.log(subCategoryToAmount)
    }, [subCategoryToAmount])

    const getsResultsHandler = () => {
        dispatch(userMovedToPayment())
   }

  return ( 
    <>
    <div className='results-container'>
        <div className='pre-reports'>
            <h1 style={{ color: 'black', width: '80%', textAlign: 'center' }}> Find Out  <span style={{ fontWeight: '1000', color: "#5c18bf" }}> WHO YOU ARE! </span></h1>
            <p>Congratulations! You have made the first step into self imporvment. </p>
        </div>

          {/* <div className='strength-weakness-advice'>
             <div className='item-s-w-a'>
                 <p>Discover Your Mental Strengths</p>
                 <img src={strengthImg} />
             </div>
             <div className='item-s-w-a'>
                 <p>Know Your Weaknesses</p>
                 <img src={slideImg} />
                 
             </div>
             <div className='item-s-w-a'>
                 <p>Get Essentials Knowledge that Will Improve Yourself</p>
                 <img src={thoughtImg} />
             </div>
         </div> */}
        <div className='pre-reports'>
            <h1> Our Report </h1>
            <p> Our Personality report is based on well known psychological theory and will describe your personality based on the big 5 characteristics </p>
         </div>

         <div className='reports' id="basic-report">
            
            <div className='report-item' id="master-report">
            
                <div className='level'>
                    <p style={{ color: 'white' }}> Advanced Personality Report </p>
                    {/* <p className="level-report-desc"> Share With a Loved One </p> */}
                </div>
                <div className='price'>
                    {/* <p style={{ textDecoration: 'line-through', fontSize: '1.3rem' }}> 24.99$ </p> */}
                    <p> 7.99$ </p>
                </div>
                <div className='lines'>
                    <hr />
                    <div className='feature-check-icon'>
                        <p>Simplified personality ennagram</p>
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <hr />
                    <div className='feature-check-icon'>
                        <p>Analayzed personality characters</p>
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    {/* <hr />
                    <div className='feature-check-icon'>
                        <p>Essentials Tips to improve yourself</p>
                        <FontAwesomeIcon icon={faCheck} />
                    </div> */}
                    <hr />
                </div>
                <a
                    href="https://store.payproglobal.com/checkout?products[1][id]=84560&page-template=17206&use-test-mode=true&secret-key=!yqRsYG0-0"
                    onClick={getsResultsHandler}
                    className="to-payment-button"
                > Get My Results </a>
            </div>

            <div className='report-item' id="master-report">
              <div className='level'>
                    <p style={{ color: 'white' }}> Complete Personality Report </p>
                    {/* <p className="level-report-desc"> Share With a Loved One </p> */}
                </div>
                <div className='price'>
                    {/* <p style={{ textDecoration: 'line-through', fontSize: '1.3rem' }}> 24.99$ </p> */}
                    <p> 9.99$ </p>
                </div>
                <div className='lines'>
                    <hr />
                    <div className='feature-check-icon'>
                        <p>Simplified personality ennagram</p>
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <hr />
                    <div className='feature-check-icon'>
                        <p>Analayzed personality characters</p>
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <hr />
                    <div className='feature-check-icon'>
                        <p>Essentials Tips to improve yourself</p>
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <hr />
                </div>
                <a
                    href="https://store.payproglobal.com/checkout?products[1][id]=85054&page-template=17206&use-test-mode=true&secret-key=!yqRsYG0-0"
                    onClick={getsResultsHandler}
                    className="to-payment-button"
                > Get My Results </a>
            </div>

            
         </div>


         <div className='middle-section'>
            87% of people in this page has chosen to view their full report 
         </div>
            <Reviews />
        </div>
        <Footer />
    </>
  )
}

export default Answers;



