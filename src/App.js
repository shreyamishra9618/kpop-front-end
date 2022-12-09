import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import TriviaQuiz from "./pages/TriviaQuiz";
import CreatePost from "./pages/CreatePost";
import CreateBlog from "./pages/CreateBlog";
import Wikipage from "./pages/WikiPage";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <div className="container">
      <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} /> 
            <Route path="/wiki" element={<Wikipage />} /> 
            <Route path="/wiki/:id" element={<Wikipage />} />
            <Route path="/Login" element={<Login />}/>
            <Route path="/triviaquiz" element={<TriviaQuiz />}/>
            <Route path="/createpost" element={<CreatePost />}/>
            <Route path="/createblog" element={<CreateBlog />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
          </Routes>
          <Footer /> 
        </Router>
       </div>
  );
}

export default App;
