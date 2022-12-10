import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import TriviaQuiz from "./pages/TriviaQuiz";
import CreatePost from "./pages/CreatePost";
import CreateBlog from "./pages/CreateBlog";
import Wikipage from "./pages/WikiPage";
import Dashboard from "./pages/Dashboard";
import API from "./utils/API";


function App() {
  const [userId, setUserId] = useState(0)
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState("")

  const [currentPage, setCurrentPage] = useState('Home');
  
  useEffect(() => {
    const storedToken = localStorage.getItem("token")
    if (storedToken) {
      console.log(storedToken)
      API.getUserFromToken(storedToken).then(data => {
        if (data.user) {
          console.log(data)
          setToken(storedToken)
          setIsLoggedIn(true)
          setUserId(data.user.id)
          setUserName(data.user.username)
          setUserEmail(data.user.email)
        }
      })
    } else {
      console.log('no stored token')
    }
  }, [])

  const handleLoginSubmit = userObj => {
    API.login(userObj).then(data => {
      console.log(data);
      if (data.token) {
        setUserId(data.user.id)
        setToken(data.token)
        setIsLoggedIn(true)
        setUserEmail(data.user.email)
        localStorage.setItem("token", data.token)
      }
    })
  }
  const handleSignupSubmit = userObj => {
    API.signup(userObj).then(data => {
      console.log(data);
      if (data.token) {
        setUserId(data.user.id)
        setToken(data.token)
        setIsLoggedIn(true)
        setUserEmail(data.user.email)
        localStorage.setItem("token", data.token)
      }
    })
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserId(0);
    setToken("");
    setUserEmail("")
  }
  return (
    <div className="container">
      <Router>
        <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/wiki" element={<Wikipage />} />
          <Route path="/wiki/:id" element={<Wikipage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login
            isLoggedIn={isLoggedIn}
            handleLoginSubmit={handleLoginSubmit}
            handleSignupSubmit={handleSignupSubmit}
          />} />
          <Route path="/triviaquiz" element={<TriviaQuiz />} />
          <Route path="/createpost" element={<CreatePost 
            isLoggedIn={isLoggedIn}
            userId={userId}
            token={token}
            userEmail={userEmail}
            userName={userName}
            setIsLoggedIn={setIsLoggedIn}
            setToken={setToken}
            setUserId={setUserId}
            setUserEmail={setUserEmail}
          />}/>
          <Route path="/createblog" element={<CreateBlog isLoggedIn={isLoggedIn}
            userId={userId}
            token={token}
            userEmail={userEmail}
            userName={userName}
            setIsLoggedIn={setIsLoggedIn}
            setToken={setToken}
            setUserId={setUserId}
            setUserEmail={setUserEmail}
          />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
