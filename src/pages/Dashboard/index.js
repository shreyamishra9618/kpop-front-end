import React, { useState, useEffect } from 'react'
import '../Dashboard/style.css';
import DashboardCard from '../../components/DashboardCard';

import API from '../../utils/API'

export default function Dashboard(props) {

  const [tasks, setTasks] = useState([

  ])


  useEffect(() => {
    API.getAllBlogs().then(data => {
      console.log(data)
      setTasks(data)
    })
  }, [props.userId])

  return (
    <div className='dashboard'>
      <div className='mainpage'>
        {/* <div className='dash-options'>
          <button>My quizes</button>
          <button>My blogs</button>
        </div> */}

        <ul className='blog-card'>

            {tasks.map((item) => <DashboardCard
              key={item.id}
              id={item.id}
              description={item.description}
              picture={item.picture}
              title={item.title}
              username={item.username}


            />)}
        </ul>

      </div>
    </div>
  )
}


