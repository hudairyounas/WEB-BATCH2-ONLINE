import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="navbar bg-base-100 shadow-sm px-8 border-b border-base-200">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl font-bold">LuminaStore</Link>
      </div>
      <div className="flex-none gap-4">
        <div className="hidden sm:flex gap-2">
          <Link to="/" className="btn btn-ghost rounded-full">Home</Link>
          <Link to="/shop" className="btn btn-ghost rounded-full">Shop</Link>
        </div>
        <div className="dropdown dropdown-end">
          <Link to="/cart" tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FaShoppingCart className="h-5 w-5" />
              <span className="badge badge-sm badge-primary indicator-item">{cartCount}</span>
            </div>
          </Link>
        </div>
        {currentUser ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full bg-primary/20 flex items-center justify-center">
                 <FaUser className="text-primary h-4 w-4" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><button onClick={logout}>Logout</button></li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary btn-sm rounded-full px-6">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;