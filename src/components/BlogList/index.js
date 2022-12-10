import React,{useState,useEffect} from 'react'
import API from '../../utils/API'
import DashboardCard from '../DashboardCard'

export default function BlogList(props) {
    const [newItem, setNewItem] = useState("")
    const [newItemDesc, setNewitemDesc] = useState("")
    const [picture, setpicture] = useState("")
    useEffect(()=>{
        API.getUserTodos(props.userId).then(data=>{
            console.log(data)
            // setpicture(data.Todos)
        })
    },[props.userId])

    const handleFormSubmit = e=>{
        e.preventDefault();
        const newTask = {
            description: newItemDesc,
            picture: picture,
            user_id: newItem
        }
        setNewItem("")
        setNewitemDesc("")
       API.createTodo(newTask,props.token).then(newTodoData=>{
        API.getUserTodos(props.userId).then(data=>{
            setpicture(data.Todos)
        })
       })
    }

    const deleteTask = id=>{
       API.deleteTodo(id,props.token).then(del=>{
        API.getUserTodos(props.userId).then(data=>{
            setpicture(data.Todos)
        })
       })
    }
    const editTask = (id,newTask)=>{
        API.editTodo(newTask,id,props.token).then(updateData=>{
            API.getUserTodos(props.userId).then(data=>{
                setpicture(data.Todos)
            })
        })
    }
  return (
    <div className="BlogList">
        <form onSubmit={handleFormSubmit}>
            <input name="newItem" placeholder="new item!" value={newItem} onChange={e=>setNewItem(e.target.value)}/>
            <input name="newItemDesc" placeholder="Blog" value={newItemDesc} onChange={e=>setNewItem(e.target.value)}/>
            <button>Add to list!</button>
        </form>
        <ul>
            {picture.map((item)=><DashboardCard 
            key={item.id} 
            id={item.id} 
            description={item.description} 
            picture={item.picture} 
            user_id={item.user_id}
          
            deleteTask={deleteTask} 
            editTask={editTask} 
           />)}
        </ul>
    </div>
  )
}
