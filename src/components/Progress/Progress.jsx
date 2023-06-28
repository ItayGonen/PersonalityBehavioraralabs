import React, { useState, useEffect } from 'react';
import './Progress.css';

const Progress = (props) => {

    useEffect(() => {
        let progressElement = document.getElementById("progress")
        progressElement.classList.add("progress-animation")
    }, [])

  return (
    <div className='progress' id="progress">
        <div className='progress-bar' style={{ width: `${props.progressWidth}%` }}></div>
    </div>
  )
}

export default Progress;