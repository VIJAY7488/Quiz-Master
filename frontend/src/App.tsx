
import { Route, Routes } from "react-router-dom"
import Hero from "./pages/Hero"
import Register from "./pages/Register"
import { ToastContainer } from 'react-toastify';



const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register" element={<Register />} />
    </Routes>
    </div>
    
  )
}

export default App
