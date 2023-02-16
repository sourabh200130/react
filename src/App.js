import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//import Image from "./assets/download.jpg";
//import Demo from './components/Demo';
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/contact';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/services' element={<Services />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
