// // // import React, { useEffect, useState } from 'react'
// // // import { getCart, removeFromCart, addToCart } from '../api'
// // // import CheckoutModal from '../components/CheckoutModal'

// // // export default function CartPage() {
// // //   const [cartItems, setCartItems] = useState([])
// // //   const [total, setTotal] = useState(0)
// // //   const [showCheckout, setShowCheckout] = useState(false)

// // //   async function fetchCart() {
// // //     try {
// // //       const data = await getCart()
// // //       setCartItems(data.items)
// // //       setTotal(data.total)
// // //     } catch (err) {
// // //       console.error(err)
// // //     }
// // //   }

// // //   useEffect(() => {
// // //     fetchCart()
// // //   }, [])

// // //   async function handleRemove(cartId) {
// // //     try {
// // //       await removeFromCart(cartId)
// // //       fetchCart()
// // //     } catch (err) {
// // //       console.error(err)
// // //     }
// // //   }

// // //   async function handleQtyChange(item, qty) {
// // //     try {
// // //       await addToCart(item.productId, qty)
// // //       fetchCart()
// // //     } catch (err) {
// // //       console.error(err)
// // //     }
// // //   }

// // //   return (
// // //     <div className="p-6">
// // //       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
// // //       {cartItems.length === 0 ? (
// // //         <p>No items in cart.</p>
// // //       ) : (
// // //         <>
// // //           <ul className="divide-y divide-gray-200">
// // //             {cartItems.map(item => (
// // //               <li key={item.cartId} className="flex justify-between py-3 items-center">
// // //                 <div>
// // //                   <p className="font-semibold">{item.name}</p>
// // //                   <p className="text-sm text-gray-600">Qty: {item.qty} × ₹{item.price}</p>
// // //                   <div className="mt-1 flex gap-2">
// // //                     <button onClick={() => handleQtyChange(item, item.qty - 1)} disabled={item.qty <= 1} className="px-2 bg-gray-200 rounded">-</button>
// // //                     <button onClick={() => handleQtyChange(item, item.qty + 1)} className="px-2 bg-gray-200 rounded">+</button>
// // //                     <button onClick={() => handleRemove(item.cartId)} className="px-2 bg-red-500 text-white rounded">Remove</button>
// // //                   </div>
// // //                 </div>
// // //                 <p className="font-semibold">₹{item.price * item.qty}</p>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //           <div className="text-right mt-6 text-lg font-bold">Total: ₹{total}</div>
// // //           <button onClick={() => setShowCheckout(true)} className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
// // //             Proceed to Checkout
// // //           </button>
// // //         </>
// // //       )}

// // //       {showCheckout && <CheckoutModal total={total} cart={cartItems} setShowCheckout={setShowCheckout} />}
// // //     </div>
// // //   )
// // // }
// // import React, { useEffect, useState } from 'react'
// // import { getCart, removeFromCart, addToCart } from '../api'
// // import CheckoutModal from '../components/CheckoutModal'

// // export default function CartPage() {
// //   const [cartItems, setCartItems] = useState([])
// //   const [total, setTotal] = useState(0)
// //   const [showCheckout, setShowCheckout] = useState(false)

// //   // Fetch cart from backend
// //   async function fetchCart() {
// //     try {
// //       const data = await getCart()
// //       setCartItems(data.items)
// //       setTotal(data.total)
// //     } catch (err) {
// //       console.error(err)
// //     }
// //   }

// //   useEffect(() => {
// //     fetchCart()
// //   }, [])

// //   // Remove an item
// //   async function handleRemove(cartId) {
// //     try {
// //       await removeFromCart(cartId)
// //       fetchCart()
// //     } catch (err) {
// //       console.error(err)
// //     }
// //   }

// //   // Change quantity
// //   async function handleQtyChange(item, qty) {
// //     if (qty < 1) return
// //     try {
// //       await addToCart(item.productId, qty)
// //       fetchCart()
// //     } catch (err) {
// //       console.error(err)
// //     }
// //   }

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

// //       {cartItems.length === 0 ? (
// //         <p>No items in cart.</p>
// //       ) : (
// //         <>
// //           <ul className="divide-y divide-gray-200">
// //             {cartItems.map(item => (
// //               <li key={item.cartId} className="flex justify-between py-3 items-center">
// //                 <div>
// //                   <p className="font-semibold">{item.name}</p>
// //                   <p className="text-sm text-gray-600">Qty: {item.qty} × ₹{item.price}</p>
// //                   <div className="mt-1 flex gap-2">
// //                     <button onClick={() => handleQtyChange(item, item.qty - 1)} disabled={item.qty <= 1} className="px-2 bg-gray-200 rounded">-</button>
// //                     <button onClick={() => handleQtyChange(item, item.qty + 1)} className="px-2 bg-gray-200 rounded">+</button>
// //                     <button onClick={() => handleRemove(item.cartId)} className="px-2 bg-red-500 text-white rounded">Remove</button>
// //                   </div>
// //                 </div>
// //                 <p className="font-semibold">₹{item.price * item.qty}</p>
// //               </li>
// //             ))}
// //           </ul>

