import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import Wikipage from "./pages/WikiPage";


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
          </Routes>
          <Footer /> 
        </Router>
       </div>
  );
}

export default App;
