
import React from 'react'
import { Link } from "react-router-dom";

export default function MypageQuiz({key, quiz_id, title, deleteQuiz}) {

    const quizURL = `/triviaquiz/${quiz_id}`;
    return (
        <li key={key}>
            <Link to={quizURL} >
            {title}
            </Link>
            <button onClick={()=>deleteQuiz(quiz_id)} >delete</button>
        </li>
    );
}