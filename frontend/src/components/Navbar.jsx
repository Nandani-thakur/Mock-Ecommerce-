import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getCart } from '../api'

export default function Navbar(){
  const [count, setCount] = useState(0)
  const loc = useLocation()

  useEffect(()=>{
    let mounted = true
    getCart().then(d => { if (mounted) setCount(d.items.length) }).catch(()=>{})
    // poll every 6s for small freshness (optional)
    const iv = setInterval(()=> getCart().then(d => { if (mounted) setCount(d.items.length) }).catch(()=>{}), 6000)
    return ()=> { mounted = false; clearInterval(iv) }
  }, [])

  return (
    <nav className="bg-white shadow p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">Vibe Commerce</Link>
        <div className="flex items-center gap-4">
          <Link to="/" className={`px-3 py-1 rounded ${loc.pathname==='/' ? 'bg-primary text-white' : 'text-gray-700'}`}>Shop</Link>
          <Link to="/cart" className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4"/>
            </svg>
            {count>0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1.5">{count}</span>}
          </Link>
        </div>
      </div>
    </nav>
  )
}
