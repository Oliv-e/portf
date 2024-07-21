import './index.css'
import Navbar from '../src/components/Navbar.tsx'
import { Routes, Route } from "react-router-dom";
import Home from '../src/pages/HomePage.tsx';
import CV from '../src/pages/CVPage.tsx';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cv' element={<CV/>} />
      </Routes> 
    </>
  )
}
export default App