import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-auto">
      <nav className="grid grid-flow-col gap-4">
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/shop" className="link link-hover">Shop</Link>
        <Link to="/cart" className="link link-hover">Cart</Link>
      </nav> 
      <aside>
        <p>Copyright © 2026 - All right reserved by LuminaStore Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;