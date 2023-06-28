import React from 'react';
import './FiveCharacResults.css';
import { useSelector } from 'react-redux';
import advisorImage from '../../assets/Five-Charac/advisor.png';
import forumImage from '../../assets/Five-Charac/forum.png';
import laptopImage from '../../assets/Five-Charac/laptop.png';
import marketingImage from '../../assets/Five-Charac/marketing.png';
import trophyImage from '../../assets/Five-Charac/trophy.png';
import leadImage from '../../assets/Five-Charac/lead.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const FiveCharacResults = () => {

    const SubCategoryToAmountObject = useSelector(state => state.payment.subCategoryToAmountObjectRedux);

  return (
    <>
    <div className='characts'>

        <div className='chrarc'>
            
            {SubCategoryToAmountObject[4].value > 0 && SubCategoryToAmountObject[4].value < 50 ? 
                
                <div className='charac-div'> 
                    <img src={advisorImage} />
                    <h1>Openess</h1>
                    <p> You are a down-to-earth person and prefer the known to the unknown. You are straightforward and practical. </p>
                    <div className='arrs'>
                        <div className='arr-last'>
                            <p> Dislike change </p>
                        </div>
                        <div className='arr-last'>
                            <p> Prefer the old and familiar concepts </p> 
                        </div>
                        <div className='arr-last'>
                            <p> Resists new ideas </p>
                        </div>
                        <div className='arr-last'>
                            <p> Dislike abstract or theoretical concepts </p>
                        </div>
                    </div>
                </div>
            :
            <>
                {SubCategoryToAmountObject[4].value > 50 && SubCategoryToAmountObject[4].value < 75 ?
                    <div className='charac-div'> 
                        <img src={advisorImage} />
                        <h1>Openess</h1>
                       <p>You are open to new experiences but also have a practical sense. You are creative and open-minded, while still have a clear grasp of reality.
                          You will try out new things, but not impulsively, after you see the entire picture and can predict the end-result.
                        </p>
                        <div className='arrs'>
                        <div className='arr-last'>
                            <p>Open to trying out new things</p>
                        </div>
                        <div className='arr-last'>
                            <p>Creative thinker</p>
                        </div>
                        <div className='arr-last'>
                        <p>Happy to think about abstract concepts</p>
                        </div>
                    </div>
                   </div>
                   :
                // Check if between 75-100
                <div className='charac-div'>
                    <img src={advisorImage} className="abs-image-o"/>
                    <h1>Openess</h1>
                    <p>
                    You are creative and insightful; you also have a broad spectrum of interests. Curiosity leads your way, and you are keen on learning new things. You are open to new experiences and adventures by nature.
                    Your openness to try out new things and new experiences could help you throughout the course of your life, but it could also put you in trouble.
                    Explore the world and its possibilities but keep out of harm's way!
                    </p>
                    <div className='arrs'>
                        <div className='arr-last'>
                            <p> Open to trying out new things </p>
                        </div>
                        <div className='arr-last'>
                            <p> Very creative </p>
                        </div>
                        <div className='arr-last'>
                            <p> Focused on tackling new challenges </p>
                        </div>
                        <div className='arr-last'>
                            <p> Happy to think about abstract concepts </p>
                        </div>
                    </div>
                    {/* <ul>
                        <li>Open to trying new things </li>
                        <li>Very creative</li>
                        <li>Focused on tackling new challenges</li>
                        <li>Happy to think about abstract concepts</li>
                    </ul> */}
                </div>
                }
            </>
            }
        </div>

        <div className='chrarc'>
            
            
            {SubCategoryToAmountObject[0].value > 0 && SubCategoryToAmountObject[0].value < 50 ? 
                <div className='charac-div'> 
                    <img src={trophyImage} />
                    <h1>Conscientiousness</h1>
                    <p> You are quick on your feet, able to make snap decisions and act fast and effectively if needed. You are spontaneous and sometimes act impulsively.   </p>
                
                    <div className='arrs'>
                        <div className='arr-last'>
                            <p> Dislike structure and schedules </p>
                        </div>
                        <div className='arr-last'>
                            <p> Engage in many different activities at once. </p>
                        </div>
                        <div className='arr-last'>
                            <p> Move quickly from one thing to the next. </p>
                        </div>
                        <div className='arr-last'>
                            <p> Can deliver bad news without it bringing you down. </p>
                        </div>
                    </div>
                </div>
            :
            <>
                {SubCategoryToAmountObject[0].value > 50 && SubCategoryToAmountObject[0].value < 75 ?
                    <div className='charac-div'> 
                    <img src={trophyImage} />
                    <h1>Conscientiousness</h1>
                   <p>
                        You see ahead and plan accordingly, you are able to achieve results through purposeful planning and persistence. You are perceived as an intelligent and reliable person by others. You are organized but not by nature, you put a great deal of work and thought to be able to do so.
                    </p>
                    <div className='arrs'>
                        <div className='arr-last'>
                            <p>Spends time preparing</p>
                        </div>
                        <div className='arr-last'>
                            <p>You need a deadline to keep you on track</p>
                        </div>
                        <div className='arr-last'>
                            <p>Pays attention to detail</p>
                        </div>
                    </div>
                       
                   </div>
                   :
                // Check if between 75-100
                <div className='charac-div'>
                    <img src={trophyImage} />
                    <h1>Conscientiousness</h1>
                    <p>
                    You have a vision and plan ahead, you are able to achieve results through purposeful planning and persistence. You are perceived as an intelligent and reliable person by others. You are organized but not by nature, so you put a great deal of work to do so.
                    </p>
                    <div className='arrs'>
                        <div className='arr-last'>
                            <p>You think with your heart as much as you do with your head</p>
                        </div>
                        <div className='arr-last'>
                            <p>Spend time preparing</p>
                        </div>
                        <div className='arr-last'>
                            <p>Need a deadline to stay on track</p>
                        </div>
                        <div className='arr-last'>
                            <p>Pay attention to details</p>
                        </div>
                    </div>
                </div>
                }
            </>
            }
        </div>

        <div className='chrarc'>
            
            {SubCategoryToAmountObject[1].value > 0 && SubCategoryToAmountObject[1].value < 50 ? 
                <div className='charac-div'> 
                    <img src={marketingImage} />
                    <h1>Extraversion</h1>
                    <p> 
                    You like being on your own and prefer the company of yourself. Being surrounded by people exhausts you and drains your power. You avoid the spotlight and being on your own feels much better, you don’t need someone else around to have a good time.
                    </p>
                    <div className='arrs'>
                        <div className='arr-last'>
                            <p>Prefer solitude</p>
                        </div>
                        <div className='arr-last'>
                            <p>Do not enjoy making small talk</p>                            
                        </div>
                        <div className='arr-last'>
                            <p>Carefully think things through before speaking</p>    
                        </div>
                        <div className='arr-last'>
                            <p>Dislike being the center of attention</p>    
                        </div>
                    </div>
                </div>
            :
            <>
                {SubCategoryToAmountObject[1].value > 50 && SubCategoryToAmountObject[1].value < 75 ?
                    <div className='charac-div'> 
                        <img src={marketingImage} />
                        <h1>Extraversion</h1>
                       <p>
                       You get your fill from being around people, it elevates your mood and performance. You are driven by interactions with people, which normally is the driving power of action. You like to be the center of attention and you gain energy from that. If you have a choice, you’d prefer doing everything with more than just yourself, the more the merrier.
                        </p>
                        <div className='arrs'>
                        <div className='arr-last'>
                            <p>Enjoy being the center of attention</p>
                        </div>
                        <div className='arr-last'>
                            <p>Like starting conversations</p>
                        </div>
                        <div className='arr-last'>
                            <p>Enjoy meeting new people</p>
                        </div>
                        <div className='arr-last'>
                            <p>Have a wide-range social circle of friends and acquaintances</p> 
                        </div>
                    </div>
                   </div>
                   :
                // Check if between 75-100
                <div className='charac-div'>
                    <img src={marketingImage} />
                    <h1>Extraversion</h1>   
                    <p>
                    You get your fill from being around people, it elevates your mood and performance. You are driven by interactions with people, which normally is the driving power of action. You like to be the center of attention but need some time to “cool down” alone later on. You enjoy large gatherings but can also enjoy a quiet night at home.
                    </p>
                    <div className='arrs'>
                        <div className='arr-last'>
                            <p>Enjoy being the center of attention</p>
                        </div>
                        <div className='arr-last'>
                            <p>Like starting conversations</p>    
                        </div>
                        <div className='arr-last'>
                            <p>Enjoy meeting new people</p>    
                        </div>
                        <div className='arr-last'>
                            <p>Have a wide-range social circle of friends and acquaintances</p>    
                        </div>
                    </div>
                </div>
                }
            </>
            }
        </div>

        <div className='chrarc'>
            
            {SubCategoryToAmountObject[2].value > 0 && SubCategoryToAmountObject[2].value < 50 ? 
                <div className='charac-div'> 
                    <img src={forumImage} />
                    <h1>Agreeableness</h1>
                    <p> 
                        You care for yourself first. You care more for a job getting done than for popularity. You are tough and resilient and able to make absolute objective decisions and deal with the consequences they bring. You are competitive and appreciate no 'messing around'.
                    </p>
                    <div className='arrs'>
                        <div className='arr-last'>
                            <p>Consider yourself first</p>
                        </div>
                        <div className='arr-last'>
                            <p>Speak their truth</p>     
                        </div>
                        <div className='arr-last'>
                            <p>Don't consider unrelated things to the task at hand</p>
                        </div>
                        <div className='arr-last'>
                            <p>Manipulate others to get what you want</p>    
                        </div>
                    </div>
                </div>
            :
                // Check if between 50-100
                <div className='charac-div'>
                    <img src={forumImage} />
                    <h1>Agreeableness</h1>
                    <p>
                    You really care about people and their feelings, for that, you are willing to work hard to please people, and people see you as friendly, honest, generous, helpful, and overall, a decent human being. You could even compromise your own interest for the sake of getting along better with people. You are optimistic when considering other people and they perceive you as trustworthy. 
                    </p>
                    <div className='arrs'>
                        <div className='arr-last'>
                            <p>Have a great deal of interest in other people</p>
                        </div>
                        <div className='arr-last'>
                            <p>Care about others</p>    
                        </div>
                        <div className='arr-last'>
                            <p>Feel empathy and concern for other people</p>
                        </div>
                        <div className='arr-last'>
                            <p>Enjoy helping and contributing to the happiness of others</p>    
                        </div>
                        <div className='arr-last'>
                            <p>Assist others who require help</p>
                        </div>
                    </div>
                </div>
                }
        </div>

        <div className='chrarc'>
            
            {SubCategoryToAmountObject[3].value > 0 && SubCategoryToAmountObject[3].value < 50 ? 
                <div className='charac-div'> 
                    <img src={leadImage} />
                    <h1>Neuroticism</h1>
                    <p> 
                    You don’t like uncertainty. it can negatively change your mood. You are very aware of your surroundings and can detect small changes in people’s behavior. You are very observant when it comes to speech and other non-verbal interactions between people or towards you.
                    </p>
                    <div className='arrs'>
                        <div className='arr-last'>
                            <p>Experience high levels of stress</p>
                        </div>
                        <div className='arr-last'>
                            <p>Feel anxious</p>
                        </div>
                        <div className='arr-last'>
                            <p>Highly aware of your surroundings</p>    
                        </div>
                    </div>
                </div>
            :
                // Check if between 50-100
                <div className='charac-div'>
                    <img src={leadImage} />
                    <h1>Neuroticism</h1>
                    <p>
                    You are confident and emotionally stable. You can evaluate complex and stressful situations in a calm and distinguished deminer. You are not easily threatened, and it is not easy to get you upset. You can cope with pressure with valor and ease. You’re the one to be next to in times of crisis. 
                    </p>
                    <div className='arrs'>
                        <div className='arr-last'>
                            <p>Emotionally stable</p>
                        </div>
                        <div className='arr-last'>
                            <p>Deal well with stress</p>    
                        </div>
                        <div className='arr-last'>
                            <p>Rarely feel sad or depressed</p>    
                        </div>
                        <div className='arr-last'>
                            <p>Don't worry much</p>    
                        </div>
                        <div className='arr-last'>
                            <p>Very relaxed</p>
                        </div>
                    </div>
                </div>
                }
        </div>
    </div>
    </>
  )
}

export default FiveCharacResults;