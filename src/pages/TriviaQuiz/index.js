import React, { useState, useEffect } from 'react';
// import { AnimatePresence, motion } from "framer-motion";
import { motion } from "framer-motion";
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

export default function TriviaQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [correctMsg, setCorrectMsg] = useState('');
    const [timeoutPeriod, setTimeoutPeriod] = useState(false);

    const questions = [
		{
			questionText: 'Which member spent their teen years in Australia as an exchange student?',
            imageUrl: 'https://images.indianexpress.com/2022/06/BTS1200-1.jpeg',
            correctIndex : 0,
			answerOptions: ['Jin', 'V','Suga', 'J-Hope'],
		},
		{
			questionText: 'What does BTS stand for?',
            imageUrl: 'https://pyxis.nymag.com/v1/imgs/812/a5d/694b070dca8db47fc9338f3c65fbe3d0c6-7-bts.rsquare.w330.jpg',
			correctIndex : 2,
            answerOptions: ['Behind the Scene', 'Broccoli Tomato Sausage', 'Bangtan Sonyeondan', 'Burn The Stage'],
		},
		{
			questionText: 'What\'s the name of their new single?',
            imageUrl: 'https://resize.indiatvnews.com/en/resize/newbucket/730_-/2022/10/bts-7-1666156252.jpg',
            correctIndex : 0,
			answerOptions: ['Butter', 'Margarine', 'Flora', 'Lurpak'],
		},
		{
			questionText: 'How many members does BTS have?',
            imageUrl: 'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2020/12/10/5bc61682-3523-11eb-8d89-a7d6b31c4b8a_image_hires_164759.jpeg?itok=HiuJ1k21&v=1607590085',
			correctIndex : 2,
            answerOptions: ['6', '5', '7', '4'],
		},
	];


    useEffect(() => {
        if ( correctMsg !== '') {
        const timer = setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
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

        if ( !timeoutPeriod ) {
            const currentQesObj = questions[currentQuestion];
            const isCorrect = (index===currentQesObj.correctIndex)?true:false

            if (isCorrect) {
                setScore(score + 1);
                setCorrectMsg('Correct!!!')
                target.className = 'right';
            } else{
                setCorrectMsg('Wrong! Correct answer: '+currentQesObj.answerOptions[currentQesObj.correctIndex]);
                target.className = 'wrong';
            }

            setTimeoutPeriod(true);
        } else {
            return;
        }
    };

  return (
    <div className="trivia-quiz">
        <div className="quiz-container">
            <section className='quiz-header'>
                <h2>How well do you know BTS?</h2>
                <div className="details">
                    <div className="user">
                        <img src="./images/temp_profile.jpg" alt="profile"/> 
                        <strong className="username">JennyUser</strong></div>
                </div>
            </section>
            <main className='quiz-body'>
                {showScore ? (
                    <div className='score-section'>
                        <section className='score-image'>
                            {questions.map((question, index) => (
                                <img src={question.imageUrl} alt='questionimg' key={index}/>
                            ))}
                        </section>
                        <p className='score'>You scored {score}  out of {questions.length}</p>
                        <section className='score-etc'>
                            <button >Login / Sign in to sore your score</button>
                            <button>Like!!</button>  
                            <button>Share this quiz</button>
                         </section>
                    </div>
                ) : (
                <>
                <motion.div 
                    variants={variants}
                    animate='animate'
                    initial='initial'
                    exit='exit'
                    alt='slides'
                    key={currentQuestion}
                    >

                <section className='question-section'>
                    <div className='question-count'>
                        <span>Question {currentQuestion+1}</span>/ {questions.length}
                    </div>
                    <div className="question-img"><img src={questions[currentQuestion].imageUrl} alt="quizimg"/></div>
                    <div className='question-text'>{questions[currentQuestion].questionText}</div>
                </section>
                <section className='answer-section'>
                    {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                        // <button onClick={() => handleAnswerButtonClick(index===questions[currentQuestion].correctIndex?true:false)} key={index}>{answerOption}</button>
                        <button onClick={event => handleAnswerButtonClick(event, index)} key={index}>{answerOption}</button>
                    ))}
                </section>
                <section className='correct-section'>{correctMsg}</section>
                </motion.div>
                </>
                )}
            </main>
        </div>
    </div>
  )
}
