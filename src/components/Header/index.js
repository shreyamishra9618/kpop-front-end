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
      <h1 ><img src="/images/kpop_header.png" alt="kpop trivia fever" /></h1>
      {/* <Link to ="/">Homepage</Link> */}

      <div className="navbar">
        <div className="userinfo">
          <ul>
            <li className={currentPage === 'Mypage' ? 'nav-item active' : 'nav-item'}>{props.isLoggedIn?<Link to ="/mypage" onClick={() => setCurrentPage('Mypage')} >My Page</Link>:null}</li>
            <li>{props.isLoggedIn?<button onClick={logoutFunc}>Logout</button>:<Link to="/login"><button>Login</button></Link>}</li>
          </ul>
        
        
        </div>
				<Navbar
					currentPage={props.currentPage}
					setCurrentPage={props.setCurrentPage}
          isLoggedIn = {props.isLoggedIn}
          logoutFunc = {logoutFunc}
				></Navbar>
    
			</div>
    </div>
  )
}
