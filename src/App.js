import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import TriviaQuiz from "./pages/TriviaQuiz";
import CreatePost from "./pages/CreatePost";
import CreateBlog from "./pages/CreateBlog";


function App() {
  return (
    <div >
      <Router basename="/">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} /> 
            <Route path="/Login" element={<Login />}/>
            <Route path="/triviaquiz" element={<TriviaQuiz />}/>
            <Route path="/createpost" element={<CreatePost />}/>
            <Route path="/createblog" element={<CreateBlog />}/>
          </Routes>
          <Footer /> 
        </Router>
       </div>
  );
}

export default App;
