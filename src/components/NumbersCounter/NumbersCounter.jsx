import React, { useState, useEffect } from 'react';
import './NumbersCounter.css';
import { Grow } from '@mui/material';
import { counterData } from '../../data';
import Count from '../Count/Count';
import VisibilitySensor from 'react-visibility-sensor';

const NumbersCounter = () => {

  
  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      // console.log(window.scrollY)
    })
  }, [])

  return (
      <>
    <div className='number-growth-container'>
      <div className='numbers-div'>
        <div className='titles-numbers-div'>
          <h1>Changing lives, one person at a time!</h1>
          <h3>Take the test and find out how</h3>
        </div>
        <div className='numbers-animation-div'>
          {counterData.map(counter => <Count data={counter} />)}
        </div>
      </div>
      
    </div>
    </>
  )
}

export default NumbersCounter;