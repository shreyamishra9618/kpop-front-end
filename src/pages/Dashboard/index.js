import React from 'react'
import '../Dashboard/style.css';
import DashboardCard from '../../components/DashboardCard';
import { items } from "../../data"

export default function Dashboard() {
  // silvia - need data - fetch by userID
  return (
    <div className='dashboard'>
      <div className='mainpage'>
        <div className='dash-options'>
          <button>My quizes</button>
          <button>My blogs</button>
        </div>

        <li className='quiz-card'>
        {items.map(item => (
          <DashboardCard key={item.id} info={item} />
        ))}
        </li>
      </div>
    </div>
  );
}