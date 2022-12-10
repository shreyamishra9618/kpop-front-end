import React, { useState } from 'react';
import QuestionSet from '../../components/QuestionSet';
import "./style.css"


export default function CreatePost() {

    // *** Quiz data to be stored
    const [keyword, setKeyword] = useState('')
    const [triviaTitle, setTriviaTitle] = useState('')
    const [questionSetArray, setQuestionSetArray] = useState([
        { 
            questionText: '', 
            imageUrl:'',
            correctIndex : '',
			answerOptions: [],
        }

    ])
    // *********

    const [imageCloudinaryData, setImageCloudinaryData] = useState('');
    const [currentQIdx, setCurrentQIdx] = useState(0);
    const [errMsg, setErrMsg] = useState('')

    const handleQuizFormSubmit = e => {
        e.preventDefault();
        console.log('handleQuizSubmit');
        // check required inputs
        if (!keyword) {
            setErrMsg('Please type in a k-pop star title');
            return;
        }
        if (!triviaTitle) {
            setErrMsg('Please enter a title for your Trivia Quiz');
            return;
        }

        // check if all of inputs are inserted
        const missingQuestion = questionSetArray.filter(q => !q.questionText ||  q.answerOptions.length < 4 ||  q.answerOptions.includes('') || !q.correctIndex )
        if ( missingQuestion.length  ) {
            setErrMsg('There is a missing input. Please fill out all inputs');
            return;
        }
        setErrMsg(''); 
        console.log('*** Quizset created!!!');
        console.log(questionSetArray)
    }   

    const handleQuestionSetChange = (e) => {
        let newQuestionSetArray = [...questionSetArray];
        const currentAnsArr = newQuestionSetArray[currentQIdx]['answerOptions'];
        switch ( e.target.name ) {
            case 'a1' :
                currentAnsArr[0] = e.target.value;
                break;
            case 'a2' :
                currentAnsArr[1] = e.target.value;
                break;
            case 'a3' :
                currentAnsArr[2] = e.target.value;
                break;
            case 'a4' :
                currentAnsArr[3] = e.target.value;
                break;
            default:
                newQuestionSetArray[currentQIdx][e.target.name] = e.target.value;
        } 
        setQuestionSetArray(newQuestionSetArray);
        setErrMsg('');
    }

    const handleImageSrc = (img_public_id) => {
        let newQuestionSetArray = [...questionSetArray];
        newQuestionSetArray[currentQIdx]['imageUrl'] = `https://res.cloudinary.com/digyae86x/image/upload/v1670654642/${img_public_id}`
        setQuestionSetArray(newQuestionSetArray);      
    } 

    const deleteImageSrc = () => {
        let newQuestionSetArray = [...questionSetArray];
        newQuestionSetArray[currentQIdx]['imageUrl'] = ''
        setQuestionSetArray(newQuestionSetArray);      
    } 

    const addQuestion = () => {
        setQuestionSetArray([...questionSetArray, { 
            questionText: '', 
            imageUrl:'',
            correctIndex : '',
			answerOptions: [],
        }])
     }

     let removeQuestion = () => {
        let newQuestionSetArray= [...questionSetArray];
        newQuestionSetArray.splice(currentQIdx, 1);
        setQuestionSetArray(newQuestionSetArray);
        setCurrentQIdx(currentQIdx-1);
        setErrMsg('');
    }
    
    const handleQuizNav = (newIdx) => {
        const curQ = questionSetArray[currentQIdx];
        if ( !curQ.questionText ||
            curQ.answerOptions.length < 4 ||  
            curQ.answerOptions.includes('') || 
            !curQ.correctIndex ||
            curQ.imageUrl === ''
            ) {
            setErrMsg('There is a missing input. Please fill out all inputs');
            return;
        }
        if ( newIdx < 0 ) return;
        if ( newIdx === questionSetArray.length ) {
            addQuestion();
        }
        setCurrentQIdx(newIdx);
        setErrMsg('');
        setImageCloudinaryData('');
    }
    return (
        <div className="createpost">
            <div className="create-container">
            <h2>Create a Trivia Quiz!</h2>
            <form>
                <section className='inputline key'>
                    <label>Keyword:</label>
                    <input type="text" name="keyword" id="keyword" className="txtInput" placeholder='Enter a kpop star' value={keyword} onChange={e=>setKeyword(e.target.value)} />
                    <span>(Group name, artist name)</span>
                </section>

                <div className="trivia-input-box">  
                    <section className='inputline title'>
                        <label>Trivia Quiz Title:</label>
                        <input type="text" id="title" name="title"  className="txtInput" value={triviaTitle} onChange={e=>setTriviaTitle(e.target.value)}/>
                    </section>

                        <QuestionSet 
                            currentQIdx={currentQIdx} 
                            item = {questionSetArray[currentQIdx]}
                            handleQuestionSetChange={handleQuestionSetChange}
                            removeQuestion={removeQuestion}
                            handleImageSrc={handleImageSrc}
                            deleteImageSrc={deleteImageSrc}
                            imageCloudinaryData={imageCloudinaryData}
                            setImageCloudinaryData={setImageCloudinaryData}
                            />

                    <div className="quiz-nav">
                        <button type='button' 
                            className={currentQIdx>0 ? 'prev':'prev inactive'} 
                            onClick={()=>handleQuizNav(currentQIdx-1)}>Prev</button> 
                            <span>Total Question: {questionSetArray.length} (maximum 10)</span>
                        {currentQIdx<10 && 
                            <button type='button' 
                                    className='next'
                                    onClick={()=>handleQuizNav(currentQIdx+1)}>{currentQIdx===(questionSetArray.length-1)?'Add more':'Next'}</button> }
                    </div>

                    <div className="button-section">
                    <p className="errmrg">{errMsg}</p>
                        <button className="button submit" type="submit" onClick={handleQuizFormSubmit}>Create a Trivia Quiz!</button>
                        
                    </div>
                    
                </div>

            </form>

            </div>
        </div>    
    )
}

