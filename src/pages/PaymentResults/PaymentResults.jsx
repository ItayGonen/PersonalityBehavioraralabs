import React, { useState, useEffect } from 'react';
import './PaymentResults.css';
import { useSelector } from 'react-redux';
import userAvatarImage from '../../assets/avatar.png';
import constantImage from '../../assets/Feelings/const-photo.jpg';
import cImage from '../../assets/pho2.png';
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
import FiveCharacResults from '../../components/FiveCharacResults/FiveCharacResults';
import Progress from '../../components/Progress/Progress';
import ProgressResults from '../../components/ProgressResults/ProgressResults';
import Flag from 'react-world-flags';
import Footer from '../../components/Footer/Footer';


const PaymentResults = () => {
    const SubCategoryToAmountObject = useSelector(state => state.payment.subCategoryToAmountObjectRedux);
    console.log(SubCategoryToAmountObject)


    const [userData, setUserData] = useState({
        labels: SubCategoryToAmountObject.map((data) => data.name),
        datasets: [
          {
            label: "Value",
            data: SubCategoryToAmountObject.map((data) => data.value),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
    


  return (
    <>
    <div className='outer-payment-results-container'>
        <div className='dear-payer'>
            {/* <h2> Dear <span style={{ color: '#9b75d6' }}> {payerFullName}, </span> </h2> */}
            <h3>Enjoy Your Personal Assesments.</h3>
        </div>
        <div className='payment-results-container'>
            {/* {console.log(SubCategoryToAmountObject)} */}
            {/* <div className='first-part-payment-result'>
                <div className='first-profile'>
                    <div className='flag-image'>
                        <img src={userAvatarImage} />
                        <Flag code={payerCountryCode} className="flag" />
                    </div>
                    <div className='details-text'>
                        <p>{payerFullName}</p>
                        
                    </div>
                </div>
            </div> */}

            <div className='second-part-payment-result'>
                <div className='about-us-results-div'>
                    <div className='about-us-text'>
                        <h2>The Big Five. <br /> <span style={{ color: 'black', fontSize: '1rem' }}> What Is It?</span></h2>
                        <p>The Big Five is a personality theory provides a blueprint for understanding ourselves and others based on commonly used terminology that can effectively describe our personalities and approaches to life. </p>
                    </div>
                    <div className='about-us-image'>
                        <img src={cImage} />
                    </div>
                </div>
            </div>

            <div className='third-part-payment-result'>
                <h1 style={{ textAlign: 'center', margin: '35px 0px' }}> Payment Results Explanations </h1>
                {
                    SubCategoryToAmountObject.map((name, value) => 
                        <div className='prog-res'>
                            <h3>{name.name}</h3>
                            <ProgressResults width={name.value} />
                        </div>
                    )
                }
            </div>

            <div className='fourth-part-payment-result'>
                <FiveCharacResults />
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default PaymentResults;