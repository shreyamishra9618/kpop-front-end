import React,{useState,useEffect} from 'react'
import '../Homepage/style.css';
import QuizCard from '../../components/QuizCard';
import QuizCard2 from '../../components/QuizCard';
import {items} from "../../data"
import API from '../../utils/API'

// Silvia -need to fetch data (instead of use items)
export default function Homepage() {
//   const [quiz, setQuiz] = useState([
     
//   ])
//   useEffect(()=>{
//     API.getAllQuiz().then(data1=>{
//         console.log(data1)
//         setQuiz(data1)
//     })
// },[])

  return (
    <div className='homepage'>
    <div className='mainpage'>
      <li className='quiz-card'>
        {items.map(item => (
          <QuizCard key={item.id} info={item} />
        ))}

        </li>
        {/* <ul>
            {quiz.map((item1)=><QuizCard2 
            // key={item.id} 
            // id={item.id} 
            // description={item.description} 
            // picture={item.picture} 
            // title={item.title}
            // username={item.username}

            />)}
        </ul> */}
        </div>
      <div className='userRanking'>
        <h4>Top Score Users</h4>
      </div>
      </div>
  );
}