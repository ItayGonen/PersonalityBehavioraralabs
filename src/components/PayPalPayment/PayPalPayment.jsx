import React, { useState, useEffect } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import './PayPalPayment.css';
import { useSelector, useDispatch } from 'react-redux';
import { userFinishPayment, setPayerNameReduxFunc, setPayerEmailReduxFunc, setPayerCountryCode } from '../../redux/paymentRedux';
import axios from "axios";
import { ContinuousColorLegend } from "react-vis";


const Payment = (props) => {

    const dispatch = useDispatch();

    const [userNumberId, setuserNumberId] = useState()
    const [userPaid, setUserPaid]  = useState(false);

    const randomNumber = () => {
        return Math.round(Math.random() * 100000000000);
    }

    useEffect(() => {
        
        const userId = async () => {
            try {
                let seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
                setuserNumberId(seq)
            } catch (err) {
                // console.log(err)
            }
        }

        userId();
    }, [])

    

    const onPayment = (details, data) => {
        dispatch(userFinishPayment());
        // console.log(details, data);
        // setPayerName(details.payer.name.given_name);

        dispatch(setPayerNameReduxFunc(`${details.payer.name.given_name} ${details.payer.name.surname}`));
        dispatch(setPayerEmailReduxFunc(details.payer.email_address))
        dispatch(setPayerCountryCode(details.payer.address.country_code));

        // Set UserPaid Hook to "true" and pass the user to the results page
        setUserPaid(true)

        window.location.replace(`/results?id=${userNumberId}`);
    }

    


     // useEffect(() => {
    //     const calculateData = async () => {
    //         try {
    //             const result = await fetch("http://localhost:5000/calculate", {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 }, 
    //                 body: {
    //                     "results": props.doneQuestions
    //                 }
    //             })
    //             .then(res => res.json())
    //             .then(data => console.log(data))
    //          } catch (err) {
    //             console.log(err)
    //           }
    //     }

    //     calculateData()

    // }, [])

  return (    
      <div id="paypal-container">
        <PayPalButton
            id="buttons-paypal"
            options={{
                clientId: "AayXiA4Hj27rBSJGqfyH0OdqcEGiX9D4iHJQwoB5QatF1howx5Uv4o8u5Ap2gz_cLlfyxm7qxGLIfEKT",
                currency: "USD",
                // shippingPreference: "SET_PROVIDED_ADDRESS"
                // disableFunding: false
            }}
            amount={props.price}
            onSuccess={(details, data) => onPayment(details, data)}              
            
        />
        </div>
  );
}

export default Payment;