import React from 'react'
import "./style.css"
import Navbar from "../Navbar";

export default function Header(props) {
  const { currentPage, setCurrentPage } = props;

  return (
    <div className="header">
      <h1>K-pop Trivia blog header</h1>
      <div className="navbar">
				<Navbar
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				></Navbar>
			</div>
    </div>
  )
}
