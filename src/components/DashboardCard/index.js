import React from 'react'
import "./style.css"

export default function DashboardCard({ info }) {
    const { id, username, title, numberofLike, category } = info;
    return (
        <div className='quiz-container'>
            {/* need fetch - link to the quiz */}
                    <div>
                        <img src={`images/${id}.jpg`} alt="" />
                    </div>
                    <div className="quiz-card-info">
                        <span >{category}</span>
                        <h2>{title}</h2>
                        <h4>created by {username}</h4>
                        <p> {numberofLike} Likes</p>
                    </div>
                    <div>
                        <button>Delete</button>
                        <button>Edit</button>
                     </div>
        </div>

    );
}