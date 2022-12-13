// // in dev mode
// const URL_PREFIX= "http://localhost:3001"
// in prod mode
const URL_PREFIX= "https://kpop-backendprojectsm.herokuapp.com"

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
    getAllBlogs:()=>{
        return fetch(`${URL_PREFIX}/api/blogs`).then(res=>res.json())

    },
    getUserBlogs:(userId)=>{
        return fetch(`${URL_PREFIX}/api/blogs/${userId}`).then(res=>res.json())

    },
    getAllQuiz:()=>{
        return fetch(`${URL_PREFIX}/api/quiz`).then(res=>res.json())

    },
    getUserQuiz:(userId)=>{
        return fetch(`${URL_PREFIX}/api/quiz/${userId}`).then(res=>res.json())

    },
    getOneQuiz:(quizId)=>{
        return fetch(`${URL_PREFIX}/api/quiz/${quizId}`).then(res=>res.json())

    },
    getUserFromToken:(token)=>{
        return fetch(`${URL_PREFIX}/api/users/getuserfromtoken`,{
            method:"GET",
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    createBlog:(blogObj,token)=>{
        return fetch(`${URL_PREFIX}/api/blogs`,{
            method:"POST",
            body:JSON.stringify(blogObj),
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    deleteBlog:(id,token)=>{
        return fetch(`${URL_PREFIX}/api/blogs/${id}`,{
            method:"DELETE",
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    editBlog:(blogObj,id,token)=>{
        return fetch(`${URL_PREFIX}/api/blogs/${id}`,{
            method:"PUT",
            body:JSON.stringify(blogObj),
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    createQuiz:(quizObj,token)=>{
        return fetch(`${URL_PREFIX}/api/quiz`,{
            method:"POST",
            body:JSON.stringify(quizObj),
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    deleteQuiz:(quiz_id,token)=>{
        return fetch(`${URL_PREFIX}/api/quiz/${quiz_id}`,{
            method:"DELETE",
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    editQuiz:(quizObj,quiz_id,token)=>{
        return fetch(`${URL_PREFIX}/api/quiz/${quiz_id}`,{
            method:"PUT",
            body:JSON.stringify(quizObj),
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    addLike:(quizObj,quiz_id)=>{
        return fetch(`${URL_PREFIX}/api/quiz/like/${quiz_id}`,{
            method:"PUT",
            body:JSON.stringify(quizObj),
            headers:{
                "Content-Type":"application/json",
            }
        }).then(res=>res.json())
    },
    createQuestion:(questionObj,token)=>{
        return fetch(`${URL_PREFIX}/api/questions`,{
            method:"POST",
            body:JSON.stringify(questionObj),
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    deleteQuestions:(Questions_id,token)=>{
        return fetch(`${URL_PREFIX}/api/questions/${Questions_id}`,{
            method:"DELETE",
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    editQuestions:(questionObj,Questions_id,token)=>{
        return fetch(`${URL_PREFIX}/api/questions/${Questions_id}`,{
            method:"PUT",
            body:JSON.stringify(questionObj),
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
}
export default API