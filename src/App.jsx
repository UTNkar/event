import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Custom components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

// Page imports
import Error404 from './pages/Error404';
import Home from './pages/Home';

function App() {
  return (
  <Router>
    <Navbar style={{fontFamily: "roboto"}}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/calender" element={<Calender/>}/> */}
      <Route path="*" element={<Error404/>}/>
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
