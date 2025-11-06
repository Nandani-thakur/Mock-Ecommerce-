
import React, { useState } from "react";
import ReceiptModal from "./ReceiptModal";
import { checkout } from "../api";

export default function CheckoutModal({ cart, setShowCheckout, fetchCart }) {
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [receipt, setReceipt] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) {
      return alert("Please fill all fields.");
    }

    try {
      const data = await checkout({ cartItems: cart, ...form });
      setReceipt(data.receipt); // save backend receipt
      // Refetch cart to sync with backend (should be empty if backend cleared it)
      if (fetchCart) await fetchCart();
    } catch (err) {
      console.error(err);
      alert("Checkout failed");
    }
  };

  const handleClose = () => {
    setReceipt(null);
    setShowCheckout(false);
  };

  // Show receipt if backend responded
  if (receipt) {
    return <ReceiptModal receipt={receipt} cart={cart} form={form} onClose={handleClose} />;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-md p-6 relative">
        <button
          onClick={handleClose}
          className="absolute top-3 right-4 text-gray-500 text-xl hover:text-red-500"
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold text-center mb-4">Checkout Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
          />
          <textarea
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
            rows="3"
          />
          <p className="text-lg font-semibold text-center">
            Total: ₹{cart.reduce((sum, item) => sum + item.price * item.qty, 0)}
          </p>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
}