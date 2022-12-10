import React, { useState } from 'react';
import QuestionSet from '../../components/QuestionSet';
// import CloudinaryUploadWidget from "../../components/CloudinaryUploadWidget";
import "./style.css"


export default function CreatePost() {

    const [keyword, setKeyword] = useState('')
    const [triviaTitle, setTriviaTitle] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [currentQIdx, setCurrentQIdx] = useState(0);
    const [questionSet, setQuestionSet] = useState([
        { 
            questionText: '', 
            imageUrl:'',
            correctIndex : '',
			answerOptions: [],
        }

    ])

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
        const missingQuestion = questionSet.filter(q => !q.questionText ||  q.answerOptions.length < 4 ||  q.answerOptions.includes('') || !q.correctIndex )
        if ( missingQuestion.length  ) {
            setErrMsg('There is a missing input. Please fill out all inputs');
            return;
        }
        setErrMsg(''); 
        console.log('*** Quizset created!!!');
        console.log(questionSet)
    }   

    const handleQuestionSetChange = (i, e) => {
        let newQuestionSet = [...questionSet];
        switch ( e.target.name ) {
            case 'a1' :
                newQuestionSet[i]['answerOptions'][0] = e.target.value;
                break;
            case 'a2' :
                newQuestionSet[i]['answerOptions'][1] = e.target.value;
                break;
            case 'a3' :
                newQuestionSet[i]['answerOptions'][2] = e.target.value;
                break;
            case 'a4' :
                newQuestionSet[i]['answerOptions'][3] = e.target.value;
                break;
            default:
                newQuestionSet[i][e.target.name] = e.target.value;
        } 
        setQuestionSet(newQuestionSet);
    }

    const addQuestion = () => {
        setQuestionSet([...questionSet, { 
            questionText: '', 
            correctIndex : '',
			answerOptions: [],
        }])
     }

     let removeQuestion = (i) => {
        let newQuestionSet= [...questionSet];
        newQuestionSet.splice(i, 1);
        setQuestionSet(newQuestionSet)
    }
    
    const handleQuizNav = (newIdx) => {

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
                            handleQuestionSetChange={handleQuestionSetChange}
                            removeQuestion={removeQuestion}
                            />

                    <div class="quiz-nav">
                        {currentQIdx>0 && <a href="#" onClick={()=>handleQuizNav(currentQIdx-1)}>Prev</a> }
                        {currentQIdx<10 && <a href="#" onClick={()=>handleQuizNav(currentQIdx+1)}>Next</a> }
                    </div>

                    <div className="button-section">
                        {/* {questionSet.length<10 ? (
                            <button className="button add" type="button" onClick={() => addQuestion()}>+ Add more question</button> 
                        ):(
                            <p>Maxium 10 questions</p>
                        )} */}
                        <button className="button submit" type="submit" onClick={handleQuizFormSubmit}>Create a Trivia Quiz!</button>
                        <p className="errmrg">{errMsg}</p>
                    </div>
                    
                </div>

            </form>

            </div>
        </div>    
    )
}

