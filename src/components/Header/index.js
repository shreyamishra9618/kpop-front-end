import React from 'react'
import "./style.css"
import Navbar from "../Navbar";
import {Link,useNavigate} from 'react-router-dom'

export default function Header(props) {
  const { currentPage, setCurrentPage } = props;
  const navigate = useNavigate()
  const logoutFunc = ()=>{
    props.handleLogout()
    navigate("/login")
  }

  return (
    <div className="header">
      <h1>K-pop Trivia Fever</h1>
      {/* <Link to ="/">Homepage</Link> */}
        {props.isLoggedIn?<Link to ="/dashboard">User Account</Link>:null}
        {props.isLoggedIn?<button onClick={logoutFunc}>Logout</button>:<Link to="/login">login</Link>}
      <div className="navbar">
				<Navbar
					currentPage={props.currentPage}
					setCurrentPage={props.setCurrentPage}
				></Navbar>
    
			</div>
    </div>
  )
}
