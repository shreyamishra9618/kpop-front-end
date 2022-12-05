import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Header from "./components/Header/";
import Footer from "./components/Footer/";


function App() {
  return (
    <div >
      <Router basename="/">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} /> 
            <Route path="/Login" element={<Login />}/>
          </Routes>
          <Footer /> 
        </Router>
       </div>
  );
}

export default App;
