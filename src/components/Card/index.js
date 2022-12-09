// // import React, { useState } from "react";
// import React from 'react'
// import '../Card/style.css';
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// export default function Card({ id, username, title, numberofLike, category, theme }) {
//     return (
//       <li className={`card ${theme}`}>
//         <div className="card-content-container">
//           <motion.div className="card-content" layoutId={`card-container-${id}`}>
//             <motion.div
//               className="card-image-container"
//               layoutId={`card-image-container-${id}`}
//             >
//               <img className="card-image" src={`images/${id}.jpg`} alt="" />
//             </motion.div>
//             <motion.div
//               className="title-container"
//               layoutId={`title-container-${id}`}
//             >
//               <span className="category">{category}</span>
//               <h2>{title}</h2>
//               <div> Likes {numberofLike}</div>
//               <h4>created by {username}</h4>
//             </motion.div>
//           </motion.div>
//         </div>
//         <Link to={id} className={`card-open-link`} />
//       </li>
//     );
//   }


import React from 'react'
import '../Card/style.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

{/* Silvia- comment- need data - id */}
export default function Card({ id, title }) {
    return (
      <li className="card">
        <div className="card-content-container">
          <motion.div className="card-content" layoutId={`card-container-${id}`}>
            <motion.div
              className="card-image-container"
              layoutId={`card-image-container-${id}`}
            >
{/* Silvia- comment- need data - id - feel free to change title/id to a better var name*/}

              <img className="card-image" src={`images/${id}.jpg`} alt="" />
            </motion.div>
            <motion.div
              className="title-container"
              layoutId={`title-container-${id}`}
            >
              {/* Silvia- comment- data - group name (title)- feel free to change title to a better var name*/}
              <h1 className='title'>{title}</h1> 
            </motion.div>
          </motion.div>
        </div>
        <Link to={id} className={`card-open-link`} />
      </li>
    );
  }
