import React,{useState,useEffect} from 'react'
import '../Homepage/style.css';
import QuizCard from '../../components/QuizCard';
import API from '../../utils/API';


// Silvia -need to fetch data (instead of use items)
export default function Homepage(props) {
  const [quiz, setQuiz] = useState([
     
  ])
  useEffect(()=>{
    API.getAllQuiz().then(data1=>{
        console.log(data1)
        setQuiz(data1)
        // console.log(data1.questions[0].picture)
    })
},[props.userId])

  return (
    <div className='homepage'>
    <div className='mainpage'>
        <li className='quiz-card'>
        <ul>
            {quiz.map((item)=><QuizCard 
            key={item.quiz_id} 
            quiz_id={item.quiz_id} 
            title={item.title} 
            like={item.like} 
            user_id={item.user_id}
            picture={item.questions[0].picture}
            username={item.user.username}
       
            />)}
        </ul>
        </li>
        </div>
      <div className='userRanking'>
        <h4>Top Score Users</h4>
      </div>
      </div>
  );
}