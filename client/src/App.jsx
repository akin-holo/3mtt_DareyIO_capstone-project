import { useState } from 'react'
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register' 
import MovieDetails from './pages/MovieDetails'
import './App.css'

function App() {

  return (
    //<>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
        </Routes>
      </Router>
      
    //</>
  )
}

export default App
