
// // import React from "react";

// // export default function ReceiptModal({ total, cart, form, onClose }) {
// //   const timestamp = new Date().toLocaleString();

// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
// //       <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-md p-6 relative">
// //         <button
// //           onClick={onClose}
// //           className="absolute top-3 right-4 text-gray-500 text-xl hover:text-red-500"
// //         >
// //           ×
// //         </button>

// //         <h2 className="text-2xl font-semibold text-center mb-4">
// //           Receipt
// //         </h2>

// //         <div className="space-y-2">
// //           <p className="font-medium">Name: {form.name}</p>
// //           <p className="font-medium">Email: {form.email}</p>
// //           <p className="font-medium">Address: {form.address}</p>
// //           <p className="font-medium">Date: {timestamp}</p>
// //         </div>

// //         <div className="mt-4 border-t border-gray-200 pt-4">
// //           <h3 className="font-semibold mb-2">Items:</h3>
// //           <ul className="divide-y divide-gray-200 max-h-40 overflow-y-auto">
// //             {cart.map((item) => (
// //               <li key={item.cartId} className="flex justify-between py-1">
// //                 <span>{item.name} x {item.qty}</span>
// //                 <span>₹{item.price * item.qty}</span>
// //               </li>
// //             ))}
// //           </ul>
// //           <div className="text-right mt-4 font-bold text-lg">
// //             Total: ₹{total.toFixed(0)}
// //           </div>
// //         </div>

// //         <button
// //           onClick={onClose}
// //           className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
// //         >
// //           Close
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }
// import React from "react";

// export default function ReceiptModal({ receipt, cart, form, onClose }) {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-md p-6 relative">
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-4 text-gray-500 text-xl hover:text-red-500"
//         >
//           ×
//         </button>

//         <h2 className="text-2xl font-semibold text-center mb-4">Receipt</h2>

//         <div className="space-y-2">
//           <p className="font-medium">Name: {form.name}</p>
//           <p className="font-medium">Email: {form.email}</p>
//           <p className="font-medium">Address: {form.address}</p>
//           <p className="font-medium">
//             Date: {new Date(receipt.timestamp).toLocaleString()}
//           </p>
//         </div>

//         <div className="mt-4 border-t border-gray-200 pt-4">
//           <h3 className="font-semibold mb-2">Items:</h3>
//           <ul className="divide-y divide-gray-200 max-h-40 overflow-y-auto">
//             {cart.map((item) => (
//               <li key={item.cartId} className="flex justify-between py-1">
//                 <span>
//                   {item.name} x {item.qty}
//                 </span>
//                 <span>₹{item.price * item.qty}</span>
//               </li>
//             ))}
//           </ul>
//           <div className="text-right mt-4 font-bold text-lg">
//             Total: ₹{receipt.total.toFixed(0)}
//           </div>
//         </div>

//         <button
//           onClick={onClose}
//           className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function ReceiptModal({ receipt, cart, form, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 text-xl hover:text-red-500"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold text-center mb-4">Receipt</h2>

        <div className="space-y-2">
          <p className="font-medium">Name: {form.name}</p>
          <p className="font-medium">Email: {form.email}</p>
          <p className="font-medium">Address: {form.address}</p>
          <p className="font-medium">
            Date: {new Date(receipt.timestamp).toLocaleString()}
          </p>
        </div>

        <div className="mt-4 border-t border-gray-200 pt-4">
          <h3 className="font-semibold mb-2">Items:</h3>
          <ul className="divide-y divide-gray-200 max-h-40 overflow-y-auto">
            {cart.map((item) => (
              <li key={item.cartId} className="flex justify-between py-1">
                <span>
                  {item.name} x {item.qty}
                </span>
                <span>₹{item.price * item.qty}</span>
              </li>
            ))}
          </ul>
          <div className="text-right mt-4 font-bold text-lg">
            Total: ₹{receipt.total.toFixed(0)}
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}