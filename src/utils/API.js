// in dev mode
const URL_PREFIX= "http://localhost:3001"
// in prod mode
// const URL_PREFIX= "https://something.herokuapp.com"

const  API = {
    login: (userObj)=>{
        return fetch(`${URL_PREFIX}/api/users/login`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },
    signup: (userObj)=>{
        return fetch(`${URL_PREFIX}/api/users`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },
    getUser:(userId)=>{
        return fetch(`${URL_PREFIX}/api/users/${userId}`).then(res=>res.json())

    },
    getUserFromToken:(token)=>{
        return fetch(`${URL_PREFIX}/api/users/getuserfromtoken`,{
            method:"GET",
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    createBlog:(todoObj,token)=>{
        return fetch(`${URL_PREFIX}/api/todos`,{
            method:"POST",
            body:JSON.stringify(todoObj),
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    deleteBlog:(todoId,token)=>{
        return fetch(`${URL_PREFIX}/api/todos/${todoId}`,{
            method:"DELETE",
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    editBlog:(todoObj,todoId,token)=>{
        return fetch(`${URL_PREFIX}/api/todos/${todoId}`,{
            method:"PUT",
            body:JSON.stringify(todoObj),
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    createQuiz:(todoObj,token)=>{
        return fetch(`${URL_PREFIX}/api/todos`,{
            method:"POST",
            body:JSON.stringify(todoObj),
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    deleteQuiz:(todoId,token)=>{
        return fetch(`${URL_PREFIX}/api/todos/${todoId}`,{
            method:"DELETE",
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    editQuiz:(todoObj,todoId,token)=>{
        return fetch(`${URL_PREFIX}/api/todos/${todoId}`,{
            method:"PUT",
            body:JSON.stringify(todoObj),
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
}
export default API