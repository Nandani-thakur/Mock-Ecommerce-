import React, { useEffect, useState } from 'react'
import { getCart } from '../api'

export default function FloatingCart() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function fetchCartCount() {
      try {
        const data = await getCart()
        setCount(data.items.length)
      } catch (err) {
        console.error(err)
      }
    }
    fetchCartCount()
  }, [])

  return (
    <div className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-50">
      {count}
    </div>
  )
}
