import React from 'react';
import { Link } from "react-router-dom"
import '../Navbar/style.css';

function Navbar({currentPage, setCurrentPage, isLoggedIn, logoutFunc}) {

  return (
    <nav className="navbarPage">
      <ul>
        <li className={currentPage === 'Home' ? 'nav-item active' : 'nav-item'} >
          <Link to="/"  onClick={() => setCurrentPage('Home')}>Home</Link>
        </li>
        <li className={currentPage === 'Dashboard' ? 'nav-item active' : 'nav-item'} >
          <Link to="/blog"  onClick={() => setCurrentPage('Dashboard')}> Blog</Link>
        </li>
        <li className={currentPage === 'Wiki' ? 'nav-item active' : 'nav-item'} >
          <Link to="/wiki"  onClick={() => setCurrentPage('Wiki')}> Kpop Wiki</Link>
        </li>
        {isLoggedIn&&(
          <>
            <li className={currentPage === 'createpost' ? 'nav-item active' : 'nav-item'}>
            <Link to="/createpost" onClick={() => setCurrentPage('createpost')}>Create a quiz</Link>
            </li>
            <li className={currentPage === 'createblog' ? 'nav-item active' : 'nav-item'}>
            <Link to="/createblog" onClick={() => setCurrentPage('createblog')}>Create a blog</Link>
            </li>
          </>
        )}
        
        {/* <li  className={currentPage === 'Triviaquiz' ? 'nav-item active' : 'nav-item'} >
          <Link to="/triviaquiz" onClick={() => setCurrentPage('Triviaquiz')}>Quiz</Link>
        </li> */}

        
        </ul>
        {/* <div>
          <form>
            <input id="searchInput" type="text" placeholder="search kpop group"/>
            <button id="searchButton">Search</button>
          </form>
          <p>Popular search: xxxxx,categorys</p> 
        </div> */}
    </nav>
  );
}
export default Navbar;