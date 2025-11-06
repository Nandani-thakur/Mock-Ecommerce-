import React from 'react'

export default function ProductCard({ product, onAdd, adding }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col">
      <div className="aspect-[4/3] w-full mb-3 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
        <img src={product.image ||product.imageUrl|| 'https://i.pinimg.com/1200x/04/2f/36/042f36850f096e614485e3477ad3366f.jpg'} alt={product.name} className="object-cover h-full w-full" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium">{product.name}</h3>
        <div className="mt-2 text-lg font-semibold">₹{Number(product.price).toFixed(0)}</div>
      </div>
      <div className="mt-4">
        <button onClick={onAdd} disabled={adding} className="w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
          {adding ? 'Adding...' : 'Add to cart'}
        </button>
      </div>
    </div>
  )
}
