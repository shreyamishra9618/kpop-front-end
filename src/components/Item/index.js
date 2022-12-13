import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { items } from "../../data";
import "../Item/style.css"

export default function Item({ id }) {
  

  const { title, GroupName, MemberNames, Picture, Country, KoreanGroupName, DateGroupFormed, FandomName, Instagram, Top3Songs } = items.find(item => item.id === id);
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to="/wiki" />
      </motion.div>
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={Picture} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
          {/* Silvia - need data - group name */}
            <h2>{title}</h2>
            
          </motion.div>
          <motion.div className="content-container" animate>
            <p>{GroupName}</p>
            <p>{KoreanGroupName}</p>
            <p>{MemberNames} </p>
            <p>{Country}</p>
            <p>{DateGroupFormed}</p>
            <p>{FandomName}</p>
            <p>{Instagram}</p>
            <p>{Top3Songs}</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}