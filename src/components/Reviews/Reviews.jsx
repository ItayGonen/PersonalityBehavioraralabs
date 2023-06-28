import React from 'react';
import './Reviews.css';
import person1 from '../../assets/person1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import firstImg from '../../assets/1.jpeg';
import secondImg from '../../assets/2.jpeg';
import thirdImg from '../../assets/3.jpeg';
import fourthImg from '../../assets/4.jpeg';

const Reviews = () => {
  return (
    <div className='reviews-container'>
        <div className='pre-reports'>
            <h1>What Others Says</h1>
            {/* <p>More than 10000 users are satisfied using our personality test</p> */}
        </div>
        <div className='reviews'>

            <div className='review-item'>
                <div className='profile'>
                    <img src={secondImg} style={{ borderRadius: '50%', width: '50px', height: '50px', objectFit: 'unset' }} />
                    <div className='details'>
                        <h1>Tracy and John</h1> 
                        <p>57 minutes ago</p>
                        <div className='stars'>
                            <FontAwesomeIcon icon={faStar} className="single-review-star" />
                            <FontAwesomeIcon icon={faStar} className="single-review-star" />
                            <FontAwesomeIcon icon={faStar} className="single-review-star" />
                            <FontAwesomeIcon icon={faStar} className="single-review-star" />
                            <FontAwesomeIcon icon={faStar} className="single-review-star" />
                        </div>
                    </div>
                </div>

               
                
                <div className='review-text'>
                    <p>
                    "Me and my husband toke the test, we didn't saw it coming"
                    </p>
                </div>
            </div>

            <div className='review-item'>
                <div className='profile'>
                    <img src={firstImg} style={{ borderRadius: '50%', width: '50px', height: '50px', objectFit: 'unset' }} />
                    <div className='details'>
                        <h1>Viki</h1> 
                        <p>3 days ago</p>
                        <div className='stars'>
                            <FontAwesomeIcon icon={faStar} className="single-review-star" />
                            <FontAwesomeIcon icon={faStar} className="single-review-star" />
                            <FontAwesomeIcon icon={faStar} className="single-review-star" />
                            <FontAwesomeIcon icon={faStar} className="single-review-star" />
                            <FontAwesomeIcon icon={faStar} className="single-review-star" />
                        </div>
                    </div>
                </div>

                <div className='review-text'>
                    <p>
                    "Knowing yourself is the best way to prepare for a life changing event, I needed that!"
                    </p>
                </div>
            </div>

            <div className='review-item'>
                <div className='profile'>
                    <img src={fourthImg} style={{ borderRadius: '50%', width: '50px', height: '50px', objectFit: 'revert' }} />
                    <div className='details'>
                        <h1>Dan</h1> 
                        <p>6 days ago</p>
                        <div className='stars'>
                            <FontAwesomeIcon icon={faStar} className="single-review-star" />
                            <FontAwesomeIcon icon={faStar} className="single-review-star" />
                            <FontAwesomeIcon icon={faStar} className="single-review-star" />
                            <FontAwesomeIcon icon={faStar} className="single-review-star" />
                            <FontAwesomeIcon icon={faStar} className="single-review-star" />
                        </div>
                    </div>
                </div>
                <div className='review-text'>
                    <p>
                    "I was shocked to read the report, I learned a lot about myself, and everything make sense now"
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Reviews;