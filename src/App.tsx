import './index.css'
import Navbar from '../src/components/Navbar.tsx'
import { Routes, Route } from "react-router-dom";
import Home from '../src/pages/HomePage.tsx'
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes> 
    </>
  )
}
export default App