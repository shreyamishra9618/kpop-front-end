// import React, { useState } from "react";
import React from 'react'
import '../Card/style.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


// function Card({info}) {
//     const {title, description, userId} = info;
	
// return (
// 	<div className="card">
// 		<img
// 			variant="top"
// 			src={require(`../../assets/images/${image}`)}
// 			className="card-image"
// 		/>
// 			<div className="card-content">
// 				<h4 className="card-title">{title}</h4>
//                 <h6 className="card-userId">{userId}</h6>
//                 <h4 className="card-description">{description}</h4>              
// 			</div>
// 	</div>
// );
// }
// export default Card;

export default function Card({ id, username, title, numberofLike, category, theme }) {
    return (
      <li className={`card ${theme}`}>
        <div className="card-content-container">
          <motion.div className="card-content" layoutId={`card-container-${id}`}>
            <motion.div
              className="card-image-container"
              layoutId={`card-image-container-${id}`}
            >
              <img className="card-image" src={`images/${id}.jpg`} alt="" />
            </motion.div>
            <motion.div
              className="title-container"
              layoutId={`title-container-${id}`}
            >
              <span className="category">{category}</span>
              <h2>{title}</h2>
              <div> Likes {numberofLike}</div>
              <h4>created by {username}</h4>
            </motion.div>
          </motion.div>
        </div>
        <Link to={id} className={`card-open-link`} />
      </li>
    );
  }
