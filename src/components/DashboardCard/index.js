import React from 'react'
import "./style.css"

export default function DashboardCard(info) {
    // const { id, description, picture} = info;
    return (
        <div className='blog-container'>
        
                   
                    <div className="blog-card-info">
                    <h1>{info.title}</h1>
                    <div>
                        <img src={info.picture} alt="blog_image" />
                    </div>
                        <span >{info.description}</span>
                        
                        <h4>created by {info.username}</h4>
                      
                    </div>
                    <div>
                        {/* <button>Delete</button>
                        <button>Edit</button> */}
                     </div>
        </div>

    );
}