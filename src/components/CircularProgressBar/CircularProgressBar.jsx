import React from 'react';
import './CircularProgressBar.css';
import { useSelector } from 'react-redux';


const CircularProgressBar = () => {

  const SubCategoryToAmountObject = useSelector(state => state.payment.subCategoryToAmountObjectRedux);
  let g = [];
  SubCategoryToAmountObject.map((item) => g.push(item.value));

  const max = Math.max(...g);
  const min = Math.min(...g);

  let maxIndex = g.indexOf(max);
  let minIndex = g.indexOf(min);

  let maxItemName = SubCategoryToAmountObject[maxIndex].name;
  let maxItemValue = SubCategoryToAmountObject[maxIndex].value;

  let minItemName = SubCategoryToAmountObject[minIndex].name;
  let minItemValue = SubCategoryToAmountObject[minIndex].value;


  return (
    <div className='circles'>
      <div className='circle-item'>
        <div class="c100 p80 big green">
            <span>{maxItemValue}%</span>
            <div class="slice">
                <div class="bar"></div>
                <div class="fill"></div>
            </div>
        </div>
        <div className='circle-text'>
          {/* <p>Your Best Character</p> */}
          <p>{maxItemName}</p>
        </div>
      </div>
      <div className='circle-item'>
        <div class="c100 p20 big red">
            <span>{minItemValue}%</span>
            <div class="slice">
                <div class="bar"></div>
                <div class="fill"></div>
            </div>
        </div>
        <div className='circle-text'>
          {/* <p>Your Worst Character</p> */}
          <p>{minItemName}</p>
        </div>
      </div>
    </div>
  )
}

export default CircularProgressBar;