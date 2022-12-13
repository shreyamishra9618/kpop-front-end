import React from 'react'
import '../WikiPage/style.css';
import { AnimatePresence } from "framer-motion";

import  List  from "../../components/List";
import  Item  from "../../components/Item";

import { useParams } from "react-router-dom"

export default function Wikipage() {
  let { id } = useParams();
  console.log("id is " + id);
  const imageHasLoaded = true;

  return (
    <>
    <div className='wikipage'>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
      </div>
    </>
  );
}
