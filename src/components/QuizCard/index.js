import React from 'react'
import { Link } from "react-router-dom";
import "../QuizCard/style.css"

export default function QuizCard({ info }) {
    const { id, username, title, numberofLike, category } = info;
    return (
        <div className='quiz-container'>
            <div>
                <img src={`images/${id}.jpg`} alt="" />
            </div>
            <div className="quiz-card-info">
                <span >{category}</span>
                <h2>{title}</h2>
                <p> {numberofLike} Likes</p>
                <h4>created by {username}</h4>
                <button>Take Quiz</button>
            </div>
            <Link to="/quiz/:id" />
        </div>
    );
}