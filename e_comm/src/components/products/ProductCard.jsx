import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { FaShoppingCart, FaEye, FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group card bg-base-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-base-200 rounded-3xl overflow-hidden">
      <figure className="relative pt-[75%] overflow-hidden bg-base-200">
        <img 
          src={product.image} 
          alt={product.name} 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-3 left-3">
          <span className="badge badge-sm bg-base-100/80 backdrop-blur-md border-0 font-medium text-xs shadow-xs px-3 py-2">
            {product.category}
          </span>
        </div>
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-base-900/40 backdrop-blur-[2px] flex items-center justify-center">
            <span className="badge badge-error font-semibold text-xs px-3 py-2">Out of Stock</span>
          </div>
        )}
      </figure>

      <div className="card-body p-5">
        <div className="flex items-center gap-1 text-amber-400 text-xs mb-1">
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-amber-400/40" />
          <span className="text-gray-400 ml-1 text-xs">(4.8)</span>
        </div>
        
        <h2 className="card-title text-base font-semibold line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h2>
        
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-base-200/60">
          <div>
            <span className="text-xs text-gray-400 block">Price</span>
            <span className="font-bold text-xl text-base-content">${product.price.toFixed(2)}</span>
          </div>
          
          <div className="flex gap-2">
            <Link 
              to={`/product/${product.id}`} 
              className="btn btn-circle btn-ghost btn-sm hover:bg-base-200"
              title="View details"
            >
              <FaEye className="w-4 h-4 text-gray-600" />
            </Link>
            <button 
              onClick={() => addToCart(product)} 
              disabled={product.stock === 0}
              className="btn btn-primary btn-sm rounded-full px-4 gap-2 text-xs font-semibold shadow-sm hover:shadow-md transition-all"
            >
              <FaShoppingCart className="w-3 h-3" />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;