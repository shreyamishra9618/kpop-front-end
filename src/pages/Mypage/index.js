import React, { useState, useEffect } from 'react'
import "./style.css"
import API from '../../utils/API'
import MypageQuiz from '../../components/MypageQuiz';

export default function Mypage() {

const [myPicture, setMyPicture] = useState();
const [myQuiz, setMyQuiz] = useState([]);
const [myBlog, setMyBlog] = useState([]);
const [myUsername, setMyUsername] = useState();
const [myEmail, setMyEmail] = useState();
const [token, setToken] = useState('')

useEffect(()=>{
  const storedToken = localStorage.getItem("token")
  if (storedToken){
    console.log(storedToken)
    API.getUserFromToken(storedToken).then(data=>{
      
      if(data.user) {
        console.log("** got user data for mypage")
        console.log(data.user.id)

        API.getUser(data.user.id).then(data => {
            console.log("All user information receieved!")
            console.log(data)
            setMyPicture(data.picture);
            setMyEmail(data.email);
            setMyUsername(data.username);
            setMyQuiz(data.quizzes);
            setMyBlog(data.blogs)
            console.log(data.quizzes);
            setMyQuiz(data.quizzes);
            setToken(storedToken);
        })

      }
    })
  } else {
    console.log('no stored token')
  }
},[])

const deleteQuiz = quiz_id => {
  console.log("delete QUIZ requested");
  console.log(quiz_id);
  API.deleteQuiz(quiz_id,token).then(del=>{
      console.log('deleted');
      if (del) {
        const storedToken = localStorage.getItem("token")
        API.getUserFromToken(storedToken).then(data=>{
      
          if(data.user) {
            console.log("** got user data for mypage")
            console.log(data.user.id)
    
            API.getUser(data.user.id).then(data => {

                setMyQuiz(data.quizzes);

            })
    
          }
        })
      }
  })
}

  return (
    <div className='mypage'>
        <div className='mypage_container'>
            <h2>My Page</h2>
            <div className="logininfobox">
              <h3>Login Information</h3>
                <div className="infocontent">
                  <img src={myPicture} alt="my picture"/>
                  <ul>

                    <li>{myUsername}</li>
                    <li>{myEmail}</li>
                  </ul>
                </div>
            </div>
            <div className="myquizbox mypost">
              <h3>My KPOP Trivia Quiz</h3>
              <ul>
              {myQuiz.map((item, index) => (
                <MypageQuiz 
                  key={index}
                  quiz_id={item.quiz_id} 
                  title={item.title} 
                  deleteQuiz = {deleteQuiz}
                />
                ))}  
              </ul>
            </div>
            <div className="myblogbox mypost">
              <h3>My KPOP Blog</h3>
              <ul>
              {myBlog.map((item, index) => (
                <li key={index}>
                   {item.title}
                </li>
                ))} 
              </ul> 
            </div>
        </div>
    </div>
  )
}


