import './index.css'
import Navbar from '../src/components/Navbar.tsx'
import { Routes, Route } from "react-router-dom";
import Home from '../src/pages/HomePage.tsx'
// import Contact from '../src/pages/contact/Contact.jsx'
// import Faq from '../src/pages/faq/Faq.jsx'
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
       {/* } <Route path='/contact' element={<Contact/>} />
        <Route path='/FAQ' element={<Faq/>} /> */}
      </Routes> 
    </>
  )
}
export default App