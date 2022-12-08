import React from 'react'
import "./style.css"
import { AnimatePresence } from "framer-motion";

import  List  from "../../components/List";
import  Item  from "../../components/Item";

import { useParams } from "react-router-dom"


export default function Homepage() {
  let { id } = useParams();
  console.log("id is " + id);
  const imageHasLoaded = true;

  return (
    <>
    <div className='homepage'>
    <div className='mainpage'>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
      </div>
      <div className='userRanking'>
        <h3>top ranking users</h3>
      </div>
      </div>
    </>
  );
}
