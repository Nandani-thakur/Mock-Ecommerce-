import React, { useEffect, useState } from 'react'
import { getProducts, addToCart } from '../api'
import ProductCard from '../components/ProductCard'
import FloatingCart from '../components/FloatingCart'

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [adding, setAdding] = useState(null)

  useEffect(() => {
    let mounted = true
    getProducts().then(data => {
      if (mounted) setProducts(data)
    }).catch(err => {
      console.error(err)
      setError('Failed to load products')
    }).finally(() => setLoading(false))
    return () => mounted = false
  }, [])

  async function handleAdd(productId) {
    setAdding(productId)
    try {
      await addToCart(productId, 1)
    } catch (e) {
      console.error(e)
      alert('Failed to add to cart')
    } finally {
      setAdding(null)
    }
  }

  if (loading) return <div className="text-center py-12">Loading products...</div>
  if (error) return <div className="text-center py-12 text-red-600">{error}</div>

  return (
    <div className="relative p-6">
      <FloatingCart />
      <h2 className="text-2xl font-semibold mb-4">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(p => (
          <ProductCard key={p._id} product={p} onAdd={() => handleAdd(p._id)} adding={adding === p._id} />
        ))}
      </div>
    </div>
  )
}
