import React, { useState, useEffect } from 'react'
import "./style.css"
import API from '../../utils/API'

export default function Mypage({userId}) {

const [myPicture, setMyPicture] = useState();
const [myQuiz, setMyQuiz] = useState();
const [myBlog, setMyBlog] = useState();
const [myUsername, setMyUsername] = useState();
const [myEmail, setMyEmail] = useState();

useEffect(() => {
  if (userId) {
      API.getUser(userId).then(data => {
        console.log("All user information receieved!")
      console.log(data)
        setMyPicture(data.picture);
        setMyEmail(data.email);
        setMyUsername(data.username);
        setMyQuiz(data.quizzes);
        setMyBlog(data.blogs)
      })
    } else {
      console.log('no userId token')
    }
  }, [])

  return (
    <div className='mypage'>
        <div className='mypage_container'>
            <h2>My Page</h2>
            <div className="logininfobox">
              <h3>Login Information</h3>
                <ul>
                  <li><img src={myPicture} alt="my picture"/></li>
                  <li>{myUsername}</li>
                  <li>{myEmail}</li>
                </ul>
            </div>
            <div className="myquizbox">
              <h3>My KPOP Trivia Quiz</h3>
              {/* {myQuiz.length} */}
            </div>
            <div className="myblogbox">
              <h3>My KPOP Blog</h3>
              {/* {myBlog.length} */}
            </div>
        </div>
    </div>
  )
}


