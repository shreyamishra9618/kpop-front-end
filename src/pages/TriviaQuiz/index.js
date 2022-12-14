import React, { useState, useEffect } from 'react';
import {Link, useParams} from "react-router-dom";
import { motion } from "framer-motion";
import API from '../../utils/API';
import "./style.css"


const variants = {
    initial: {
        x: 200,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1
    },
    exit: {
        x: -200,
        opacity: 0
    }
}

export default function TriviaQuiz(props) {
    const { quizId } = useParams();
    console.log("quizId recieved:"+ quizId );

    const [curQIdx, setCurQIdx] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [correctMsg, setCorrectMsg] = useState('');
    const [timeoutPeriod, setTimeoutPeriod] = useState(false);

    const [quizTitle , setQuizTitle] = useState('');
    const [creatorPic , setCreatorPic] = useState('');
    const [creator , setCreator] = useState('');
    const [likeNum , setLikeNum] = useState(0);
    const [questions, setQuestions] = useState([]);

    useEffect(()=> {
        API.getOneQuiz(quizId).then(data=>{
            console.log("retrieved data about this quiz")
            console.log(data)
            setQuizTitle(data.title);
            setCreator(data.user.username);
            setCreatorPic(data.user.picture);
            setLikeNum(data.like)
            setQuestions(data.questions);

        })
    },[])


    useEffect(()=>{
        if ( correctMsg !== '') {
            const timer = setTimeout(() => {
                const nextQuestion = curQIdx + 1;
                if (nextQuestion < questions.length) {
                    setCurQIdx(nextQuestion);
                } else {
                    setShowScore(true);
                }
                setCorrectMsg('')
                setTimeoutPeriod(false);
              }, 1000);
              return () => clearTimeout(timer);
        } else return;
    },[correctMsg]);

    const handleAnswerButtonClick = (event, index) => {
        const {target} = event;

        if (!timeoutPeriod){
            const currentQesObj = questions[curQIdx];
            console.log(currentQesObj);
            const isCorrect = (index==currentQesObj.correct_ans)?true:false;

            if (isCorrect) {
                setScore(score + 1);
                setCorrectMsg('Correct!!!')
                target.className = 'right';
            }else {
                let correctAnsTxt = '';
                switch(currentQesObj.correct_ans) {
                    case '0':
                        correctAnsTxt = currentQesObj.option1; break; 
                    case '1':
                        correctAnsTxt = currentQesObj.option2; break; 
                    case '2':
                        correctAnsTxt = currentQesObj.option3; break; 
                    case '3':
                        correctAnsTxt = currentQesObj.option2; break; 
                    default: break;
                }
                setCorrectMsg('Wrong! Correct answer: '+correctAnsTxt);
                target.className = 'wrong';
            }

            setTimeoutPeriod(true);

        } else {
            return;
        }
    };

    const handleLikeBtn = (event) => {
        console.log("like clicked");
        const newItem = {
            like: parseInt(likeNum)+1
        }
        API.addLike(newItem, quizId).then(updateData=>{
            API.getOneQuiz(quizId).then(data=>{
                setLikeNum(data.like);
            })
        })
    }

  return (
    <div className="trivia-quiz">
        <div className="quiz-container">
            <section className='quiz-header'>
                <h2>{quizTitle}</h2>
                <div className="details">
                    <div className="user">
                        <img src={creatorPic?creatorPic:"/images/temp_profile.jpg"} alt="profile"/> 
                        <strong className="username">{creator}</strong></div>
                        <span className='like'><img src="/images/like.png" />{likeNum}</span>
                </div>
            </section>
            <main className='quiz-body'>
                {showScore ? (
                    <motion.div 
                    variants={variants}
                    animate='animate'
                    initial='initial'
                    exit='exit'
                    alt='slides'
                    key={curQIdx+1}
                    >
                    <div className='score-section'>
                        <section className='score-image'>
                            {questions.map((question, index) => (
                                <img src={question.picture} alt='questionimg' key={index}/>
                            ))}
                        </section>
                        <p className='score'>You scored {score}  out of {questions.length}</p>
                        <section className='score-etc'>
                            {!props.isLoggedIn&&<Link to="/login"><button >Login to create your won!</button></Link>}
                            <button onClick={e=>handleLikeBtn(e)}><img src="/images/like.png" /> Like!!</button>  
                         </section>
                    </div>
                    </motion.div>
                ) : (
                <>
                <div className="question-count">
                        <span>Question {curQIdx+1} / {questions.length} </span>
                </div>

                <motion.div 
                    variants={variants}
                    animate='animate'
                    initial='initial'
                    exit='exit'
                    alt='slides'
                    key={curQIdx}
                    >
                {questions.map((item, i)=>(
                    <div className={i===curQIdx?'eachQ curQ':'eachQ'} key={i}>
                        <section className='question-section'>
                            <div className="question-img"><img src={item.picture} alt="quizimg"/></div>
                            <div className='question-text'>{item.question_content}</div>
                        </section>
                        <section className='answer-section'>
                            <button onClick={event => handleAnswerButtonClick(event, 0)}>
                                {item.option1}
                            </button>
                            <button onClick={event => handleAnswerButtonClick(event, 1)}>
                                {item.option2}
                            </button>
                            <button onClick={event => handleAnswerButtonClick(event, 2)}>
                                {item.option3}
                            </button>
                            <button onClick={event => handleAnswerButtonClick(event, 3)}>
                                {item.option4}
                            </button> 
                        </section>
                        <section className='correct-section'>{correctMsg}</section>
                    </div>
                ))}
                </motion.div>
                </>
                )}
            </main>
        </div>
    </div>
  )
}
