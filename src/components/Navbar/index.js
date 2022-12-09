import React from 'react';
import { Link } from "react-router-dom"
import '../Navbar/style.css';

function Navbar() {

  return (
    <nav className="navbarPage">
      <lo className="nav-item">
          <Link to="/">Home</Link>
        </lo>
        <lo className="nav-item" >
          <Link to="/dashboard"> My Dashboard</Link>
        </lo>
        <lo className="nav-item" >
          <Link to="/wiki"> Kpop Wiki</Link>
        </lo>
        <lo className="nav-item" >
          <Link to="/createpost">Create a quiz</Link>
        </lo>
        <lo className="nav-item" >
          <Link to="/createblog">Create a blog</Link>
        </lo>
        <lo className="nav-item" >
          <Link to="/triviaquiz">Quiz</Link>
        </lo>
        <lo className="nav-item">
          <Link to="/login">Login</Link>
        </lo>

        <div>
        <form>
          <input id="searchInput" type="text" placeholder="search kpop group"/>
          <button id="searchButton">Search</button>
        </form>
        <p>Popular search: xxxxx,categorys
        </p>
    </div>
    </nav>
  );
}
export default Navbar;