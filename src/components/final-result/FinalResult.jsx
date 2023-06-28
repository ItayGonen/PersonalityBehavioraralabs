import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FiveCharacResults from '../../components/FiveCharacResults/FiveCharacResults';
import Progress from '../../components/Progress/Progress';
import ProgressResults from '../../components/ProgressResults/ProgressResults';
import cImage from '../../assets/pho2.png';
import Footer from '../../components/Footer/Footer';
import { userFinishPayment } from '../../redux/paymentRedux';

const FinalResult = () => {
    const SubCategoryToAmountObject = useSelector(state => state.payment.subCategoryToAmountObjectRedux);

    console.log(SubCategoryToAmountObject)

    const dispatch = useDispatch();

    useEffect(() => {
        SubCategoryToAmountObject.map((name, value) => {
            if (name.value != null){
                dispatch(userFinishPayment())
            } else {
                window.location.replace("/")
            }
        })
    }, [])

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

export default FinalResult;