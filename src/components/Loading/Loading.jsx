import React, { useState, useEffect } from 'react';
import FullQuiz from '../FullQuiz/FullQuiz';
import './Loading.css';


const Loading = () => {

    const [finishLoad, setFinishLoad] = useState(false)
    const [currentSentence, setCurrentSentence] = useState(0)
    const [questions, setQuestions] = useState([])
    

    const loadingSentences = ["Loading The Questions...", "Customize Things For You...", "Loading Icons...", "Customize Things For You..."]


    const makeQuestionsRandomArray = (questionsArray) => {
      return questionsArray.sort(() => Math.random() - 0.5)
    }
    
    // useEffect(() => {
    //   const fetchAllQuestions = async () => {
    //     try {
    //       await fetch("http://localhost:6000/api/questions")
    //       .then(res => res.json())
    //       .then(data => {
    //         // Set The Question state to a random array of questions
    //         let a;
    //         let startingNum = 1;
    //         a = makeQuestionsRandomArray(data);
    //         for (let i = 0; i < a.length; i++) {
    //           a[i].number = startingNum;
    //           startingNum++;
    //         }
    //         setQuestions(a);
    //       })
          
    //     } catch (err) {
    //       console.log(err)
    //     }
    //   }
    //   fetchAllQuestions()
    // }, [])

    let a = [
        {
            "_id": "62b6bb3514575df56c42326a",
            "name": "You think that compassion is a basic value in our society",
            "number": 1,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aadcb84f6d89438a4927",
                "name": "Conscientiousness"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3514575df56c42326c",
            "name": "You often think about humankind and its place in the world",
            "number": 2,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aadcb84f6d89438a4927",
                "name": "Conscientiousness"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3614575df56c42326e",
            "name": "You often sympathize with other people",
            "number": 3,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aadcb84f6d89438a4927",
                "name": "Conscientiousness"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3614575df56c423270",
            "name": "You think revenge is not a form of  justice",
            "number": 4,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aadcb84f6d89438a4927",
                "name": "Conscientiousness"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3614575df56c423272",
            "name": "You easily feel sympathy for other people",
            "number": 5,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aadcb84f6d89438a4927",
                "name": "Conscientiousness"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3614575df56c423274",
            "name": "You easily relate and sympathize with other people problems ",
            "number": 6,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aadcb84f6d89438a4927",
                "name": "Conscientiousness"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3614575df56c423276",
            "name": "You find joy in helping other people",
            "number": 7,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aadcb84f6d89438a4927",
                "name": "Conscientiousness"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3614575df56c423278",
            "name": "You believe that one person can change the world",
            "number": 8,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aadcb84f6d89438a4927",
                "name": "Conscientiousness"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3714575df56c42327a",
            "name": "You believe that you should have a moral standard that will never change",
            "number": 9,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aadcb84f6d89438a4927",
                "name": "Conscientiousness"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3714575df56c42327c",
            "name": "You want your environment to know you have a moral compass",
            "number": 10,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aadcb84f6d89438a4927",
                "name": "Conscientiousness"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3814575df56c423288",
            "name": "You have a lot of friends and a wide social circle ",
            "number": 11,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aae6b84f6d89438a4929",
                "name": "Extraversion"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3814575df56c42328a",
            "name": "You react quickly to sudden events - a doorbell or a phone call",
            "number": 12,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aae6b84f6d89438a4929",
                "name": "Extraversion"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3814575df56c42328c",
            "name": "You often get excited ",
            "number": 13,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aae6b84f6d89438a4929",
                "name": "Extraversion"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3814575df56c42328e",
            "name": "You spend your free time with other people, for example - going out for parties ",
            "number": 14,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aae6b84f6d89438a4929",
                "name": "Extraversion"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3814575df56c423290",
            "name": "You don’t like to be alone ",
            "number": 15,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aae6b84f6d89438a4929",
                "name": "Extraversion"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3914575df56c423292",
            "name": "After being alone you feel you need to meet people",
            "number": 16,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aae6b84f6d89438a4929",
                "name": "Extraversion"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3914575df56c423294",
            "name": "You are emotional and sensitive, you like to express you emotions",
            "number": 17,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aae6b84f6d89438a4929",
                "name": "Extraversion"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3914575df56c423296",
            "name": "You often tends to speak loudly",
            "number": 18,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aae6b84f6d89438a4929",
                "name": "Extraversion"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3914575df56c423298",
            "name": "You make friends quickly and easily ",
            "number": 19,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aae6b84f6d89438a4929",
                "name": "Extraversion"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3914575df56c42329a",
            "name": "In order to feel better, you need to see people and socialize",
            "number": 20,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aae6b84f6d89438a4929",
                "name": "Extraversion"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3a14575df56c4232a4",
            "name": "you have a hot temper",
            "number": 21,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaebb84f6d89438a492b",
                "name": "Agreeableness"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3a14575df56c4232a6",
            "name": "You are always on time for scheduled events",
            "number": 22,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaebb84f6d89438a492b",
                "name": "Agreeableness"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3a14575df56c4232a8",
            "name": "You have to follow the rules in order to achieve your professional goals ",
            "number": 23,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaebb84f6d89438a492b",
                "name": "Agreeableness"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3b14575df56c4232aa",
            "name": "You need to understand everything before making a decision",
            "number": 24,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaebb84f6d89438a492b",
                "name": "Agreeableness"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3b14575df56c4232ac",
            "name": "You don’t waste time, every hour in your day is planned",
            "number": 25,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaebb84f6d89438a492b",
                "name": "Agreeableness"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3b14575df56c4232ae",
            "name": "Its hard to see the \"big picture\" without listening to other people opinion first",
            "number": 26,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaebb84f6d89438a492b",
                "name": "Agreeableness"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3b14575df56c4232b0",
            "name": "You think that almost everything can be rationally explained and analyzed",
            "number": 27,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaebb84f6d89438a492b",
                "name": "Agreeableness"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3b14575df56c4232b2",
            "name": "You work best within a team",
            "number": 28,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaebb84f6d89438a492b",
                "name": "Agreeableness"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3b14575df56c4232b4",
            "name": "You believe that it is important to have a friendly relations with the people you work with",
            "number": 29,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaebb84f6d89438a492b",
                "name": "Agreeableness"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3c14575df56c4232b6",
            "name": "You have a strict work-life balance ",
            "number": 30,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaebb84f6d89438a492b",
                "name": "Agreeableness"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3d14575df56c4232c4",
            "name": "You are at your best in a high stress environment",
            "number": 31,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaf0b84f6d89438a492d",
                "name": "Neuroticism"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3d14575df56c4232c6",
            "name": "You often get emotional while watching movies ",
            "number": 32,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaf0b84f6d89438a492d",
                "name": "Neuroticism"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3d14575df56c4232c8",
            "name": " Your instincts are often the most important parameter in your decision making",
            "number": 33,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaf0b84f6d89438a492d",
                "name": "Neuroticism"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3d14575df56c4232ca",
            "name": "You let your emotions affect your decisions",
            "number": 34,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaf0b84f6d89438a492d",
                "name": "Neuroticism"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3e14575df56c4232cc",
            "name": "You tend to make decisions based on your experience rather than on knowledge ",
            "number": 35,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaf0b84f6d89438a492d",
                "name": "Neuroticism"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3e14575df56c4232ce",
            "name": "Your instics are usually right",
            "number": 36,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaf0b84f6d89438a492d",
                "name": "Neuroticism"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3e14575df56c4232d0",
            "name": "You are easily affected by strong emotions",
            "number": 37,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaf0b84f6d89438a492d",
                "name": "Neuroticism"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3e14575df56c4232d2",
            "name": "You often feel stressed",
            "number": 38,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaf0b84f6d89438a492d",
                "name": "Neuroticism"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3e14575df56c4232d4",
            "name": "You often raise your voice",
            "number": 39,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaf0b84f6d89438a492d",
                "name": "Neuroticism"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb3f14575df56c4232d6",
            "name": "You always plan for the worst and hope for the best",
            "number": 40,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaf0b84f6d89438a492d",
                "name": "Neuroticism"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb4014575df56c4232e2",
            "name": "You rarely change your mind",
            "number": 41,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaf4b84f6d89438a492f",
                "name": "Openess to experience"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb4014575df56c4232e4",
            "name": "You tend to decide only offer long consideration of all the options",
            "number": 42,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaf4b84f6d89438a492f",
                "name": "Openess to experience"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb4014575df56c4232e6",
            "name": "You plan ahead, never improvise ",
            "number": 43,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaf4b84f6d89438a492f",
                "name": "Openess to experience"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb4014575df56c4232e8",
            "name": "You like plan your actions in advance",
            "number": 44,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaf4b84f6d89438a492f",
                "name": "Openess to experience"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb4014575df56c4232ea",
            "name": "You always have a clear plan ahead for your time",
            "number": 45,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaf4b84f6d89438a492f",
                "name": "Openess to experience"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb4014575df56c4232ec",
            "name": "You always  read the instructions, you prefer to know how to do something before you start",
            "number": 46,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaf4b84f6d89438a492f",
                "name": "Openess to experience"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb4114575df56c4232ee",
            "name": "You like to work with deadlines, it makes the job done faster",
            "number": 47,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaf4b84f6d89438a492f",
                "name": "Openess to experience"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb4114575df56c4232f0",
            "name": "You hate surprises ",
            "number": 48,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaf4b84f6d89438a492f",
                "name": "Openess to experience"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb4114575df56c4232f2",
            "name": "you are organized and keeps a clean environment",
            "number": 49,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaf4b84f6d89438a492f",
                "name": "Openess to experience"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        },
        {
            "_id": "62b6bb4114575df56c4232f4",
            "name": "When solving a problem you often follow a familiar approach than seek a new one",
            "number": 50,
            "questionTypeId": {
                "_id": "62b6ab1bb84f6d89438a4932",
                "name": "AgreeToDisagree"
            },
            "subCategoryId": {
                "_id": "62b6aaf4b84f6d89438a492f",
                "name": "Openess to experience"
            },
            "categoryId": {
                "_id": "62b6aa94b84f6d89438a4920",
                "name": "Personallity"
            },
            "selected": 0,
            "__v": 0
        }
    ]
  
    

    useEffect(() => {
    //   setQuestions(a)

    //   console.log(questions)


      let b;
      let startingNum = 1;
      b = makeQuestionsRandomArray(a);
      for (let i = 0; i < a.length; i++) {
        b[i].number = startingNum;
        startingNum++;
      }
      setQuestions(b);

        setInterval(() => {
            if (currentSentence < 3) {
                setCurrentSentence(currentSentence => currentSentence += 1)
            } 
        }, 8000/2)
        setTimeout(() => {
            setFinishLoad(true)
        }, 2000)
    }, [])

  return (
    <>
    {!finishLoad 
    ?
    <div className='loading-container'>
        <div className='loader'></div>
        <div className='loading-sentences'>
          <p>  {loadingSentences[currentSentence]} </p>
        </div>
    </div>
    :
    <FullQuiz quesWtions={questions} setQuestions={setQuestions} />
    }
    </>

  )
}

export default Loading;