
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "../QuizCard/style.css"

export default function QuizCard(info1) {
    console.log(info1.picture)
    console.log(info1.username)

    return (
        <div className='quiz-container'>

            <Link to="/triviaquiz/1">
                <div>

                    <div className="quiz-card-info">
                        <h2 >{info1.title}</h2>
                        <img src={info1.picture} alt="quiz image" />
                        <h4>{info1.like} Likes</h4>
                        <h4>Created BY:{info1.username}</h4>
                        <h4>User Id no: {info1.user_id} </h4>
                    </div>
                </div>
            </Link>
        </div>
    );
}