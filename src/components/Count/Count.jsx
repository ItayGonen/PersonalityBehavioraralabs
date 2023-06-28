import React, { useState, useEffect }  from 'react';
import './Count.css';


const Count = (props) => {

    const [count, setCount] = useState("0");
    const [height, setHeight] = useState(0)

    useEffect(() => {
      window.addEventListener('scroll', (event) => {
        setHeight(window.scrollY)
      })
    }, [])

    useEffect(() => {

        let start = 0;
        // first three numbers from props
        const end = parseInt(props.data.number.substring(0,3))
        // if zero, return
        if (start === end) return;
    
        // find duration per increment
        let totalMilSecDur = parseInt(props.data.duration);
        let incrementTime = (totalMilSecDur / end) * 1000;



        let timer = setInterval(() => {
            start += 1;
            setCount(String(start) + props.data.number.substring(3))
            if (start === end) clearInterval(timer)       
          }, incrementTime);
      
        
        // dependency array
      }, [props.data.number, props.data.duration, height > 1000]);


  return (
    <div className='one-counter'>
        <h1 style={{ color: '#ac8cdb' }}>{count}</h1>
        <h2>{props.data.label}</h2>
    </div>
  )
}

export default Count;