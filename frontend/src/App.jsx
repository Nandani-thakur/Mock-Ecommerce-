import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import Navbar from './components/Navbar'

export default function App(){
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </div>
  )
}
