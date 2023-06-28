import React, { useEffect } from 'react';
import './ProgressResults.css';

const ProgressResults = (props) => {
  
    useEffect(() => {
        let progressElement = document.getElementById("progress-res")
        progressElement.classList.add("progress-animation-res")
    }, [])

  return (
    <div className='progress-res' id="progress-res">
        {props.width == 100 ? 
        <div className='progress-bar-res-fully' style={{ width: `${props.width}%` }}>{props.width}%</div>
        :
        <div className='progress-bar-res' style={{ width: `${props.width}%` }}>{props.width}%</div>
        }
    </div>
  )
}

export default ProgressResults;