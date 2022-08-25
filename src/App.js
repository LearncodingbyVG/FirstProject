import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About'
import NavbarComp from './components/Navbar';

function App() {
  return (
    <div className="App">  
    <NavbarComp/>
     <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Routes>
    </div>
  );
}

export default App;
