import React from 'react';
import { Link } from "react-router-dom"
import '../Navbar/style.css';

function Navbar() {

  return (
    <nav className="navbarPage">
      <ul>
        <li className={currentPage === 'Home' ? 'nav-item active' : 'nav-item'} >
          <Link to="/"  onClick={() => handleLinkClick('Home')}>Home</Link>
        </li>
        <li className={currentPage === 'Dashboard' ? 'nav-item active' : 'nav-item'} >
          <Link to="/dashboard"  onClick={() => handleLinkClick('Dashboard')}> My Dashboard</Link>
        </li>
        <li className={currentPage === 'Wiki' ? 'nav-item active' : 'nav-item'} >
          <Link to="/wiki"> Kpop Wiki</Link>
        </li>
        <li className="nav-item" >
          <Link to="/createpost">Create a quiz</Link>
        </li>
        <li className="nav-item" >
          <Link to="/createblog">Create a blog</Link>
        </li>
        <li  className={currentPage === 'Triviaquiz' ? 'nav-item active' : 'nav-item'} >
          <Link to="/triviaquiz">Quiz</Link>
        </li>
        <li className={currentPage === 'Login' ? 'nav-item active' : 'nav-item'}>
          <Link to="/login">Login</Link>
        </li>
        </ul>
        <div>
          <form>
            <input id="searchInput" type="text" placeholder="search kpop group"/>
            <button id="searchButton">Search</button>
          </form>
          {/* <p>Popular search: xxxxx,categorys</p> */}
        </div>
    </nav>
  );
}
export default Navbar;