import axios from 'axios'

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api',
  timeout: 8000
})

export async function getProducts() {
  const r = await API.get('/products')
  return r.data
}

export async function getCart() {
  const r = await API.get('/cart')
  return {
    items: r.data.items || [],
    total: r.data.total || 0
  };
}

export async function addToCart(productId, qty) {
  const r = await API.post('/cart', { productId, qty })
  return r.data
}

export async function removeFromCart(id) {
  const r = await API.delete(`/cart/${id}`)
  return r.data
}

export async function checkout(payload) {
  const r = await API.post('/checkout', payload)
  return r.data
}

console.log("Using API base URL:", import.meta.env.VITE_API_BASE_URL);
