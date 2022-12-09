import React from 'react'
import '../Homepage/style.css';
import QuizCard from '../../components/QuizCard';
import {items} from "../../data"

// Silvia -need to fetch data (instead of use items)
export default function Homepage() {

  return (
    <div className='homepage'>
    <div className='mainpage'>
      <li className='quiz-card'>
        {items.map(item => (
          <QuizCard key={item.id} info={item} />
        ))}
        </li>
        </div>
      <div className='userRanking'>
        <h4>Top Score Users</h4>
      </div>
      </div>
  );
}

