
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "../QuizCard/style.css"

export default function QuizCard(info1) {
    console.log(info1.picture)
    console.log(info1.username)
    const quizURL = `/triviaquiz/${info1.quiz_id}`;
    return (
    <li className='quiz-container'>
        <Link to={quizURL}>

        <img src={info1.picture} alt="quiz image" className='quizimage'/>
        <section className="detail">
            <h2 className="cardtitle">{info1.title}</h2>
            <p>
            <span className='likes'><img src="/images/like.png" /><strong> {info1.like} </strong></span>
            <span className='created'>Created by: <strong>{info1.username}</strong></span>
            </p>
        </section>
        {/* <h4>User Id no: {info1.user_id} </h4> */}

        </Link>
    </li>
    );
}