import React from 'react'
import '../Card/style.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Card({ id, title,Picture }) {
    return (
      <li className="card">
        <div className="card-content-container">
          <motion.div className="card-content" layoutId={`card-container-${id}`}>
            <motion.div
              className="card-image-container"
              layoutId={`card-image-container-${id}`}
            >

              <img className="card-image" src={`images/${id}.jpg`} alt="" />

              <img className="card-image" src={Picture} alt="" />

            </motion.div>
            <motion.div
              className="title-container"
              layoutId={`title-container-${id}`}
            >
              <h1 className='title'>{title}</h1> 
            </motion.div>
          </motion.div>
        </div>
        <Link to={id} className={`card-open-link`} />
      </li>
    );
  }
