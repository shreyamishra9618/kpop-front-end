import React,{useState,useEffect} from 'react'
import '../Dashboard/style.css';
import DashboardCard from '../../components/DashboardCard';
// import { items } from "../../data"
// Start of Modification by Shreya
import API from '../../utils/API'

export default function Dashboard(props) {
  // const [newItem, setNewItem] = useState("")
  // const [newItemPriority, setNewItemPriority] = useState("")
  const [tasks, setTasks] = useState([
     
  ])
  // useEffect(()=>{
  //   fetch("http://localhost:3001/api/blogs").then(res=>res.json().then(data=>{setTasks(data)}))
  // },[])
  // console.log(tasks)

  useEffect(()=>{
      API.getAllBlogs().then(data=>{
          console.log(data)
          setTasks(data)
      })
  },[props.userId])

//   const handleFormSubmit = e=>{
//       e.preventDefault();
//       const newTask = {
//           task:newItem,
//           priority:newItemPriority,
//           isComplete:false
//       }
//       setNewItem("")
//       setNewItemPriority("med")
//      API.createTodo(newTask,props.token).then(newTodoData=>{
//       API.getUserTodos(props.userId).then(data=>{
//           setTasks(data.Todos)
//       })
//      })
//   }

  
return (
  <div className='dashboard'>
       <div className='mainpage'>
          <div className='dash-options'>
           <button>My quizes</button>
            <button>My blogs</button>
         </div>
  
        <li className='blog-card'>
         {/* {items.map(item => (
             <DashboardCard key={item.id} info={item} />
          ))} */}
           <ul>
            {tasks.map((item)=><DashboardCard 
            key={item.id} 
            id={item.id} 
            description={item.description} 
            picture={item.picture} 
            title={item.title}
            username={item.username}
          
            // deleteTask={deleteTask} 
            // editTask={editTask} 
            // isComplete={item.isComplete}
            />)}
        </ul>
          </li>
        </div>
    </div>
)
}


// export default function Dashboard() {
//   // silvia - need data - fetch by userID
//   return (
//     <div className='dashboard'>
//       <div className='mainpage'>
//         <div className='dash-options'>
//           <button>My quizes</button>
//           <button>My blogs</button>
//         </div>

//         <li className='quiz-card'>
//         {items.map(item => (
//           <DashboardCard key={item.id} info={item} />
//         ))}
//         </li>
//       </div>
//     </div>
//   );
// }