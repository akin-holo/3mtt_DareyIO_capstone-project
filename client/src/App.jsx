import { useState } from 'react'
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register' 
import MovieDetails from './pages/MovieDetails'
import Watchlist from './pages/Watchlist'
import Favorites from './pages/Favorites'
import Recommendations from './pages/Recommendation'
import './App.css'

function App() {

  return (
    <>
      <Navbar />

      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
