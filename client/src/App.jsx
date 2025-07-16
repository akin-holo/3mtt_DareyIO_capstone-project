import { useState } from 'react'
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
import Login from './pages/Login'
import Register from './pages/Register' 
import './App.css'

function App() {

  return (
    //<>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      
    //</>
  )
}

export default App