// //           <div className="text-right mt-6 text-lg font-bold">Total: ₹{total}</div>
// //           <button onClick={() => setShowCheckout(true)} className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
// //             Proceed to Checkout
// //           </button>
// //         </>
// //       )}

// //       {showCheckout && (
// //         <CheckoutModal
// //           total={total}
// //           cart={cartItems}
// //           setShowCheckout={setShowCheckout}
// //           refreshCart={fetchCart} // pass fetchCart so modal can refresh
// //         />
// //       )}
// //     </div>
// //   )
// // }
// import React, { useEffect, useState } from 'react';
// import { getCart, removeFromCart, addToCart } from '../api';
// import CheckoutModal from '../components/CheckoutModal';

// export default function CartPage() {
//   const [cartItems, setCartItems] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [showCheckout, setShowCheckout] = useState(false);

//   async function fetchCart() {
//     try {
//       const data = await getCart();
//       setCartItems(data.items);
//       setTotal(data.total);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   async function handleRemove(cartId) {
//     try {
//       await removeFromCart(cartId);
//       fetchCart();
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   async function handleQtyChange(item, qty) {
//     try {
//       await addToCart(item.productId, qty);
//       fetchCart();
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   // **Compute total dynamically from cartItems**
//   const computedTotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>No items in cart.</p>
//       ) : (
//         <>
//           <ul className="divide-y divide-gray-200">
//             {cartItems.map(item => (
//               <li key={item.cartId} className="flex justify-between py-3 items-center">
//                 <div>
//                   <p className="font-semibold">{item.name}</p>
//                   <p className="text-sm text-gray-600">Qty: {item.qty} × ₹{item.price}</p>
//                   <div className="mt-1 flex gap-2">
//                     <button
//                       onClick={() => handleQtyChange(item, item.qty - 1)}
//                       disabled={item.qty <= 1}
//                       className="px-2 bg-gray-200 rounded"
//                     >
//                       -
//                     </button>
//                     <button
//                       onClick={() => handleQtyChange(item, item.qty + 1)}
//                       className="px-2 bg-gray-200 rounded"
//                     >
//                       +
//                     </button>
//                     <button
//                       onClick={() => handleRemove(item.cartId)}
//                       className="px-2 bg-red-500 text-white rounded"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//                 <p className="font-semibold">₹{item.price * item.qty}</p>
//               </li>
//             ))}
//           </ul>

//           <div className="text-right mt-6 text-lg font-bold">
//             Total: ₹{computedTotal}
//           </div>

//           <button
//             onClick={() => setShowCheckout(true)}
//             className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
//           >
//             Proceed to Checkout
//           </button>
//         </>
//       )}

//       {showCheckout && (
//         <CheckoutModal
//           cart={cartItems}
//           setCart={setCartItems} // pass setter to clear cart on checkout
//           setShowCheckout={setShowCheckout}
//         />
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import { getCart, removeFromCart, addToCart } from '../api';
import CheckoutModal from '../components/CheckoutModal';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);

  async function fetchCart() {
    try {
      const data = await getCart();
      setCartItems(data.items);
      setTotal(data.total);
    } catch (err) {
      console.error(err);
      alert("Failed to load cart. Please refresh the page."); // Added alert for visibility
    }
  }

  useEffect(() => {
    fetchCart();
  }, []);

  async function handleRemove(cartId) {
    try {
      await removeFromCart(cartId);
      fetchCart();
    } catch (err) {
      console.error(err);
      alert("Failed to remove item.");
    }
  }

  async function handleQtyChange(item, qty) {
    try {
      await addToCart(item.productId, qty);
      fetchCart();
    } catch (err) {
      console.error(err);
      alert("Failed to update quantity.");
    }
  }

  // **Compute total dynamically from cartItems**
  const computedTotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cartItems.map(item => (
              <li key={item.cartId} className="flex justify-between py-3 items-center">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">Qty: {item.qty} × ₹{item.price}</p>
                  <div className="mt-1 flex gap-2">
                    <button
                      onClick={() => handleQtyChange(item, item.qty - 1)}
                      disabled={item.qty <= 1}
                      className="px-2 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <button
                      onClick={() => handleQtyChange(item, item.qty + 1)}
                      className="px-2 bg-gray-200 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleRemove(item.cartId)}
                      className="px-2 bg-red-500 text-white rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="font-semibold">₹{item.price * item.qty}</p>
              </li>
            ))}
          </ul>

          <div className="text-right mt-6 text-lg font-bold">
            Total: ₹{computedTotal}
          </div>

          <button
            onClick={() => setShowCheckout(true)}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Proceed to Checkout
          </button>
        </>
      )}

      {showCheckout && (
        <CheckoutModal
          cart={cartItems}
          setShowCheckout={setShowCheckout}
          fetchCart={fetchCart} // Pass fetchCart to modal for refetching after checkout
        />
      )}
    </div>
  );
}