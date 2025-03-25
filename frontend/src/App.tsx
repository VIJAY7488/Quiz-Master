
import { Route, Routes } from "react-router-dom"
import Hero from "./pages/Hero"
import Register from "./pages/Register"
import { ToastContainer } from 'react-toastify';
import Login from "./pages/Login";



const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    </div>
    
  )
}

export default App
