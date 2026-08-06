import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaTrash, FaArrowRight } from 'react-icons/fa';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-32 space-y-6">
        <h2 className="text-3xl font-bold">Your cart is empty</h2>
        <p className="text-gray-500">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/shop" className="btn btn-primary rounded-full px-8">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 space-y-6">
          {cartItems.map(item => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-base-100 rounded-2xl shadow-sm border border-base-200">
              <img src={item.image} alt={item.name} className="w-24 h-24 rounded-xl object-cover" />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.category}</p>
                <p className="font-bold text-primary mt-1">${item.price.toFixed(2)}</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="join">
                  <button className="btn btn-sm btn-outline join-item" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <button className="btn btn-sm btn-outline join-item pointer-events-none w-10">{item.quantity}</button>
                  <button className="btn btn-sm btn-outline join-item" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className="btn btn-ghost text-error btn-circle" onClick={() => removeFromCart(item.id)}>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="lg:w-96">
          <div className="bg-base-200 p-6 rounded-3xl sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium">${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="border-t border-base-300 pt-4 flex justify-between items-center">
                <span className="font-bold text-lg">Total</span>
                <span className="font-bold text-2xl text-primary">${getCartTotal().toFixed(2)}</span>
              </div>
            </div>
            <button className="btn btn-primary w-full rounded-full h-12 text-lg">
              Checkout <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;