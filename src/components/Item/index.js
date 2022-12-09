import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { items } from "../../data";
import "../Item/style.css"

export default function Item({ id }) {
  {/* Silvia - need data - any info from API, for example: debute date, menbers, brief intro.... */}

  const { title} = items.find(item => item.id === id);

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
            <img className="card-image" src={`images/${id}.jpg`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
          {/* Silvia - need data - group name */}
            <h2>{title}</h2>
          </motion.div>
          <motion.div className="content-container" animate>
            {/* Silvia - need data - any info from API, for example: debute date,popular songs, members, brief intro.... */}
            {/* <p>{intro}</p>
            <p>{members}</p> */}
            <p>Sample info - BlackPINK IN YOUR AREA! </p>
            <p>blackpink has 4 members</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}